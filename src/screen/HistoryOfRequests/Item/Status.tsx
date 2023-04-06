import {Platform, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import Color from 'color';

function Status() {
  const {paperTheme} = useAppearance();

  return (
    <View style={{marginLeft: 38, marginTop: 4, flexDirection: 'row', alignItems: 'center'}}>
      <Text
        variant="bodySmall"
        style={{
          fontSize: 10,
          fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
          fontVariant: ['tabular-nums'],
          color: Color(paperTheme.colors.onBackground).alpha(0.7).hexa(),
        }}>
        200
      </Text>
      <View
        style={{
          marginHorizontal: 8,
          width: 4,
          height: 4,
          borderRadius: 2,
          backgroundColor: Color(paperTheme.colors.onBackground).alpha(0.3).hexa(),
        }}
      />
      <Text
        variant="bodySmall"
        style={{
          fontSize: 10,
          fontFamily: Platform.OS === 'ios' ? 'Menlo' : 'monospace',
          fontVariant: ['tabular-nums'],
          color: Color(paperTheme.colors.onBackground).alpha(0.7).hexa(),
        }}>
        2023-01-01 00:00:00
      </Text>
    </View>
  );
}

export default Status;
