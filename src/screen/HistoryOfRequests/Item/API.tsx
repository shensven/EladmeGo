import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import Color from 'color';

type Props = {method: string; path: string};

function API(props: Props) {
  const {method, path} = props;
  const {paperTheme} = useAppearance();

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text
        variant="bodySmall"
        style={{
          fontSize: 10,
          paddingHorizontal: 4,
          paddingVertical: 1,
          borderWidth: 1,
          borderColor: Color('green').alpha(0.35).hexa(),
          borderRadius: 6,
          color: 'green',
          backgroundColor: Color('green').alpha(0.12).hexa(),
          overflow: 'hidden',
          textAlignVertical: 'center',
          textAlign: 'center',
        }}>
        {method.toUpperCase()}
      </Text>
      <Text
        variant="bodySmall"
        numberOfLines={1}
        style={{
          flexShrink: 1,
          marginLeft: 8,
          color: paperTheme.colors.onBackground,
        }}>
        {path}
      </Text>
    </View>
  );
}

export default API;
