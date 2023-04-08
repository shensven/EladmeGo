import {Platform, View} from 'react-native';
import React from 'react';
import {Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import type {HttpLog} from '@/utils/httpClient';
import Color from 'color';
import dayjs from 'dayjs';

type Props = {
  status: HttpLog['resp']['status'];
  timestamp: HttpLog['timestamp'];
};

function Status(props: Props) {
  const {status, timestamp} = props;
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
        {status}
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
        {dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}
      </Text>
    </View>
  );
}

export default Status;
