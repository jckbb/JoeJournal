import {StyleSheet} from 'react-native';
import {BLACK} from '../../common/res/colors';

const FIELD_HEIGHT = 50;

export default StyleSheet.create({
  brewForm: {
    flex: 1,
    paddingHorizontal: 20,
    // marginTop: 200,
  },

  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldBox: {
    fontSize: 20,
    fontWeight: '500',
    borderRadius: 7,
    height: FIELD_HEIGHT,
    paddingLeft: 8,
    backgroundColor: '#ffffff',
  },
  sliderBounds: {
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fieldButton: {
    justifyContent: 'center',
  },
  fieldLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '500',
    color: BLACK,
    opacity: 0.6,
    marginBottom: 3,
  },
  placeholder: {
    fontSize: 18,
    fontWeight: '600',
    color: BLACK,
    opacity: 0.3,
    letterSpacing: 0.2,
  },
  fieldText: {
    fontSize: 20,
    fontWeight: '500',
  },
});
