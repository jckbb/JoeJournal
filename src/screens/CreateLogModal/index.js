import React, {useState} from 'react';
import {View} from 'react-native';

import ModalWrapper from '../../common/components/ModalWrapper';
import ModalCloseButton from '../../common/components/ModalCloseButton';
import {setLog} from '../../storage/utils';

import BrewForm from './forms/BrewForm';
import EvaluateForm from './forms/EvaluateForm';
import {createRecord} from './utils';
import styles from './styles';

const CreateLogModal = (props) => {
  const [brewData, setBrewData] = useState({});
  const [showEvaluateForm, setShowEvaluateForm] = useState(false);

  const handleEvaluateComplete = (state) => {
    const evaluateRecord = createRecord(state);
    const logRecord = {
      ...brewData.record,
      evaluate: evaluateRecord,
      createdAt: new Date().getTime(),
    };

    setLog(brewData.state, logRecord);

    props.onRequestClose(logRecord);
    setShowEvaluateForm(false);
  };

  const handleBrewComplete = (state, totals) => {
    setShowEvaluateForm(true);

    const record = {
      ...createRecord(state),
      ...totals,
    };

    setBrewData({record, state});
  };

  return (
    <ModalWrapper
      visible={props.isVisible}
      onRequestClose={props.onRequestClose}>
      <View style={styles.header}>
        <ModalCloseButton
          onPress={() => {
            setShowEvaluateForm(false);
            props.onRequestClose(null);
          }}
        />
      </View>
      {showEvaluateForm ? (
        <EvaluateForm onSubmit={handleEvaluateComplete} />
      ) : (
        <BrewForm onSubmit={handleBrewComplete} />
      )}
    </ModalWrapper>
  );
};

export default CreateLogModal;
