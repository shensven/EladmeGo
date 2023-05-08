import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {useHttpLog} from '@/utils/httpLog';
// import Header from './Header';
import {Item, ItemProps} from './Item';

function PaperDivider() {
  const {paperTheme} = useAppearance();
  return <Divider style={{backgroundColor: paperTheme.colors.outline}} />;
}
export type StackParams = {
  HttpDetail: {
    uuid: ItemProps['uuid'];
  };
};
type ScreenNavigationProp = StackScreenProps<StackParams>['navigation'];

function HistoryOfRequests() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<ScreenNavigationProp>();
  const {httpLog} = useHttpLog();

  const renderItem = ({item}: {item: ItemProps}) => {
    const {uuid, timestamp, url, req, resp} = item;
    return (
      <Item
        uuid={uuid}
        timestamp={timestamp}
        url={url}
        req={req}
        resp={resp}
        onPress={uuidCallback => navigation.navigate('HttpDetail', {uuid: uuidCallback})}
      />
    );
  };

  return (
    <>
      {/* <Header /> */}
      <FlashList
        data={httpLog}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
        estimatedItemSize={130}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: insets.bottom}}
        ItemSeparatorComponent={PaperDivider}
      />
    </>
  );
}

export default HistoryOfRequests;
