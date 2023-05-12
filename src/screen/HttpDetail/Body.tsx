import React, {View} from 'react-native';
import {Text} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Markdown from 'react-native-marked';
import color from 'color';
import {useAppearance} from '@/utils/appearance';

type Props = {body: any};

function Body(props: Props) {
  const {body} = props;
  const {paperTheme} = useAppearance();

  const code = JSON.stringify(body, null, 4);

  return (
    <View style={{marginTop: 16, marginHorizontal: 20}}>
      <View
        style={{
          borderRadius: 16,
          paddingVertical: 8,
          paddingHorizontal: 16,
          backgroundColor: color(paperTheme.colors.secondary).alpha(0.05).hexa(),
        }}>
        <Text style={{opacity: 0.5, fontSize: 12}}>Body</Text>
        <View style={{marginVertical: 8, borderRadius: 6, overflow: 'hidden'}}>
          <ScrollView horizontal style={{backgroundColor: paperTheme.colors.surface, paddingHorizontal: 6}}>
            <Markdown
              value={code}
              flatListProps={{
                bounces: false,
                style: {
                  backgroundColor: paperTheme.colors.surface,
                },
              }}
              styles={{
                text: {fontSize: 10, color: color(paperTheme.colors.onSurface).alpha(0.9).hexa()},
                link: {color: paperTheme.colors.primary},
              }}
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Body;
