import React from 'react';
import {Alert} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Text} from 'react-native-paper';
import {useAppearance} from '@/utils/appearance';
import {useHttpLog} from '@/utils/httpLog';
import {useBottomSheet} from '@/component/BottomSheet';
import color from 'color';

function BottomSheet() {
  const {paperTheme} = useAppearance();
  const {close} = useBottomSheet();
  const {clear} = useHttpLog();

  const onPress = () => {
    close();
    Alert.alert('再次确认👋', '确定要清除访历史记录吗？', [
      {
        text: '取消',
      },
      {
        text: '确定',
        onPress: clear,
      },
    ]);
  };

  return (
    <ScrollView style={{paddingHorizontal: 24}}>
      <Text
        variant="labelSmall"
        style={{
          color: color(paperTheme.colors.onBackground).alpha(0.5).hexa(),
          margin: 8,
        }}>
        高级
      </Text>
      <Button
        mode="contained"
        theme={{
          colors: {
            primary: paperTheme.colors.onBackground,
          },
        }}
        style={{borderRadius: 10}}
        onPress={onPress}>
        清除历史记录
      </Button>
    </ScrollView>
  );
}

export default BottomSheet;
