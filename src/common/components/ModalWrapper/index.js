import React, {useEffect, useState} from 'react';
import {View, Modal} from 'react-native';

import HoverButton from '../HoverButton';
import styles from './styles';

const ModalWrapper = ({children, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(props.visible);
  }, [props.visible]);

  const handleClosePress = () => {
    console.log('test');
    props.onRequestClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        props.onRequestClose();
      }}>
      <View style={styles.modal}>
        {children}
        <HoverButton
          buttonType={'close'}
          label={'Close'}
          onPress={handleClosePress}
        />
      </View>
    </Modal>
  );
};

export default ModalWrapper;
