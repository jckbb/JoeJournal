import React, {useEffect, useState} from 'react';
import {TouchableOpacity, Text, View, FlatList} from 'react-native';
import HoverButton from '../../common/components/HoverButton';
import ModalWrapper from '../../common/components/ModalWrapper';
import {readLogs} from '../../storage';
import Brew from '../Brew';
import LogModal from '../LogModal';

import styles from './styles';

const Home = () => {
  const [logModalVisible, setLogModalVisible] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [log, setLog] = useState({
    data: null,
    keys: [],
  });

  useEffect(() => {
    getLogs();
    setSelectedLog(null);
  }, []);

  const getLogs = async () => {
    setLog(await readLogs());
  };

  const handleBrewPress = () => {
    setModalVisible(true);
  };

  const handleRequestClose = () => {
    setModalVisible(false);
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => {
          setSelectedLog(log.data[item]);
          setLogModalVisible(true);
        }}>
        <Text style={styles.logText}>{new Date(log.data[item].createdAt).toISOString()}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.home}>
      <FlatList
        style={styles.logList}
        data={log.keys}
        renderItem={renderItem}
        keyExtractor={(__, index) => index.toString()}
      />
      <LogModal
        data={selectedLog}
        isVisible={logModalVisible}
        onRequestClose={() => {
          setLogModalVisible(false);
          setSelectedLog(null);
        }}
      />
      <ModalWrapper
        visible={isModalVisible}
        onRequestClose={handleRequestClose}>
        <Brew
          onRequestClose={() => {
            setModalVisible(false);
          }}
        />
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
