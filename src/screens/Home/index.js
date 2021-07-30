import React, {useEffect, useState} from 'react';
import {StatusBar, TouchableOpacity, Text, View, FlatList} from 'react-native';
import HoverButton from '../../common/components/HoverButton';
import ModalWrapper from '../../common/components/ModalWrapper';
import {getLogs, wipeStorage} from '../../storage/utils';
import Brew from '../Brew';
import LogModal from '../LogModal';
import {
  fromTimestampToTime,
  fromTimestampToDate,
} from '../../common/utils/time';

import styles from './styles';

const Home = () => {
  const [logModalVisible, setLogModalVisible] = useState(false);
  const [selectedLog, setSelectedLog] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [log, setLog] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    // await wipeStorage();

    const logs = await getLogs();
    setLog(logs);
  };

  const handleBrewPress = () => {
    setModalVisible(true);
  };

  const handleRequestClose = () => {
    setModalVisible(false);
  };

  const renderItem = ({item, index}) => {
    const data = item;

    return (
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => {
          setSelectedLog(data);
          setLogModalVisible(true);
        }}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{fromTimestampToDate(data.createdAt)}</Text>
        </View>
        <View>
          <Text style={styles.logText}>{data.region}</Text>
          <Text style={styles.logText}>{data.roaster}</Text>
          <Text style={styles.timeText}>{fromTimestampToTime(data.createdAt)}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.home}>
      <StatusBar hidden />
      <FlatList
        style={styles.logList}
        data={log}
        renderItem={renderItem}
        keyExtractor={(__, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
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
