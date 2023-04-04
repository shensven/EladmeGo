import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';

type StackParamList = {
  AccessToken: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

function InitView() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
      <Button mode="contained-tonal" onPress={() => navigation.navigate('AccessToken')}>
        验证 Access Token 以启用通行证
      </Button>
    </View>
  );
}

export default InitView;
