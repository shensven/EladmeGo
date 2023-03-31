import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {Button} from 'react-native-paper';

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
        mode="contained"
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        Setting
      </Button>
    </View>
  );
}

export default Home;
