import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import ModalWrapper from '../../common/components/ModalWrapper';
import {unitType} from '../../common/res/strings';

import styles from './styles';

const LogModal = (props) => {
  const renderDetail = (label, value) => (
    <View style={[styles.row, styles.detail]}>
      <Text style={styles.labelText}>{`${label}:`}</Text>
      <Text style={styles.detailText}>{value}</Text>
    </View>
  );

  const renderSplitDetail = (item, index) => (
    <View key={index} style={styles.section}>
      {renderDetail('Stage', item.stage)}
      {renderDetail('Duration', `${item.duration}${unitType.seconds}`)}
      {renderDetail('Water Amount', `${item.waterAmount}${unitType.gram}`)}
    </View>
  );

  return (
    <ModalWrapper
      visible={props.isVisible}
      onRequestClose={props.onRequestClose}>
      <ScrollView contentContainerStyle={styles.log}>
        <Text style={styles.title}>{'06/10/2021'}</Text>
        <View style={styles.section}>
          {renderDetail('Roast', 'Brazilian Dark Roast')}
          {renderDetail('Brew Method', 'Hario V60 pour-over')}
          {renderDetail('Grinder', 'Encore')}
        </View>
        <View style={styles.section}>
          {renderDetail('Grind Size', 20)}
          {renderDetail('Coffee Amount', `15${unitType.gram}`)}
          {renderDetail('Water Amount', `250${unitType.gram}`)}
        </View>
        {[{stage: 'Bloom', duration: 60, waterAmount: 40}].map(renderSplitDetail)}
      </ScrollView>
    </ModalWrapper>
  );
};

export default LogModal;
