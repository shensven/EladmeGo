import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {IconButton} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import IcRoundDownload from '@/component/Icon/IcRoundDownload.svg';
import IcRoundFilterList from '@/component/Icon/IcRoundFilterList.svg';

function IcRoundDownloadSvg() {
  const {navigationTheme} = useAppearance();
  return <SvgXml width={24} height={24} xml={IcRoundDownload.toString()} color={navigationTheme.colors.text} />;
}

function IcRoundFilterListSvg() {
  const {navigationTheme} = useAppearance();
  return <SvgXml width={24} height={24} xml={IcRoundFilterList.toString()} color={navigationTheme.colors.text} />;
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
