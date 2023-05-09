import React from 'react';
import {View} from 'react-native';
import {Divider} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import type {StackScreenProps} from '@react-navigation/stack';
import {FlashList} from '@shopify/flash-list';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppearance} from '@/utils/appearance';
import {useHttpLog} from '@/utils/httpLog';
import {Item} from './Item';
import type {ItemProps} from './Item';

function PaperDivider() {
  const {paperTheme} = useAppearance();
  return <Divider style={{backgroundColor: paperTheme.colors.outline}} />;
}

export type StackParams = {
  HttpDetail: {
    uuid: ItemProps['httpLog']['uuid'];
  };
};
type ScreenNavigationProp = StackScreenProps<StackParams>['navigation'];

function HistoryOfRequests() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<ScreenNavigationProp>();
  const {httpLogs} = useHttpLog();

  const renderItem = ({item}: {item: ItemProps['httpLog']}) => {
    return <Item httpLog={item} onPress={uuid => navigation.navigate('HttpDetail', {uuid})} />;
  };

  return (
    <FlashList
      data={httpLogs}
      renderItem={renderItem}
      keyExtractor={item => item.uuid}
      estimatedItemSize={130}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: insets.bottom}}
      ItemSeparatorComponent={PaperDivider}
    />
  );
}

export default HistoryOfRequests;
