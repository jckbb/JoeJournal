import {StyleSheet} from 'react-native';
import {WHITE} from '../../res/colors';

export const maxTrackerTint = 'rgba(255, 255, 255, 0.6)';
export const minTrackerTint = WHITE;

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
    color: WHITE,
    fontWeight: '700',
    fontSize: 18,
  },
  floatTracker: {
    alignItems: 'center',
    // backgroundColor:'yellow',
    top: 25,
    position: 'absolute',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: WHITE,
    marginBottom: 3,
  },
  bounds: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boundsText: {
    color: maxTrackerTint,
    fontSize: 16,
    fontWeight: '600',
  },
});
