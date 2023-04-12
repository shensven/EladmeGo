import React, {PropsWithChildren} from 'react';
import {View, ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Switch, Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {useDebug} from '@/utils/debug';
import color from 'color';

function LabelAction(props: PropsWithChildren<{label: string; style?: ViewStyle}>) {
  const {label, children, style} = props;
  const {navigationTheme} = useAppearance();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: color(navigationTheme.colors.card).alpha(0.7).hexa(),
        padding: 12,
        borderRadius: 10,
        ...style,
      }}>
      <Text>{label}</Text>
      {children}
    </View>
  );
}

function BottomSheet() {
  const {paperTheme} = useAppearance();
  const {
    isAutoRefreshQrCode,
    toogleAutoRefreshQrCode,
    enableEnterpriseNameMocking,
    toogleEnterpriseNameMoclking,
    enableQrCodeMocking,
    toogleQrCodeMocking,
  } = useDebug();

  return (
    <ScrollView style={{paddingHorizontal: 24}}>
      <Text
        variant="labelSmall"
        style={{
          color: color(paperTheme.colors.onBackground).alpha(0.5).hexa(),
          margin: 8,
        }}>
        debug
      </Text>
      <LabelAction label="自动刷新 QR Code">
        <Switch value={isAutoRefreshQrCode} onValueChange={toogleAutoRefreshQrCode} />
      </LabelAction>
      <LabelAction label="Mock 公司名称" style={{marginTop: 8}}>
        <Switch value={enableEnterpriseNameMocking} onValueChange={toogleEnterpriseNameMoclking} />
      </LabelAction>
      <LabelAction label="Mock 通行二维码" style={{marginTop: 8}}>
        <Switch value={enableQrCodeMocking} onValueChange={toogleQrCodeMocking} />
      </LabelAction>
    </ScrollView>
  );
}

export default BottomSheet;
