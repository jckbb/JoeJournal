import React, {useEffect, useState} from 'react';
import {StatusBar, TouchableOpacity, Text, View, FlatList} from 'react-native';
import HoverButton from '../../common/components/HoverButton';
import {getLogs} from '../../storage/utils';
import CreateLogModal from '../CreateLogModal';
import LogModal from '../LogModal';
import {
  fromTimestampToTimeOfDay,
  fromTimestampToDate,
} from '../../common/utils/time';

import styles from './styles';

const initialModalVisibility = {
  logDetails: {
    visible: false,
  },
  createLog: {
    visible: false,
  },
};

const Home = () => {
  const [modalVisible, setModalVisible] = useState(initialModalVisibility);
  const [selectedLog, setSelectedLog] = useState(null);
  const [logs, setLog] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    setLog(await getLogs());
  };

  const handleBrewPress = () => {
    showModal('createLog');
  };

  const showModal = (type) => {
    setModalVisible({
      ...modalVisible,
      [type]: {
        visible: true,
      },
    });
  };

  const handleRequestClose = () => {
    setModalVisible(initialModalVisibility);
  };

  const renderItem = ({item, index}) => {
    const data = item;

    return (
      <TouchableOpacity
        style={styles.logButton}
        onPress={() => {
          setSelectedLog(data);
          showModal('logDetails');
        }}>
        <View style={styles.date}>
          <Text style={styles.dateText}>{`${data.evaluate.overall}/10`}</Text>
        </View>
        <View>
          <Text style={styles.logText}>{data.region}</Text>
          <Text style={styles.logText}>{data.roaster}</Text>
          <Text style={styles.timeText}>{`${fromTimestampToDate(data.createdAt)} ${fromTimestampToTimeOfDay(data.createdAt)}`}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.home}>
      <StatusBar hidden />
      <FlatList
        style={styles.logList}
        data={logs}
        renderItem={renderItem}
        keyExtractor={(__, index) => index.toString()}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
      <LogModal
        data={selectedLog}
        isVisible={modalVisible.logDetails.visible}
        onRequestClose={() => {
          handleRequestClose();
          setSelectedLog(null);
        }}
      />
      <CreateLogModal
        isVisible={modalVisible.createLog.visible}
        onRequestClose={(log) => {
          if (log) {
            setLog([log, ...logs]);
          }
          handleRequestClose();
        }}
      />
      <HoverButton
        buttonType={'hover'}
        label={'Brew'}
        onPress={handleBrewPress}
      />
    </View>
  );
};

export default Home;
