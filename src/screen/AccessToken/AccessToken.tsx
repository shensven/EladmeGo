import {View} from 'react-native';
import React, {useCallback, useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken} from '@/utils/httpClient';
import {IcRoundVisibility, IcRoundVisibilityOff} from '@/component/icon';

function AccessToken() {
  const {paperTheme} = useAppearance();
  const {accessToken, setAccessToken} = useAccessToken();

  const [form, setForm] = useState({
    accessToken,
    secureTextEntry: true,
  });

  const submit = () => {
    setAccessToken(form.accessToken);
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
        保 存
      </Button>
    </View>
  );
}

export default AccessToken;
