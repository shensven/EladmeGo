import React from 'react';
import {Dimensions, View} from 'react-native';
import {Button, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDebug} from '@/utils/debug';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';
import {useBottomSheet} from '@/component/BottomSheet';

function BottomButton() {
  const screenWidth = Dimensions.get('screen').width;
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();
  const {passQr} = usePassQr();
  const {expand} = useBottomSheet();

  const {enableFloorMocking} = useDebug();

  return (
    <View style={{position: 'absolute', bottom: 32 + insets.bottom}}>
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
        contentStyle={{width: screenWidth / 1.5 + 24}}
        onPress={() => expand('floorPicker')}>
        选择楼层
      </Button>
    </View>
  );
}

export default BottomButton;
