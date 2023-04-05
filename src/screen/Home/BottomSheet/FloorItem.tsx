import React, {View} from 'react-native';
import {Text, TouchableRipple} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';
import color from 'color';

type Props = {
  floor: number;
  onPress?: () => void;
};

function FloorItem(props: Props) {
  const {floor, onPress} = props;
  const {navigationTheme, paperTheme} = useAppearance();
  const {passQr} = usePassQr();

  return (
    <View style={{marginVertical: 8, borderRadius: 12, overflow: 'hidden'}}>
      <TouchableRipple
        rippleColor={paperTheme.colors.onSurface}
        disabled={Number(passQr?.default_floor) === floor}
        onPress={onPress}>
        <View
          style={{
            height: 56,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor:
              Number(passQr?.default_floor) === floor
                ? color(paperTheme.colors.onBackground).alpha(0.06).hexa()
                : color(navigationTheme.colors.card).alpha(0.7).hexa(),
          }}>
          <Text
            variant="titleMedium"
            style={{
              color:
                Number(passQr?.default_floor) === floor
                  ? paperTheme.colors.surfaceDisabled
                  : navigationTheme.colors.text,
            }}>
            {floor}
          </Text>
        </View>
      </TouchableRipple>
    </View>
  );
}

export default FloorItem;
