import * as React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {shadow} from '../../../styles/mixins';

import {hp, wp} from '../../../utlis/helper';
import {COLORS} from '../../../theme/Colors';

interface CardProps {
  children: JSX.Element | JSX.Element[];
  containerStyle?: ViewStyle;
}

const Card: React.FC<CardProps> = ({children, containerStyle}) => {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    ...shadow(3),
    position: 'relative',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.2),
    borderRadius: 7,
  },
});
