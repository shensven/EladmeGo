import React, {View} from 'react-native';
import {Text} from 'react-native-paper';
import color from 'color';
import {v1 as uuidv1} from 'uuid';
import {useAppearance} from '@/utils/appearance';
import LabelValue from './LabelValue';

type Props = {
  title: string;
  headers: Record<string, any>;
};

function Headers(props: Props) {
  const {title, headers} = props;
  const {paperTheme} = useAppearance();

  return (
    <View style={{marginHorizontal: 20, paddingTop: 16}}>
      <Text variant="titleSmall">{title}</Text>
      <View style={{marginTop: 8}}>
        <View
          style={{
            borderRadius: 16,
            paddingVertical: 8,
            paddingHorizontal: 16,
            backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).hexa(),
          }}>
          <Text style={{opacity: 0.5, fontSize: 12}}>Headers</Text>
          <View style={{marginVertical: 8}}>
            {Object.keys(headers).map((key, index) => (
              <LabelValue
                key={uuidv1()}
                label={key}
                value={headers[key]}
                separator=": "
                style={{marginTop: index === 0 ? 0 : 8}}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default Headers;
