import React from 'react';
import {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {IcRoundChevronRight} from '@/component/Icon';
import color from 'color';
import {useAppearance} from '@/utils/appearance';
import type Invitation from './Invitation';

type ItemProps = {
  data: Invitation['lists']['data'][number];
};

function Item(props: ItemProps) {
  const {data} = props;
  const {name, status_text, time, duration_text} = data;

  const {paperTheme} = useAppearance();

  return (
    <View
      style={{
        marginHorizontal: 20,
        borderRadius: 16,
        overflow: 'hidden',
      }}>
      <TouchableRipple onPress={() => {}}>
        <View
          style={{
            backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).toString(),
            paddingHorizontal: 16,
            paddingVertical: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text variant="titleMedium">{name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text variant="bodySmall">{status_text}</Text>
              <IcRoundChevronRight
                width={24}
                height={24}
                color={color(paperTheme.colors.onBackground).alpha(0.7).toString()}
              />
            </View>
          </View>

          <View style={{flexDirection: 'row', marginTop: 8, opacity: 0.7}}>
            <Text variant="bodySmall">访问时间</Text>
            <Text variant="bodySmall" style={{marginLeft: 8}}>
              {time}
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginTop: 4, opacity: 0.7}}>
            <Text variant="bodySmall">滞留时长</Text>
            <Text variant="bodySmall" style={{marginLeft: 8}}>
              {duration_text}
            </Text>
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
}

export default Item;
