import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import Color from 'color';
import {v1 as uuidv1} from 'uuid';

type Props = {
  title: string;
  keyValueSets: Record<string, string>;
};

function HScrollView(props: Props) {
  const {title, keyValueSets} = props;
  const {width: windowWidth} = useWindowDimensions();
  const {paperTheme} = useAppearance();

  const BORDER_RADIUS = 10;
  const PADDING = 4;

  return (
    <View style={{width: windowWidth}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: PADDING,
            marginHorizontal: 16,
            backgroundColor: Color(paperTheme.colors.onBackground).alpha(0.05).hexa(),
            borderRadius: BORDER_RADIUS,
          }}>
          <Text numberOfLines={1} variant="bodySmall" style={{fontSize: 10, marginLeft: 8, width: 40}}>
            {title}
          </Text>
          {Object.keys(keyValueSets).map(key => (
            <Text
              key={uuidv1()}
              variant="bodySmall"
              style={{
                fontSize: 10,
                color: Color(paperTheme.colors.onSurface).alpha(0.9).hexa(),
                backgroundColor: paperTheme.colors.surface,
                paddingVertical: 4,
                paddingHorizontal: 8,
                marginLeft: 4,
                borderRadius: BORDER_RADIUS - PADDING,
                overflow: 'hidden',
              }}>
              {key === 'Authorization'
                ? key + ' = ' + keyValueSets[key].slice(0, 48) + '...'
                : key + ' = ' + keyValueSets[key]}
            </Text>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default HScrollView;
