import {StyleSheet} from 'react-native';
import {BLACK, IVORY_WHITE, PRIMARY_COLOR, WHITE} from '../../common/res/colors';

export default StyleSheet.create({
  log: {},
  content: {
    paddingBottom: 40,
    paddingTop: 30,
    paddingLeft: 25,
    backgroundColor: IVORY_WHITE,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  sectionTitleText: {
    fontSize: 25,
    fontWeight: '500',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 45,
    color: WHITE,
  },
  gradeHighlight: {
    backgroundColor: PRIMARY_COLOR,
  },
  gradeEmpty: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  formerGradeIncrementBlock: {
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
  },
  initialGradeIncrementBlock: {
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
  gradeSpacer: {
    marginLeft: 2,
  },
  gradeIncrementBlock: {
    height: 30,
    width: 40,
    borderRadius: 2,
  },
  detailText: {
    color: BLACK,
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  detail: {
    justifyContent: 'space-between',
    marginRight: 25,
  },
  section: {
    marginBottom: 24,
  },
  column: {
    flex: 1,
  },
  brewSplit: {
    marginTop: 15,
    flexDirection: 'row',
  },
  brewSplitsHeader: {
    flexDirection: 'row',
  },
  labelText: {
    marginRight: 5,
    color: BLACK,
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: 0.1,
  },
  grade: {
    marginRight: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
  },
});
