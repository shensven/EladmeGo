import React, {useState} from 'react';
import {Dimensions, Image, View} from 'react-native';
import {Button, SegmentedButtons, Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Color from 'color';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';

function Home() {
  const screenWidth = Dimensions.get('screen').width;
  const insets = useSafeAreaInsets();

  const {paperTheme} = useAppearance();

  const {passQr} = usePassQr();
  const [passCategory, setPassCategory] = useState('qrcode');

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <SegmentedButtons
        value={passCategory}
        onValueChange={setPassCategory}
        buttons={[
          {label: '二维码通行', value: 'qrcode'},
          {label: '蓝牙通行', value: 'ble'},
        ]}
        style={{width: screenWidth / 1.5 + 24, paddingTop: 16}}
      />
      {passQr && (
        <>
          <Text style={{marginTop: 24}}>{passQr?.enterprise_name}</Text>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: screenWidth / 1.5 + 24,
              height: screenWidth / 1.5 + 24,
              backgroundColor: '#fff',
              borderRadius: 24,
              marginTop: 12,
            }}>
            <Image source={{uri: passQr?.qrCode}} style={{width: screenWidth / 1.5, height: screenWidth / 1.5}} />
          </View>
          <Text
            variant="bodySmall"
            style={{marginTop: 8, color: Color(paperTheme.colors.onBackground).alpha(0.5).hexa()}}>
            {passQr?.minute} 秒后自动刷新
          </Text>
          <View
            style={{
              marginTop: 16,
              paddingHorizontal: 12,
              paddingVertical: 4,
              borderRadius: 8,
              backgroundColor: Color(paperTheme.colors.onBackground).alpha(0.12).hexa(),
            }}>
            <Text variant="bodySmall" style={{color: paperTheme.colors.onBackground}}>
              {passQr?.floor_name}
            </Text>
          </View>
          <Button
            mode="contained"
            style={{
              borderRadius: 16,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              bottom: 32 + insets.bottom,
            }}
            contentStyle={{
              width: screenWidth / 1.5 + 24,
            }}
            onPress={() => {}}>
            选择楼层
          </Button>
        </>
      )}
    </View>
  );
}

export default Home;
