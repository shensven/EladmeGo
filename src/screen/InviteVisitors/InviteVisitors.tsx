import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlashList} from '@shopify/flash-list';
import {axiosInstance, useAccessToken} from '@/utils/httpClient';
import type {AxiosResponse} from 'axios';
import Item from './Item';
import type Invitation from './Invitation';

function ItemSeparator() {
  return <View style={{height: 16}} />;
}

function InviteVisitors() {
  const insets = useSafeAreaInsets();
  const {accessToken} = useAccessToken();

  const [refreshing, setRefreshing] = useState(false);
  const [invitation, setInvitation] = useState<Invitation | undefined>();

  const getData = async () => {
    setRefreshing(true);
    const resp: AxiosResponse<{code: number; message: string; result: Invitation}> = await axiosInstance.get(
      '/member/v1/invitation/lists',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {page: 1, type: 1},
      },
    );

    const {data} = resp;

    if (data.code === 0) {
      setRefreshing(false);
      setInvitation(resp.data.result);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({item}: {item: Invitation['lists']['data'][number]}) => {
    return <Item data={item} />;
  };

  return (
    <FlashList
      data={invitation?.lists.data ?? []}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      estimatedItemSize={130}
      ListHeaderComponent={<View />}
      ListHeaderComponentStyle={{height: 8}}
      ListFooterComponent={<View />}
      ListFooterComponentStyle={{height: insets.bottom}}
      ItemSeparatorComponent={ItemSeparator}
      onRefresh={getData}
      refreshing={refreshing}
    />
  );
}

export default InviteVisitors;
