import React, {useCallback} from 'react';
import {FlatList, View} from 'react-native';
import {Divider as PaperDivider} from 'react-native-paper';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {Item, ItemProps} from './Item';
import useData from './useData';

function HistoryOfRequests() {
  const insets = useSafeAreaInsets();
  const {paperTheme} = useAppearance();
  const data = useData();

  const renderItem = ({item}: {item: ItemProps}) => {
    return <Item uuid={item.uuid} api={item.api} header={item.header} query={item.query} onPress={item.onPress} />;
  };

  const Divider = useCallback(() => {
    return <PaperDivider style={{backgroundColor: paperTheme.colors.outline}} />;
  }, [paperTheme.dark]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.uuid + index}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: insets.bottom}}
      ItemSeparatorComponent={Divider}
    />
  );
}

export default HistoryOfRequests;
