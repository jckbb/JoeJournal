import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ModalCloseButton from '../../common/components/ModalCloseButton';
import ModalWrapper from '../../common/components/ModalWrapper';
import {unitType} from '../../common/res/strings';

import {
  fromTimestampToDate,
  fromTimestampToTimeOfDay,
} from '../../common/utils/time';
import styles from './styles';

const LogModal = (props) => {
  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text style={styles.labelText}>{`${label}:`}</Text>
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

  const renderSection = (children) => (
    <View style={styles.section}>{children}</View>
  );

  return (
    props.data && (
      <ModalWrapper
        visible={props.isVisible}
        onRequestClose={props.onRequestClose}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {`${fromTimestampToDate(props.data.createdAt)} ${fromTimestampToTimeOfDay(props.data.createdAt)}`}
          </Text>
          <ModalCloseButton onPress={props.onRequestClose} />
        </View>
        <ScrollView contentContainerStyle={styles.log}>
          {renderSection(
            <>
              {renderDetail('Roaster', props.data.roaster)}
              {renderDetail('Region', props.data.region)}
            </>,
          )}
          {renderSection(renderDetail('Grinder', props.data.grinder))}
          {renderSection(renderDetail('Brew Method', props.data.brewMethod))}
          {renderSection(
            <>
              {renderDetail('Grinder Dial', props.data.dial)}
              {renderDetail(
                'Coffee Amount',
                `${props.data.coffeeAmount}${unitType.gram}`,
              )}
            </>,
          )}
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
        </ScrollView>
      </ModalWrapper>
    )
  );
};

export default LogModal;
