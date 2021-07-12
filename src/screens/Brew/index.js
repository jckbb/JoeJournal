import React, {useReducer, useState} from 'react';
import {ScrollView} from 'react-native';

import {
  grinderModelData,
  grinderModelByName,
  brewModelByName,
  brewModelData,
} from '../../common/data';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import FormWrapper from './components/FormWrapper';
import TextField from './components/TextField';
import ButtonField from './components/ButtonField';
import OptionList from './components/OptionList';

import formReducer, {actionTypes, initialState} from './reducer';
import styles from './styles';

const initialOptions = {
  type: undefined,
  data: {},
  names: [],
};

const Brew = (props) => {
  const [options, setOptions] = useState(initialOptions);
  const [isBottomDrawerVisible, setBottomDrawerVisible] = useState(false);
  const [{data, error}, dispatch] = useReducer(formReducer, initialState);

  const updateField = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_FIELD, field, payload});
  };

  const updateError = (field, payload) => {
    dispatch({type: actionTypes.UPDATE_ERROR, field, payload});
  };

  const validateForm = () => {
    let hasErrors = false;

    for (const key in error) {
      // valid
      if (data[key] && data[key].length > 0) continue;

      // add key and error
      updateError(key, true);

      // some errors exists
      hasErrors = true;
    }

    return hasErrors;
  };

  const handleSubmit = () => {
    // quick valid check for text field fill
    const hasErrors = validateForm();

    if (hasErrors) return;

    // close modal
    props.onRequestClose();
  };

  const handleBottomDrawerClose = () => {
    setBottomDrawerVisible(false);
    setOptions(initialOptions);
  };

  return (
    <>
      <ScrollView style={styles.brew}>
        <FormWrapper onSubmit={handleSubmit}>
          <TextField
            hasTopRoom
            error={error.roastName}
            label={'Roast Name'}
            placeholder={'Enter roast name'}
            value={data.roastName}
            onChangeText={(text) => {
              updateField('roastName', text);
            }}
          />
          <ButtonField
            hasTopRoom
            error={error.brewMethod}
            label={'Brew Method'}
            value={data.brewMethod}
            placeholder={'Select brew method'}
            onPress={() => {
              setOptions({
                type: 'brewMethod',
                data: brewModelData,
                names: brewModelByName,
              });
              setBottomDrawerVisible(true);
            }}
          />
          <ButtonField
            hasTopRoom
            error={error.grinder}
            label={'Grinder'}
            value={data.grinder}
            placeholder={'Select grinder'}
            onPress={() => {
              setOptions({
                type: 'grinder',
                data: grinderModelData,
                names: grinderModelByName,
              });
              setBottomDrawerVisible(true);
            }}
          />
        </FormWrapper>
      </ScrollView>
      <BottomDrawer
        isVisible={isBottomDrawerVisible}
        onDrawerStateChange={(changedState) => {
          if (drawerState.Closed === changedState) {
            handleBottomDrawerClose();
          }
        }}>
        <OptionList
          optionData={options.data}
          options={options.names}
          onOptionChange={selectedOption => {
            updateField(options.type, selectedOption);
            handleBottomDrawerClose();
          }}
        />
      </BottomDrawer>
    </>
  );
};

export default Brew;
