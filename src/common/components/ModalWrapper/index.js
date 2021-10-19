import React, {useEffect, useState} from 'react';
import {View, Modal} from 'react-native';
import CloseButton from './components/CloseButton';

import styles from './styles';

const ModalWrapper = ({children, ...props}) => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(props.visible);
  }, [props.visible]);

  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={modalVisible}
      onRequestClose={() => {
        props.onRequestClose();
      }}>
      <View style={styles.modal}>{children}</View>
      <CloseButton onPress={props.onCloseRequest} />
    </Modal>
  );
};

export default ModalWrapper;
