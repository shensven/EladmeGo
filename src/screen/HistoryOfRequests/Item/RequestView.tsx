import {View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';

type RequestViewProps = {hasHeader?: boolean; hasQuery?: boolean};

function RequestView(props: PropsWithChildren<RequestViewProps>) {
  const {children, hasHeader, hasQuery} = props;

  const getPaddingBottom = () => {
    let _paddingBottom = 0;

    if (hasHeader) {
      _paddingBottom += 44;
    }

    if (hasQuery) {
      _paddingBottom += 44;
    }

    if (hasHeader && hasQuery) {
      _paddingBottom -= 4;
    }

    return _paddingBottom;
  };

  return (
    <View
      style={{
        paddingBottom: getPaddingBottom(),
      }}>
      {children}
    </View>
  );
}

RequestView.defaultProps = {
  hasHeader: false,
  hasQuery: false,
};

export default RequestView;
