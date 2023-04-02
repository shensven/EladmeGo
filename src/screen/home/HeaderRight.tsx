import React, {useCallback} from 'react';
import {Platform, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {IcRoundMoreHoriz, IcRoundMoreVert} from '@/component/icon';

type StackParamList = {
  Settings: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

function HeaderRight() {
  const navigation = useNavigation<ScreenNavigationProp>();
  const {navigationTheme} = useAppearance();

  const IconButtonMore = useCallback(
    () => (
      <>
        {Platform.OS === 'ios' && <IcRoundMoreHoriz color={navigationTheme.colors.text} />}
        {Platform.OS === 'android' && <IcRoundMoreVert color={navigationTheme.colors.text} />}
      </>
    ),
    [navigationTheme.dark],
  );

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconButton icon={IconButtonMore} onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

export default HeaderRight;