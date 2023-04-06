import React from 'react';
import {View} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {IcRoundDownload, IcRoundFilterList} from '@/component/Icon';

function IcRoundDownloadSvg() {
  const {navigationTheme} = useAppearance();
  return <IcRoundDownload width={24} height={24} color={navigationTheme.colors.text} />;
}

function IcRoundFilterListSvg() {
  const {navigationTheme} = useAppearance();
  return <IcRoundFilterList width={24} height={24} color={navigationTheme.colors.text} />;
}

function HeaderRight() {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <IconButton icon={IcRoundFilterListSvg} onPress={() => {}} />
      <IconButton icon={IcRoundDownloadSvg} onPress={() => {}} />
    </View>
  );
}

export default HeaderRight;
