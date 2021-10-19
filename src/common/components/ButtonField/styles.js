import {StyleSheet} from 'react-native';
import {WHITE, BLACK} from '../../res/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  error: {
    color: 'red',
    opacity: 1.0,
  },
  topSpacing: {
    marginTop: 20,
  },
  fieldBox: {
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 7,
    paddingHorizontal: 8,
    backgroundColor: WHITE,
    height: 50,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: 0.2,
    color: WHITE,
    marginBottom: 3,
  },
  placeholder: {
    fontSize: 20,
    fontWeight: '600',
    color: BLACK,
    opacity: 0.3,
    letterSpacing: 0.2,
  },
  fieldText: {
    fontSize: 20,
    fontWeight: '500',
    color: BLACK,
  },
});
