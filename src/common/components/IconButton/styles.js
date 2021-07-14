import {StyleSheet} from 'react-native';
import {WHITE} from '../../res/colors';

const DIMENSION = 45;

export default StyleSheet.create({
  iconButton: {
    alignSelf: 'center',
    height: DIMENSION,
    width: DIMENSION,
    backgroundColor: WHITE,
    borderRadius: DIMENSION / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
