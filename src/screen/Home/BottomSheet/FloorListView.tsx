import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useBottomSheet} from '@/component/BottomSheet';
import {useAccessToken} from '@/utils/httpClient';
import {usePassQr} from '@/utils/passQr';
import Color from 'color';
import FloorItem from './FloorItem';
import useData from './useData';

function FloorListView() {
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();
  const {close} = useBottomSheet();
  const {accessToken} = useAccessToken();
  const {getPassQr} = usePassQr();

  const data = useData();

  const renderItem = ({item}: {item: number}) => {
    return (
      <FloorItem
        floor={item}
        onPress={() => {
          getPassQr(accessToken, item);
          setTimeout(() => close(), 300);
        }}
      />
    );
  };

  return (
    <BottomSheetFlatList
      data={data}
      keyExtractor={item => item.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <Text variant="labelSmall" style={{color: Color(paperTheme.colors.onBackground).alpha(0.5).hexa(), margin: 8}}>
          选择楼层
        </Text>
      }
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: 8 + insets.bottom}}
      style={{paddingHorizontal: 24}}
    />
  );
}

export default FloorListView;
