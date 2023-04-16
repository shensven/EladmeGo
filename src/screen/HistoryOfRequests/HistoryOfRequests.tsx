import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {useAtom} from 'jotai';
import {httpLogAtom} from '@/utils/status/atom';
// import Header from './Header';
import {Item, ItemProps} from './Item';

function PaperDivider() {
  const {paperTheme} = useAppearance();
  return <Divider style={{backgroundColor: paperTheme.colors.outline}} />;
}

function HistoryOfRequests() {
  const insets = useSafeAreaInsets();
  const [httpLog] = useAtom(httpLogAtom);

  const renderItem = ({item}: {item: ItemProps}) => {
    return <Item timestamp={item.timestamp} url={item.url} req={item.req} resp={item.resp} onPress={item.onPress} />;
  };

  return (
    <>
      {/* <Header /> */}
      <FlashList
        data={httpLog}
        renderItem={renderItem}
        keyExtractor={item => item.timestamp.toString()}
        estimatedItemSize={130}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: insets.bottom}}
        ItemSeparatorComponent={PaperDivider}
      />
    </>
  );
}

export default HistoryOfRequests;
