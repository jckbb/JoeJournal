import React, {useReducer, useState} from 'react';
import {View} from 'react-native';

import ModalWrapper from '../../common/components/ModalWrapper';
import SubmitForm from '../../common/components/SubmitForm';
import TextField from '../../common/components/TextField';
import Title from '../../common/components/Title';
import TextListField from '../../common/components/TextListField';

import {setBean} from '../../storage/utils';

import reducer, {initialState} from './data/formReducer';
import {convertToUsableData} from './utils';
import {updateField} from './data/actions';
import {
  SUBMIT,
  TITLE,
  originField,
  roasterField,
  noteField,
} from './res/strings';
import styles from './styles';
import ModalButton from '../../common/components/ModalButton';

const AddBeanFormModal = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);

  const handleSubmit = async () => {
    let isFormValid = true;

    for (const field in state) {
      if (state[field].hasError) {
        isFormValid = false;
      }
    }

    if (!isFormValid) {
      setFormErrors(true);
    } else {
      const beanData = convertToUsableData(state);

      await setBean(beanData).then(() => {
        props.onClose(beanData);
      });
    }
  };

  return (
    <ModalWrapper visible={props.visible} onCloseRequest={props.onClose}>
      <View style={styles.form}>
        <Title dark>{TITLE}</Title>
        <TextField
          hasTopRoom
          dark
          border
          error={showFormErrors && state.origin.hasError}
          label={originField.LABEL}
          value={state.origin.value}
          placeholder={originField.PLACEHOLDER}
          onChangeText={value => {
            dispatch(updateField('origin', value));
          }}
        />
        <TextField
          hasTopRoom
          dark
          border
          error={showFormErrors && state.roaster.hasError}
          label={roasterField.LABEL}
          value={state.roaster.value}
          placeholder={roasterField.PLACEHOLDER}
          onChangeText={value => {
            dispatch(updateField('roaster', value));
          }}
        />
        <TextListField
          hasTopRoom
          dark
          border
          label={noteField.LABEL}
          value={state.notes.value}
          placeholder={noteField.PLACEHOLDER}
          onChangeText={value => {
            dispatch(updateField('notes', value));
          }}
        />
        <View style={styles.submit}>
          <ModalButton disabled={false} onPress={handleSubmit}>
            {SUBMIT}
          </ModalButton>
        </View>
      </View>
    </ModalWrapper>
  );
};

export default AddBeanFormModal;
