import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';

const IconButton = ({children, ...props}) => {
  return (
    <TouchableOpacity
      style={[styles.iconButton, props.selected && styles.borderHighlight]}
      onPress={props.onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;
