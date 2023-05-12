import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import type {StackParams as HistoryOfRequestsStackParams} from '@/screen/HistoryOfRequests';
import {useHttpLog} from '@/utils/httpLog';
import API from './API';
import Method from './Method';
import Query from './Query';
import Headers from './Headers';
import Body from './Body';

type RouteParams = {
  Params: HistoryOfRequestsStackParams['HttpDetail'];
};
type ScreenRouteProp = RouteProp<RouteParams, 'Params'>;

function HttpDetail() {
  const insets = useSafeAreaInsets();
  const route = useRoute<ScreenRouteProp>();
  const {uuid} = route.params;
  const {httpLogs} = useHttpLog();

  const httpInstance = httpLogs.find(item => item.uuid === uuid);
  const {url, req, resp} = httpInstance || {};

  return (
    <ScrollView contentContainerStyle={{paddingTop: 16, paddingBottom: insets.bottom + 16}}>
      <API url={url?.url} />
      <Method method={url?.method} />
      {url?.query && <Query query={url?.query} />}
      {req?.headers && <Headers title="Request" headers={req?.headers} />}
      {resp?.headers && <Headers title="Response" headers={resp?.headers} />}
      {resp?.body && <Body body={resp?.body} />}
    </ScrollView>
  );
}

export default HttpDetail;
