import React from 'react';
import {View} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

import API from './API';
import Status from './Status';
import RequestView from './RequestView';
import HScrollView from './HScrollView';

type ItemProps = {
  uuid: string;
  api: string;
  header: Record<string, string>;
  query: Record<string, string>;
  onPress?: (uuid: string) => void;
};

function Item(props: ItemProps) {
  const {uuid, api, header, query, onPress} = props;

  const hasHeader = Object.keys(header).length !== 0;
  const hasQuery = Object.keys(query).length !== 0;

  return (
    <View>
      <TouchableRipple style={{paddingHorizontal: 16, paddingVertical: 20}} onPress={() => onPress?.(uuid)}>
        <RequestView hasHeader={hasHeader} hasQuery={hasQuery}>
          <API path={api} />
          <Status />
        </RequestView>
      </TouchableRipple>
      <View style={{position: 'absolute', top: 72}}>
        {hasHeader && <HScrollView title="Header" keyValueSets={header} />}
        {hasHeader && hasQuery && <View style={{height: 8}} />}
        {hasQuery && <HScrollView title="Query" keyValueSets={query} />}
      </View>
    </View>
  );
}

Item.defaultProps = {
  header: [],
};

export default Item;
export type {ItemProps};
