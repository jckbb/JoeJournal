import {StyleSheet} from 'react-native';
import {
  PRIMARY_COLOR_600,
  PRIMARY_COLOR_900,
  WHITE,
} from '../../common/res/colors';

export default StyleSheet.create({
  brewDetails: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  card: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_600,
    borderRadius: 7,
    padding: 20,
    marginHorizontal: 15,
  },
  title: {
    marginBottom: 30,
    marginLeft: 15,
  },
  squareCard: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_600,
    borderRadius: 7,
    margin: 5,
    padding: 8,
  },
  detail: {
    justifyContent: 'space-between',
  },
  grid: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerText: {
    fontSize: 25,
    marginBottom: 10,
    color: PRIMARY_COLOR_900,
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: '700',
    color: PRIMARY_COLOR_900,
  },
  fieldText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
  },
  detailText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
    fontWeight: '700',
  },
  descriptionText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
    marginHorizontal: 20,
  },
  spacer: {
    height: 8,
  },
});
