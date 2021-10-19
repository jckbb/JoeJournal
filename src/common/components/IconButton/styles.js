import {StyleSheet} from 'react-native';
import {WHITE} from '../../res/colors';

const DIMENSION = 50;

export default StyleSheet.create({
  iconButton: {
    alignSelf: 'center',
    height: DIMENSION,
    width: DIMENSION,
    backgroundColor: WHITE,
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
