import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_700,
  PRIMARY_COLOR_600,
  PRIMARY_COLOR_900,
} from '../../res/colors';

export const maxTrackerTint = PRIMARY_COLOR_600;
export const minTrackerTint = PRIMARY_COLOR_700;

export default StyleSheet.create({
  topSpacing: {
    marginTop: 20,
  },
  slider: {
    width: '100%',
    height: 50,
  },
  sliderSpace: {
    height: 50,
  },
  trackerText: {
    color: PRIMARY_COLOR_900,
    fontWeight: '700',
    fontSize: 18,
  },
  floatTracker: {
    alignItems: 'center',
    top: 25,
    position: 'absolute',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: PRIMARY_COLOR_700,
    marginBottom: 3,
  },
  bounds: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boundsText: {
    color: PRIMARY_COLOR_700,
    fontSize: 16,
    fontWeight: '600',
  },
});
