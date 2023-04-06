import React from 'react';
import {FlatList, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {Item, ItemProps} from './Item';
import useData from './useData';

function PaperDivider() {
  const {paperTheme} = useAppearance();
  return <Divider style={{backgroundColor: paperTheme.colors.outline}} />;
}

function HistoryOfRequests() {
  const insets = useSafeAreaInsets();
  const data = useData();

  const renderItem = ({item}: {item: ItemProps}) => {
    return <Item uuid={item.uuid} api={item.api} header={item.header} query={item.query} onPress={item.onPress} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.uuid + index}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: insets.bottom}}
      ItemSeparatorComponent={PaperDivider}
    />
  );
}

export default HistoryOfRequests;
