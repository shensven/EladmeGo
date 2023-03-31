import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';

type StackParam = {
  Settings: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParam>['navigation'];

function Home() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Setting"
        onPress={() => {
          navigation.navigate('Settings');
        }}
      />
    </View>
  );
}

export default Home;
