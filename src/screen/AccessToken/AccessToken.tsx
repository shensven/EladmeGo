import {Alert, View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken, useAxios} from '@/utils/httpClient';
import {IcRoundVisibility, IcRoundVisibilityOff} from '@/component/icon';
import type {AxiosResponse} from 'axios';

function AccessToken() {
  const {paperTheme} = useAppearance();
  const {accessToken, storeAccessToken} = useAccessToken();
  const axios = useAxios();

  const [form, setForm] = useState({
    accessToken,
    secureTextEntry: true,
  });

  const submit = () => {
    axios
      .get('/member/v1/member/active', {
        headers: {Authorization: `Bearer ${form.accessToken}`},
      })
      .then((resp: AxiosResponse<{code: number; message: string; result: []}>) => {
        const {data} = resp;
        switch (data.code) {
          case 0:
            Alert.alert('验证成功');
            storeAccessToken(form.accessToken);
            break;
          case 401:
            Alert.alert('验证失败', data.message);
            break;
          default:
            Alert.alert('验证失败');
        }
      })
      .catch(error => {
        console.log(error);
      });
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
        secureTextEntry={form.secureTextEntry}
        right={
          <TextInput.Icon
            icon={TextInputIcon}
            onPress={() => setForm({...form, secureTextEntry: !form.secureTextEntry})}
          />
        }
        value={form.accessToken}
        onChangeText={event => setForm({...form, accessToken: event})}
      />
      <Button mode="contained" style={{borderRadius: 12, marginTop: 16}} onPress={submit}>
        验 证
      </Button>
    </View>
  );
}

export default AccessToken;
