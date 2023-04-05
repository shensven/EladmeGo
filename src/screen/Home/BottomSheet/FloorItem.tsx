import React, {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import color from 'color';

type Props = {
  floor: string;
  onPress?: () => void;
};

function FloorItem(props: Props) {
  const {floor, onPress} = props;
  const {paperTheme} = useAppearance();

  return (
    <TouchableRipple
      style={{
        marginVertical: 8,
        borderRadius: 12,
        overflow: 'hidden',
      }}
      onPress={onPress}>
      <View
        style={{
          height: 56,
          paddingHorizontal: 16,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).toString(),
        }}>
        <Text style={{color: paperTheme.colors.onSurface, includeFontPadding: false}}>{floor}</Text>
      </View>
    </TouchableRipple>
  );
}

export default FloorItem;
