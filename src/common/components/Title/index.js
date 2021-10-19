import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const Title = ({children, ...props}) => (
  <Text style={[styles.title, props.dark && styles.darkTitle]}>{children}</Text>
);

export default Title;
