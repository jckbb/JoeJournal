import {StyleSheet} from 'react-native';
import {BLACK, PRIMARY_COLOR, WHITE} from '../../../../common/res/colors';

const DIMENSION = 75;

export default StyleSheet.create({
  hoverButton: {
    position: 'absolute',
    height: DIMENSION,
    minWidth: DIMENSION,
    borderRadius: DIMENSION / 2,
    backgroundColor: PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 25,
    right: 25,
  },
  hoverLabel: {
    color: WHITE,
    fontWeight: '700',
    fontSize: 20,
  },
});
