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
  buttonSet: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 15,
  },
  historyButton: {
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  title: {
    marginBottom: 20,
    marginLeft: 15,
  },
  detailText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
    fontWeight: '700',
  },
  squareCard: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR_600,
    borderRadius: 7,
    margin: 5,
    padding: 10,
  },
  cardHeader: {
    paddingBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  grid: {
    marginHorizontal: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
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
  descriptionText: {
    fontSize: 20,
    color: PRIMARY_COLOR_900,
    marginHorizontal: 20,
  },
  spacer: {
    height: 8,
  },
});
