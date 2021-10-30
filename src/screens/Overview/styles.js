import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_900,
  PRIMARY_COLOR_500,
  SECONDARY_COLOR_600,
  SECONDARY_COLOR_100,
} from '../../common/res/colors';

export default StyleSheet.create({
  overview: {
    flex: 1,
    marginHorizontal: 20,
  },
  question: {
    padding: 10,
  },
  questionText: {
    fontSize: 25,
    fontWeight: '700',
    letterSpacing: 0.2,
    color: PRIMARY_COLOR_900,
  },
  option: {
    backgroundColor: SECONDARY_COLOR_600,
    borderRadius: 7,
    padding: 10,
    marginTop: 8,
  },
  optionText: {
    color: SECONDARY_COLOR_100,
    fontSize: 20,
  },
});
