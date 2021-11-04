import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

const Detail = (props) => (
  <View style={styles.detail}>
    <Text style={styles.fieldText}>{props.label}</Text>
    <Text style={styles.detailText}>{props.value}</Text>
  </View>
);

export default Detail;
