import React, {useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import ModalWrapper from '../../common/components/ModalWrapper';
import {unitType} from '../../common/res/strings';

import {fromTimestampToReadableDate} from './utils';
import styles from './styles';

const LogModal = (props) => {
  useEffect(() => {
    if (!props.data) props.onRequestClose();
  }, []);

  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text style={styles.labelText}>{`${label}:`}</Text>
      <Text style={styles.detailText}>{value}</Text>
    </View>
  );

  const renderSplitDetail = (item, index) => (
    <View key={index} style={styles.brewSplit}>
      <View style={styles.column}>
        <Text style={styles.detailText}>{item.stage}</Text>
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

  const renderBrewSplitsHeader = () => (
    <View style={styles.brewSplitsHeader}>
      <View style={styles.column}>
        <Text style={styles.labelText}>{'stage'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.labelText}>{'water amount'}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.labelText}>{'duration'}</Text>
      </View>
    </View>
  );

  return (
    props.data && (
      <ModalWrapper
        visible={props.isVisible}
        onRequestClose={props.onRequestClose}>
        <ScrollView contentContainerStyle={styles.log}>
          <View style={styles.generalContainer}>
            <Text style={styles.title}>
              {fromTimestampToReadableDate(props.data.createdAt)}
            </Text>
            {renderDetail('Roaster', props.data.roaster)}
            {renderDetail('Region', props.data.region)}
            {renderDetail('Grinder', props.data.grinder)}
            {renderDetail('Brew Method', props.data.brewMethod)}
          </View>
          <View style={styles.brewContainer}>
            {renderDetail('Grind Size', 20)}
            {renderDetail('Total Coffee Amount', `15${unitType.gram}`)}
            {renderDetail('Total Water Amount', `250${unitType.gram}`)}
            {renderBrewSplitsHeader()}
            {props.data.brewSplits.map(renderSplitDetail)}
          </View>
        </ScrollView>
      </ModalWrapper>
    )
  );
};

export default LogModal;
