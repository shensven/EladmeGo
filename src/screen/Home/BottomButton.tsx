import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebug} from '@/utils/debug';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';
import {useBottomSheet} from '@/component/BottomSheet';

function BottomButton() {
  const {width: windowWidth} = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();
  const {passQr} = usePassQr();
  const {expand} = useBottomSheet();

  const {enableFloorMocking} = useDebug();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        height: 104 + insets.bottom,
        backgroundColor: paperTheme.colors.background,
        paddingTop: 8,
      }}>
      <Text variant="bodySmall" style={{color: paperTheme.colors.onBackground, alignSelf: 'center'}}>
        {enableFloorMocking ? '金地中心-高区电梯-34F' : passQr?.floor_name}
      </Text>
      <Button
        mode="contained"
        theme={{
          colors: {
            primary: paperTheme.colors.onBackground,
          },
        }}
        style={{marginTop: 8, borderRadius: 16, justifyContent: 'center', alignItems: 'center'}}
        contentStyle={{width: windowWidth / 1.5 + 24}}
        onPress={() => expand('floorPicker')}>
        选择楼层
      </Button>
    </View>
  );
}

export default BottomButton;
