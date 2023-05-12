import React, {View} from 'react-native';
import {Text} from 'react-native-paper';
import color from 'color';
import {v1 as uuidv1} from 'uuid';
import {useAppearance} from '@/utils/appearance';
import type {HttpLog} from '@/utils/httpClient';
import LabelValue from './LabelValue';

type Props = {query: HttpLog['url']['query']};

function Query(props: Props) {
  const {query} = props;
  const {paperTheme} = useAppearance();

  return (
    <View style={{marginTop: 16, marginHorizontal: 20}}>
      <View
        style={{
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).hexa(),
        }}>
        <Text style={{opacity: 0.5, fontSize: 12}}>Query</Text>
        <View style={{marginVertical: 8}}>
          {Object.keys(query).map((key, index) => (
            <LabelValue
              key={uuidv1()}
              label={key}
              value={query[key]}
              separator="="
              style={{marginTop: index === 0 ? 0 : 8}}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

export default Query;
