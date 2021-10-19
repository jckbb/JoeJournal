import React, {useReducer} from 'react';
import {View} from 'react-native';

import ModalWrapper from '../../common/components/ModalWrapper';
import SubmitForm from '../../common/components/SubmitForm';
import TextField from '../../common/components/TextField';
import Title from '../../common/components/Title';
import TextListField from '../../common/components/TextListField';

import {setBean} from '../../storage/utils';

import reducer, {initialState} from './data/useForm';
import {updateField} from './data/actions';
import {
  SUBMIT,
  TITLE,
  originField,
  roasterField,
  noteField,
} from './res/strings';
import styles from './styles';

const AddBeanFormModal = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async () => {
    // - validate
    // - submit
    // const {origin, roaster, notes} = state;
    // const noteList = convertStringToArray(notes.value);
    const dummyData = {
      origin: 'Gutamala',
      roaster: 'States Coffee',
      notes: ['fruit', 'chocolate', 'honey'],
    };

    await setBean(dummyData);
  };

  return (
    <ModalWrapper visible={props.visible} onCloseRequest={props.onClose}>
      <View style={styles.form}>
        <Title dark>{TITLE}</Title>
        <TextField
          hasTopRoom
          dark
          border
          error={state.origin.hasError}
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
          error={state.roaster.hasError}
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
          <SubmitForm dark label={SUBMIT} onPress={handleSubmit} />
        </View>
      </View>
    </ModalWrapper>
  );
};

export default AddBeanFormModal;
