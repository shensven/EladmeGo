import React from 'react';
import {SvgXml} from 'react-native-svg';
import EladmeGo from '@/assets/homeTitle/EladmeGo.svg';

function HeaderTitle() {
  return <SvgXml xml={EladmeGo.toString()} />;
}

export default HeaderTitle;
