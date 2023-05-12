import React from 'react-native';
import {Text} from 'react-native-paper';
import color from 'color';
import {useAppearance} from '@/utils/appearance';

type Props = {
  label: string;
  value: string;
  separator?: string;
  style?: React.TextStyle;
};

function LabelValue(props: Props) {
  const {label, value, separator = ' ', style} = props;
  const {paperTheme} = useAppearance();

  return (
    <Text
      variant="bodySmall"
      style={{
        fontSize: 10,
        color: color(paperTheme.colors.onSurface).alpha(0.9).hexa(),
        backgroundColor: paperTheme.colors.surface,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 6,
        overflow: 'hidden',
        ...style,
      }}>
      {label + separator + value}
    </Text>
  );
}

export default LabelValue;
