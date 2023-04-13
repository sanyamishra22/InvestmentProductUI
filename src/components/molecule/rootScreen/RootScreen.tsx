import React from 'react';
import {StatusBar, StatusBarStyle, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../../theme/Colors';

type RootScreenProps = {
  children: JSX.Element;
};

const RootScreen: React.FC<RootScreenProps> = ({children}) => {
  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        style={[{flex: 0.05}]}
        start={{x: -2, y: -1}}
        end={{x: 1, y: 0}}
        colors={['#00C2CB', '#FFFFFF']}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>

      <LinearGradient
        style={[{flex: 1}]}
        start={{x: -2, y: -1}}
        end={{x: 1, y: 0}}
        colors={['#00C2CB', '#FFFFFF']}>
        {children}
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderTopRightRadius: 3,
  },
  contentContainer: {
    backgroundColor: COLORS.WHITE,
    flex: 1,
  },
});

export default RootScreen;
