import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ModalCloseButton from '../../common/components/ModalCloseButton';
import ModalWrapper from '../../common/components/ModalWrapper';
import {unitType} from '../../common/res/strings';
import {evaluateScale} from '../../common/data';

import {
  fromTimestampToDate,
  fromTimestampToTimeOfDay,
} from '../../common/utils/time';
import styles from './styles';

const LogModal = (props) => {
  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text style={styles.labelText}>{`${label}`}</Text>
      <Text style={styles.detailText}>{value}</Text>
    </View>
  );

  const renderSplitDetail = (item, index) => {
    return (
      <View key={index} style={styles.brewSplit}>
        <View style={styles.column}>
          <Text style={styles.labelText}>{item.stage}</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.detailText}>
            {`${item.waterAmount}${unitType.gram}`}
          </Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.detailText}>
            {`${item.duration}${unitType.seconds}`}
          </Text>
        </View>
      </View>
    );
  };

  const renderBrewTotals = () => (
    <View style={styles.brewSplit}>
      <View style={styles.column}>
        <Text style={styles.labelText}>{'Total'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.detailText}>
          {`${props.data.totalWaterAmount}${unitType.gram}`}
        </Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.detailText}>
          {`${props.data.totalDuration}${unitType.seconds}`}
        </Text>
      </View>
    </View>
  );

  const renderSection = (label, children) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitleText}>{label}</Text>
      {children}
    </View>
  );

  const renderEvaluate = () => {
    const length = 5;

    return renderSection(
      'Evaluation',
      Object.keys(props.data.evaluate).map((field, index) => {
        const value = props.data.evaluate[field];

        if (field === 'overall') {
          return (
            <View key={index} style={{marginTop: 16}}>
              {renderDetail('Overall', `${props.data.evaluate.overall}/10`)}
            </View>
          );
        }

        return (
          <View key={index} style={index !== 0 && {marginTop: 16}}>
            {renderGrade(
              evaluateScale[field].name,
              value,
              length,
              evaluateScale[field].from,
              evaluateScale[field].to,
            )}
          </View>
        );
      }),
    );
  };

  const renderGrade = (label, value, length, from, to) => (
    <View style={[styles.row, styles.grade]}>
      <Text style={styles.labelText}>{label}</Text>
      <View>
        <View style={styles.row}>
          {new Array(length).fill(0).map((__, index) => {
            return (
              <View
                key={index}
                style={[
                  index === value ? {backgroundColor: 'red'} : {backgroundColor: 'rgba(0, 0, 0, 0.1)'},
                  {height: 30, width: 40, borderRadius: 2},
                  index !== 0 && {marginLeft: 2},
                  index === 0 && {borderTopLeftRadius: 7, borderBottomLeftRadius: 7},
                  index === length - 1 && {borderTopRightRadius: 7, borderBottomRightRadius: 7},
                ]}
              />
            );
          })}
        </View>
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
          <Text>{from}</Text>
          <Text>{to}</Text>
        </View>
      </View>
    </View>
  );

  return (
    props.data && (
      <ModalWrapper
        visible={props.isVisible}
        onRequestClose={props.onRequestClose}>
        <ScrollView style={{flex: 1}} contentContainerStyle={styles.log}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {`${fromTimestampToDate(props.data.createdAt)} ${fromTimestampToTimeOfDay(props.data.createdAt)}`}
            </Text>
            <ModalCloseButton onPress={props.onRequestClose} />
          </View>
          <View style={styles.content}>
            {renderSection(
              'Coffee',
              <>
                {renderDetail('Roaster', props.data.roaster)}
                {renderDetail('Region', props.data.region)}
              </>,
            )}
            {renderSection('Grinder', renderDetail('Grinder', props.data.grinder))}
            {renderSection('Method', renderDetail('Brew Method', props.data.brewMethod))}
            {renderSection(
              'Setup',
              <>
                {renderDetail('Grinder Dial', props.data.dial)}
                {renderDetail(
                  'Coffee Amount',
                  `${props.data.coffeeAmount}${unitType.gram}`,
                )}
              </>,
            )}
            {renderSection(
              'Stages',
              <>
                <View style={styles.brewSplitsHeader}>
                  <View style={styles.column} />
                  <View style={styles.column}>
                    <Text style={styles.detailText}>{'Water'}</Text>
                  </View>
                  <View style={styles.column}>
                    <Text style={styles.detailText}>{'Duration'}</Text>
                  </View>
                </View>
                {props.data.brewSplits.map(renderSplitDetail)}
                {renderBrewTotals()}
              </>,
            )}
            {renderEvaluate()}
          </View>
        </ScrollView>
      </ModalWrapper>
    )
  );
};

export default LogModal;
