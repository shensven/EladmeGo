import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from 'react-native';
import {SegmentedButtons, Text} from 'react-native-paper';
import {useAtom} from 'jotai';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useAppearance} from '@/utils/appearance';
import {useAccessToken} from '@/utils/httpClient';
import {useStaff} from '@/utils/staff';
import {usePassQr} from '@/utils/passQr';
import {countdownAtom} from '@/utils/status/atom';
import {DebugView} from '@/component/DebugView';
import InitView from './InitView';
import PassQrView from './PassQrView';
import BottomButton from './BottomButton';

function Home() {
  const screenWidth = Dimensions.get('screen').width;
  const {paperTheme} = useAppearance();
  const {accessToken, is401Status} = useAccessToken();
  const {isStaff} = useStaff();
  const {passQr, getPassQr} = usePassQr();

  const [isInitShow, setIsInitShow] = useState(false);
  const [passCategory, setPassCategory] = useState('qrcode');
  const [countdown, setCountdown] = useAtom(countdownAtom);
  const [isRefrashLoading, setIsRefrashLoading] = useState(false);

  const setCountdownViaPassQrGot = async () => {
    setIsRefrashLoading(true);

    const resp = await getPassQr(accessToken);
    const {data} = resp;
    if (data.code === 0) {
      setIsRefrashLoading(false);
    }

    return resp;
  };

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

  useEffect(() => {
    if (isStaff.isStaff === 1 && !is401Status) {
      const timer = setInterval(() => {
        setCountdown(prev => {
          // console.log('prevCountdown', prev);
          if (prev <= 0) {
            setCountdownViaPassQrGot();
            clearInterval(timer);
            return 0;
          } else {
            return prev - 1;
          }
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isStaff, passQr, is401Status]);

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      {__DEV__ && <DebugView />}
      {isInitShow && <InitView />}
      {accessToken.length > 0 && is401Status && (
        <>
          <InitView />
          <View style={{height: 48, justifyContent: 'flex-end'}}>
            <Text> Access Token 已失效 😵</Text>
          </View>
        </>
      )}
      {accessToken.length > 0 && !is401Status && isStaff.isStaff !== -1 && (
        <SegmentedButtons
          value={passCategory}
          onValueChange={setPassCategory}
          buttons={[
            {label: '二维码通行', value: 'qrcode'},
            {label: '蓝牙通行', value: 'ble'},
          ]}
          style={{width: screenWidth / 1.5 + 24, marginTop: 16}}
        />
      )}
      {accessToken.length > 0 && !is401Status && isStaff.isStaff === 0 && (
        <View style={{height: 48, justifyContent: 'flex-end'}}>
          <Text>仅对入驻企业员工开放 😢</Text>
        </View>
      )}
      {isStaff.isStaff === 1 && !is401Status && !passQr && (
        <View style={{height: screenWidth / 1.5 - 48, justifyContent: 'flex-end'}}>
          <ActivityIndicator animating={isRefrashLoading} size="large" color={paperTheme.colors.onBackground} />
        </View>
      )}
      {isStaff.isStaff === 1 && !is401Status && passQr && (
        <>
          <PassQrView
            countdown={countdown}
            isRefrashLoading={isRefrashLoading}
            onPress={() => setCountdownViaPassQrGot()}
          />
          <BottomButton />
        </>
      )}
    </View>
  );
}

export default Home;
