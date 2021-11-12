import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Toast = (props) => {
  const renderActionButton = (label, onCallback) => (
    <TouchableOpacity style={styles.actionButton} onPress={onCallback}>
      <Text style={styles.actionButtonText}>{label}</Text>
    </TouchableOpacity>
  );
  return props.visible ? (
    <View style={styles.background}>
      <View style={styles.toast}>
        <Text style={styles.label}>{props.label}</Text>
        <View style={styles.actionButtonGroup}>
          {renderActionButton('Cancel', props.onCancel)}
          {renderActionButton('Yes ', props.onAccept)}
        </View>
      </View>
    </View>
  ) : null;
};

export default Toast;
