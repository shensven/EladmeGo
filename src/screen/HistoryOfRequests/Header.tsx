import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from 'react-native-paper';
import {IcRoundBackspace} from '@/component/Icon';
import {useHeaderHeight} from '@react-navigation/elements';
import {useAppearance} from '@/utils/appearance';
import Color from 'color';

function IcRoundBackspaceSvg() {
  const {paperTheme} = useAppearance();
  return <IcRoundBackspace width={24} height={24} color={paperTheme.colors.secondary} style={{marginRight: 2}} />;
}

function Header() {
  const headerHeight = useHeaderHeight();
  const {paperTheme} = useAppearance();

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color(paperTheme.colors.onTertiaryContainer).alpha(0.12).hexa(),
        paddingTop: headerHeight,
      }}>
      <TextInput
        mode="outlined"
        placeholder="搜索"
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={{
          flex: 1,
          marginHorizontal: 16,
          marginBottom: 16,
          //   height: 40,
        }}
        contentStyle={{padding: 0}}
        right={<TextInput.Icon icon={IcRoundBackspaceSvg} onPress={() => setSearchQuery('')} />}
      />
    </View>
  );
}

export default Header;
