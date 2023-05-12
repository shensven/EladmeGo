import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import API from './API';
import Status from './Status';
import RequestView from './RequestView';
import HScrollView from './HScrollView';
import {HttpLog} from '@/utils/httpClient';

type ItemProps = {
  // uuid: HttpLog['uuid'];
  // timestamp: HttpLog['timestamp'];
  // url: HttpLog['url'];
  // req: HttpLog['req'];
  // resp: HttpLog['resp'];
  httpLog: HttpLog;
  onPress?: (uuid: HttpLog['uuid']) => void;
};

function Item(props: ItemProps) {
  // const {uuid, timestamp, url, req, resp, onPress} = props;
  const {httpLog, onPress} = props;
  const {uuid, timestamp, url, req, resp} = httpLog;

  const {method, url: api, query} = url;
  const {headers: reqHeaders} = req;
  const {status} = resp;

  const hasReqHeaders = Object.keys(reqHeaders).length !== 0;
  const hasQuery = query && Object.keys(query).length !== 0;

  return (
    <View>
      <TouchableRipple style={{paddingHorizontal: 16, paddingVertical: 20}} onPress={() => onPress?.(uuid)}>
        <RequestView hasHeader={hasReqHeaders} hasQuery={hasQuery}>
          {method && api && <API method={method} path={api} />}
          <Status status={status} timestamp={timestamp} />
        </RequestView>
      </TouchableRipple>
      <View style={{position: 'absolute', top: 72}}>
        {hasReqHeaders && <HScrollView title="Header" keyValueSets={reqHeaders} separator=": " />}
        {hasReqHeaders && hasQuery && <View style={{height: 8}} />}
        {hasQuery && <HScrollView title="Query" keyValueSets={query} separator="=" />}
      </View>
    </View>
  );
}

export default Item;
export type {ItemProps};
