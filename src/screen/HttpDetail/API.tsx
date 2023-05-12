import React, {View} from 'react-native';
import {Text} from 'react-native-paper';
import color from 'color';
import {useAppearance} from '@/utils/appearance';
import type {HttpLog} from '@/utils/httpClient';

type Props = {url: HttpLog['url']['url']};

function API(props: Props) {
  const {url} = props;
  const {paperTheme} = useAppearance();

  return (
    <View style={{marginHorizontal: 20}}>
      <View
        style={{
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).hexa(),
        }}>
        <Text style={{opacity: 0.5, fontSize: 12}}>API</Text>
        <Text variant="bodySmall" style={{marginVertical: 8, fontSize: 13}}>
          {url}
        </Text>
      </View>
    </View>
  );
}

export default API;
