import {StyleSheet} from 'react-native';
import {BLACK, PRIMARY_COLOR, WHITE} from '../../res/colors';

const DIMENSION = 60;

export default StyleSheet.create({
  closeButton: {
    elevation: 1,
    position: 'absolute',
    height: DIMENSION,
    minWidth: DIMENSION,
    borderRadius: DIMENSION,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    top: 10,
    right: 20,
  },
  hoverButton: {
    position: 'absolute',
    height: DIMENSION,
    minWidth: DIMENSION,
    borderRadius: DIMENSION,
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 8,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 80,
    right: 30,
  },
  closeLabel: {
    color: BLACK,
    fontWeight: '700',
    fontSize: 20,
  },
  hoverLabel: {
    color: WHITE,
    fontWeight: '700',
    fontSize: 20,
  },
});
