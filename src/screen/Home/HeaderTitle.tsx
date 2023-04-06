import React from 'react';
import {View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import EladmeGo from '@/assets/homeTitle/EladmeGo.svg';

function HeaderTitle() {
  return (
    <View
      style={{
        transform: [{scale: 0.8}],
      }}>
      <SvgXml xml={EladmeGo.toString()} />
    </View>
  );
}

export default HeaderTitle;
