import React, {useEffect, useState} from 'react';
import {FlatList, View, Text} from 'react-native';

import ModalWrapper from '../../common/components/ModalWrapper';
import Title from '../../common/components/Title';

import {getLogs} from '../../storage/utils';
import {getDateFromTimestamp} from './utils';
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

  const renderLogItem = ({item, index}) => {
    const difference = item.dial.current - item.dial.previous;
    const differenceType = difference > 0 ? '+' : '-';

    return (
      <View style={styles.logItem}>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <Text style={styles.timeText}>
            {getDateFromTimestamp(item.createdAt)}
          </Text>
          <Text style={styles.timeText}>{'10:30am'}</Text>
        </View>
        <View style={[styles.row, styles.logChange]}>
          <Text style={styles.fieldText}>{'Grinder Dial'}</Text>
          <View style={styles.row}>
            <Text style={[styles.fieldText, {fontWeight: '700'}]}>
              {item.dial.current}
            </Text>
            <Text style={[styles.currentText, {marginHorizontal: 8}]}>
              {`${differenceType}${difference}`}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.empty}>
      <Text style={styles.emptyText}>{'Nothing Logged Yet'}</Text>
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
        keyExtractor={(__, index) => index.toString()}
      />
    );

  return (
    <ModalWrapper visible={props.isVisible} onCloseRequest={props.onClose}>
      <View style={{paddingHorizontal: '20%'}}>
        <Title dark>{'History'}</Title>
        {logList && renderList()}
      </View>
    </ModalWrapper>
  );
};

export default LogModal;
