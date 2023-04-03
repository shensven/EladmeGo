import {Alert, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {axiosInstance, useAccessToken} from '@/utils/httpClient';
import {IcRoundVisibility, IcRoundVisibilityOff} from '@/component/icon';
import type {AxiosResponse} from 'axios';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

function AccessToken() {
  const {paperTheme} = useAppearance();
  const {accessToken, setAccessToken, clearAccessToken} = useAccessToken();

  const [form, setForm] = useState({
    accessToken,
    secureTextEntry: true,
  });

  const submit = () => {
    axiosInstance
      .get('/member/v1/member/active', {
        headers: {
          Authorization: `Bearer ${form.accessToken}`,
        },
      })
      .then((resp: AxiosResponse<{code: number; message: string; result: []}>) => {
        const {data} = resp;
        switch (data.code) {
          case 0:
            const {exp}: {exp: number} = jwtDecode(form.accessToken);
            Alert.alert('验证成功', `过期时间👉 ${dayjs.unix(exp).format('YYYY-MM-DD HH:mm:ss')}`);
            setAccessToken(form.accessToken);
            break;
          case 401:
            Alert.alert('验证失败', data.message);
            break;
          default:
            Alert.alert('验证失败');
        }
      })
      .catch(console.error);
  };

  const clear = () => {
    Alert.alert('再次确认', '确定要清除访问令牌吗？', [
      {text: '取消'},
      {
        text: '确定',
        onPress: () => {
          clearAccessToken();
          setForm({...form, accessToken: ''});
        },
      },
    ]);
  };

  const TextInputIcon = useCallback(
    () =>
      form.secureTextEntry ? (
        <IcRoundVisibilityOff color={paperTheme.colors.onBackground} />
      ) : (
        <IcRoundVisibility color={paperTheme.colors.onBackground} />
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
