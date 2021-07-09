import React, {useState} from 'react';
import {View, Text} from 'react-native';
import HoverButton from '../../common/components/HoverButton';
import ModalWrapper from '../../common/components/ModalWrapper';

import BrewForm from '../BrewForm';
import styles from './styles';

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleBrewPress = () => {
    setModalVisible(true);
  };

  const handleRequestClose = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.home}>
      <Text>{'home'}</Text>
      <ModalWrapper
        visible={isModalVisible}
        onRequestClose={handleRequestClose}>
        <BrewForm />
      </ModalWrapper>
      <HoverButton
        buttonType={'hover'}
        label={'Brew'}
        onPress={handleBrewPress}
      />
    </View>
  );
};

export default Home;
