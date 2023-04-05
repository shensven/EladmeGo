import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import Color from 'color';
import FloorItem from './FloorItem';
import useData from './useData';

function FloorListView() {
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();

  const data = useData();

  const renderItem = ({item}: any) => {
    return (
      <FloorItem
        floor={item}
        onPress={() => {
          console.log('onPress', item);
        }}
      />
    );
  };

  return (
    <BottomSheetFlatList
      data={data}
      keyExtractor={i => i}
      renderItem={renderItem}
      ListHeaderComponent={
        <Text
          variant="labelSmall"
          style={{
            color: Color(paperTheme.colors.onSurface).alpha(0.5).toString(),
            marginBottom: 8,
            marginLeft: 8,
          }}>
          选择楼层
        </Text>
      }
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: insets.bottom}}
      style={{
        paddingHorizontal: 24,
      }}
      contentContainerStyle={{}}
    />
  );
}

export default FloorListView;
