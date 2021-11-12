import {StyleSheet} from 'react-native';
import {PRIMARY_COLOR_900, PRIMARY_COLOR_700} from '../../common/res/colors';

export default StyleSheet.create({
  overview: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 35,
  },
  options: {
    marginBottom: 10,
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
    padding: 10,
    marginTop: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_700,
  },
  optionText: {
    color: PRIMARY_COLOR_900,
    fontSize: 20,
  },
});
