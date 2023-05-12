import React, {View} from 'react-native';
import {Text} from 'react-native-paper';
import color from 'color';
import {useAppearance} from '@/utils/appearance';
import type {HttpLog} from '@/utils/httpClient';

type Props = {method: HttpLog['url']['method']};

function Method(props: Props) {
  const {method} = props;
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
        <Text style={{opacity: 0.5, fontSize: 12}}>Method</Text>
        <Text variant="bodySmall" style={{marginVertical: 8, fontSize: 13}}>
          {method?.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}

export default Method;
