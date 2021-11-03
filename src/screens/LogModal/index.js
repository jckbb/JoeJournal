import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';

import ModalWrapper from '../../common/components/ModalWrapper';
import Title from '../../common/components/Title';

import {getLogs} from '../../storage/utils';

import styles from './styles';

const LogModal = (props) => {
  const [logList, setLogList] = useState(null);
  useEffect(() => {
    fetchLogs(props.brewId);
  }, []);

  const fetchLogs = async (id) => {
    const logs = await getLogs(id);

    setLogList(logs);
  };

  const renderLogItem = ({item, index}) => (
    <View style={styles.logItem}>
      <Text style={styles.timeText}>{new Date(item.createdAt).toISOString()}</Text>
      <View style={[styles.row, {marginTop: 8, alignItems: 'flex-end'}]}>
        <Text style={styles.fieldText}>{'Grinder Dial'}</Text>
        <Text style={styles.previousText}>{item.dial.previous}</Text>
        <Text style={styles.currentText}>{item.dial.current}</Text>
      </View>
    </View>
  );

  const renderEmpty = () => (
    <View>
      <Text>{'Nothing Logged Yet'}</Text>
    </View>
  );

  const renderList = () =>
    logList.length <= 0 ? (
      renderEmpty()
    ) : (
      <FlatList
        style={{marginTop: 30}}
        data={logList}
        renderItem={renderLogItem}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
    );

  return (
    <ModalWrapper visible={props.isVisible} onCloseRequest={props.onClose}>
      <View style={{marginLeft: 15}}>
        <Title dark>{'Log'}</Title>
      </View>
      {logList && renderList()}
    </ModalWrapper>
  );
};

export default LogModal;
