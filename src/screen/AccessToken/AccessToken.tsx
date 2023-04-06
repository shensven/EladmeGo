import {Alert, Keyboard, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {IcRoundVisibility, IcRoundVisibilityOff} from '@/component/Icon';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken, useActive} from '@/utils/httpClient';
import {useStaff} from '@/utils/staff';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

function AccessToken() {
  const {paperTheme} = useAppearance();
  const {accessToken, setAccessToken, clearAccessToken, setIs401Status} = useAccessToken();
  const verifyActive = useActive();
  const {verifyStaff, resetStaff} = useStaff();

  const [form, setForm] = useState({
    accessToken,
    secureTextEntry: true,
  });

  const submit = () => {
    Keyboard.dismiss();
    verifyActive(form.accessToken).then(respActive => {
      const {code, message} = respActive.data;
      switch (code) {
        case 0:
          const {exp}: {exp: number} = jwtDecode(form.accessToken);
          Alert.alert('验证成功🎉', `过期时间 ${dayjs.unix(exp).format('YYYY-MM-DD HH:mm:ss')}`);
          setAccessToken(form.accessToken);
          setIs401Status(false);
          verifyStaff(form.accessToken);
          break;
        case 401:
          Alert.alert('验证失败😵', message);
          break;
        default:
          Alert.alert('验证失败😵');
      }
    });
  };

  const clear = () => {
    Alert.alert('再次确认👋', '确定要清除访问令牌吗？', [
      {text: '取消'},
      {
        text: '确定',
        onPress: () => {
          clearAccessToken();
          resetStaff();
          setForm({...form, accessToken: ''});
        },
      },
    ]);
  };

  const TextInputIcon = useCallback(
    () =>
      form.secureTextEntry ? (
        <IcRoundVisibilityOff width={24} height={24} color={paperTheme.colors.onBackground} />
      ) : (
        <IcRoundVisibility width={24} height={24} color={paperTheme.colors.onBackground} />
      ),
    [form.secureTextEntry, paperTheme.dark],
  );

  return (
    <View style={{padding: 16}}>
      <TextInput
        mode="outlined"
        multiline={false}
        numberOfLines={1}
        label="Access Token"
        value={form.accessToken}
        secureTextEntry={form.secureTextEntry}
        right={
          <TextInput.Icon
            icon={TextInputIcon}
            onPress={() => setForm({...form, secureTextEntry: !form.secureTextEntry})}
          />
        }
        onChangeText={event => setForm({...form, accessToken: event})}
      />
      <Button mode="contained" style={{borderRadius: 12, marginTop: 24}} onPress={submit}>
        验 证
      </Button>
      {accessToken.length > 0 && (
        <Button
          labelStyle={{
            color: paperTheme.colors.onBackground,
          }}
          style={{borderRadius: 12, marginTop: 16}}
          onPress={clear}>
          清 除
        </Button>
      )}
    </View>
  );
}

export default AccessToken;
