import {StyleSheet, Pressable, ActivityIndicator, Text} from 'react-native';
import React from 'react';

import {hp, wp} from '../../../utlis/helper';
import {COLORS} from '../../../theme/Colors';

type StandardButtonProps = {
  handleButtonPress?: () => void;
  isloading?: boolean;
  title?: string;
};

const StandardButton = ({
  handleButtonPress,
  isloading,
  title,
}: StandardButtonProps) => {
  return (
    <Pressable onPress={handleButtonPress} style={styles.buttonContainer}>
      {isloading ? (
        <ActivityIndicator size="small" color={COLORS.WHITE} />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
};

export default StandardButton;

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    paddingVertical: hp(1.5),
    borderRadius: 50,
    justifyContent: 'center',
    backgroundColor: COLORS.PRIMARY,
    marginVertical: hp(2),
    marginHorizontal: wp(8),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: hp(2),
    color: COLORS.WHITE,
    paddingHorizontal: wp(20),
  },
});
