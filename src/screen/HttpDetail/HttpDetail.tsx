import React from 'react';
import {View} from 'react-native';
import {useRoute} from '@react-navigation/native';
import type {RouteProp} from '@react-navigation/native';
import {Text} from 'react-native-paper';
import type {StackParams as HistoryOfRequestsStackParams} from '@/screen/HistoryOfRequests';

type RouteParams = {
  Params: HistoryOfRequestsStackParams['HttpDetail'];
};
type ScreenRouteProp = RouteProp<RouteParams, 'Params'>;

function HttpDetail() {
  const route = useRoute<ScreenRouteProp>();

  const {uuid} = route.params;

  return (
    <View>
      <Text>uuid:</Text>
      <Text>{uuid}</Text>
    </View>
  );
}

export default HttpDetail;
