import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import API from './API';
import Status from './Status';
import RequestView from './RequestView';
import HScrollView from './HScrollView';
import {HttpLog} from '@/utils/httpClient';

type ItemProps = {
  timestamp: HttpLog['timestamp'];
  url: HttpLog['url'];
  req: HttpLog['req'];
  resp: HttpLog['resp'];
  onPress?: (timestamp: HttpLog['timestamp']) => void;
};

function Item(props: ItemProps) {
  const {timestamp, url, req, resp, onPress} = props;

  const {method, url: api, query} = url;
  const {headers: reqHeaders} = req;
  const {status} = resp;

  const hasReqHeaders = Object.keys(reqHeaders).length !== 0;
  const hasQuery = query && Object.keys(query).length !== 0;

  return (
    <View>
      <TouchableRipple style={{paddingHorizontal: 16, paddingVertical: 20}} onPress={() => onPress?.(timestamp)}>
        <RequestView hasHeader={hasReqHeaders} hasQuery={hasQuery}>
          {method && api && <API method={method} path={api} />}
          <Status status={status} timestamp={timestamp} />
        </RequestView>
      </TouchableRipple>
      <View style={{position: 'absolute', top: 72}}>
        {hasReqHeaders && <HScrollView title="Header" keyValueSets={reqHeaders} />}
        {hasReqHeaders && hasQuery && <View style={{height: 8}} />}
        {hasQuery && <HScrollView title="Query" keyValueSets={query} />}
      </View>
    </View>
  );
}

export default Item;
export type {ItemProps};
