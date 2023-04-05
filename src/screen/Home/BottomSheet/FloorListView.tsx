import React, {useMemo} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import FloorItem from './FloorItem';
import Color from 'color';

function FloorListView() {
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();

  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
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
