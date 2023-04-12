import React from 'react';
import {View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {IcRoundAddReaction} from '@/component/Icon';

function IconButtonIcRoundAddReaction() {
  const {navigationTheme} = useAppearance();
  return <IcRoundAddReaction width={24} height={24} color={navigationTheme.colors.text} />;
}

type StackParamList = {};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

function HeaderRight() {
  const navigation = useNavigation<ScreenNavigationProp>();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconButton icon={IconButtonIcRoundAddReaction} onPress={() => navigation.goBack()} />
    </View>
  );
}

export default HeaderRight;
