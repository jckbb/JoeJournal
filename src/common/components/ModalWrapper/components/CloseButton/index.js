import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CloseSvg} from '../../../../res/svgs';

import styles, {iconColor} from './styles';

const CloseButton = (props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <CloseSvg fill={iconColor} />
    </TouchableOpacity>
  );
};

export default CloseButton;
