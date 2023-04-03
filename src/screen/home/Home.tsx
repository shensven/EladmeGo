import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, Image, View} from 'react-native';
import {Button, SegmentedButtons, Text, TouchableRipple} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import Color from 'color';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken} from '@/utils/httpClient';
import {usePassQr} from '@/utils/passQr';

type StackParamList = {
  AccessToken: undefined;
};
type ScreenNavigationProp = StackScreenProps<StackParamList>['navigation'];

function Home() {
  const screenWidth = Dimensions.get('screen').width;
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<ScreenNavigationProp>();

  const {paperTheme} = useAppearance();

  const {accessToken} = useAccessToken();
  const {passQr, getPassQr} = usePassQr();
  const [passCategory, setPassCategory] = useState('qrcode');

  const [countdown, setCountdown] = useState(0);
  const [isRefrashLoading, setIsRefrashLoading] = useState(false);

  const [isInitShow, setIsInitShow] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('accessToken').then(accessTokenValue => {
      const parsedAccessTokenValue = JSON.parse(accessTokenValue ?? 'null');
      if (parsedAccessTokenValue === null) {
        setIsInitShow(true);
      } else if (parsedAccessTokenValue.length === 0) {
        setIsInitShow(true);
      } else {
        setIsInitShow(false);
      }
    });
  }, [accessToken]);

  const setCountdownViaPassQrGot = () => {
    setIsRefrashLoading(true);
    getPassQr().then(resp => {
      setCountdown(resp?.minute ?? 0);
      setIsRefrashLoading(false);
    });
  };

  useEffect(() => {
    if (accessToken && accessToken.length > 0) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          console.log('prev', prev);
          if (prev <= 0) {
            setCountdownViaPassQrGot();
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [accessToken, passQr]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {isInitShow && (
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 16}}>
          <Button mode="contained-tonal" onPress={() => navigation.navigate('AccessToken')}>
            验证 Access Token 以启用通行证
          </Button>
        </View>
      )}
      {accessToken.length > 0 && (
        <>
          <SegmentedButtons
            value={passCategory}
            onValueChange={setPassCategory}
            buttons={[
              {label: '二维码通行', value: 'qrcode'},
              {label: '蓝牙通行', value: 'ble'},
            ]}
            style={{width: screenWidth / 1.5 + 24, marginTop: 16}}
          />
          <View style={{height: 48, justifyContent: 'flex-end'}}>
            <Text>{passQr?.enterprise_name}</Text>
          </View>
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
          <View style={{height: 24, justifyContent: 'flex-end'}}>
            {passQr && (
              <Text variant="bodySmall" style={{color: Color(paperTheme.colors.onBackground).alpha(0.45).hexa()}}>
                {countdown} 秒后自动刷新
              </Text>
            )}
          </View>
          <TouchableRipple
            borderless
            disabled={isRefrashLoading}
            style={{marginTop: 16, borderRadius: 8}}
            onPress={() => setCountdownViaPassQrGot()}>
            <View
              style={{
                height: 32,
                width: 80,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isRefrashLoading
                  ? Color(paperTheme.colors.onSurfaceVariant).alpha(0.06).hexa()
                  : Color(paperTheme.colors.tertiaryContainer).alpha(0.7).hexa(),
              }}>
              {isRefrashLoading && (
                <ActivityIndicator
                  animating={isRefrashLoading}
                  color={Color(paperTheme.colors.onTertiaryContainer).alpha(0.25).hexa()}
                />
              )}
              {!isRefrashLoading && <Text variant="bodySmall">立即刷新</Text>}
            </View>
          </TouchableRipple>

          <View style={{position: 'absolute', bottom: 32 + insets.bottom}}>
            <Text variant="bodySmall" style={{color: paperTheme.colors.onBackground, alignSelf: 'center'}}>
              {passQr?.floor_name}
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
              onPress={() => {}}>
              选择楼层
            </Button>
          </View>
        </>
      )}
    </View>
  );
}

export default Home;
