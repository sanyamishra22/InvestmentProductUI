import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

// Using for Responsive Font Size with pixel
const fontScale = (size: string | number) => {
  if (typeof size === 'number') {
    return (size * SCREEN_WIDTH) / 400;
  } else {
    return (parseInt(size) * SCREEN_WIDTH) / 400;
  }
};

const wp = (value: string | number) => widthPercentageToDP(value);
const hp = (value: string | number) => heightPercentageToDP(value);

export function errorMessage(error: string | undefined) {
  return error ? error : ':( Ops, something went wrong';
}

export {wp, hp, fontScale};
