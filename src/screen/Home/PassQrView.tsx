import React, {useCallback} from 'react';
import {View, Image, Dimensions, ActivityIndicator} from 'react-native';
import {IconButton, Text, TouchableRipple} from 'react-native-paper';
import {IcRoundChevronRight, IcRoundNoAdultContent} from '@/component/icon';
import Color from 'color';
import {useAppearance} from '@/utils/appearance';
import {usePassQr} from '@/utils/passQr';

type Props = {
  countdown: number;
  isRefrashLoading: boolean;
  onPress: () => void;
};

function PassQrView(props: Props) {
  const {countdown, isRefrashLoading, onPress} = props;
  const screenWidth = Dimensions.get('screen').width;

  const {navigationTheme, paperTheme} = useAppearance();
  const {passQr} = usePassQr();

  const IconButtonXXX = useCallback(() => <IcRoundNoAdultContent color="transparent" />, []);
  const IconButtonChevron = useCallback(
    () => <IcRoundChevronRight color={Color(paperTheme.colors.onBackground).alpha(0.45).hexa()} />,
    [navigationTheme.dark],
  );

  return (
    <View style={{alignItems: 'center'}}>
      <View style={{height: 56, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <IconButton disabled icon={IconButtonXXX} size={12} />
          <Text>{passQr?.enterprise_name}</Text>
          <IconButton icon={IconButtonChevron} size={12} onPress={() => {}} />
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: screenWidth / 1.5 + 24,
          height: screenWidth / 1.5 + 24,
          backgroundColor: '#fff',
          borderRadius: 24,
          //   marginTop: 4,
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
        onPress={onPress}>
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
    </View>
  );
}

export default PassQrView;
