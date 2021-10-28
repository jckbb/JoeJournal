import React from 'react';
import {TouchableOpacity} from 'react-native';
import {EditIcon} from '../../../../common/res/svgs';

import styles from './styles';

const HoverButton = (props) => {
  const buttonStyling = (type) => {
    switch (type) {
      case 'hover':
        return styles.hoverButton;
      case 'close':
        return styles.closeButton;
      default:
        return styles.hoverButton;
    }
  };

  const labelStyling = (type) => {
    switch (type) {
      case 'hover':
        return styles.hoverLabel;
      default:
        return styles.hoverButton;
    }
  };

  return (
    <TouchableOpacity
      style={buttonStyling(props.buttonType)}
      onPress={props.onPress}>
      {/* <Text style={labelStyling(props.buttonType)}>{props.label}</Text> */}
      <EditIcon />
    </TouchableOpacity>
  );
};

export default HoverButton;
