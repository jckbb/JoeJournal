import React from 'react';
import {View, Text} from 'react-native';
import IconButton from '../../../../common/components/IconButton';

import styles from './styles';

const FormItem = ({children, ...props}) => {
  return (
    <View style={[styles.formItem, props.hasTopRoom && styles.topSpacing]}>
      <View style={styles.content}>{children}</View>
      {props.disabled ? (
        <View style={styles.buttonPlaceholder} />
      ) : (
        <IconButton onPress={props.onRemoveItem}>
          <Text style={styles.removeText}>{'-'}</Text>
        </IconButton>
      )}
    </View>
  );
};

export default FormItem;
