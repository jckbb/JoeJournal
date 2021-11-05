import React, {useReducer, useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar, View, FlatList, Text} from 'react-native';

import ButtonField from '../../common/components/ButtonField';
import IconButton from '../../common/components/IconButton';
import PrimaryButton from '../../common/components/PrimaryButton';
import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import AddBeanFormModal from '../AddBeanFormModal';

import {PlusSvg} from '../../common/res/svgs';
import {
  methodData,
  methodByName,
  grinderData,
  grinderByName,
} from '../../common/res/strings';
import {getBrew, getBeans} from '../../storage/utils';

import reducer, {initialState} from './data/formReducer';
import {updateField} from './data/actions';
import {
  createBrewId,
  convertFormDataToRecord,
  drawerListItemContent,
} from './utils';
import {TITLE, beanField, methodField, grinderField} from './res/strings';
import styles, {iconColor} from './styles';

export const fieldType = {
  BEAN: 'bean',
  METHOD: 'method',
  GRINDER: 'grinder',
};

const Setup = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);
  const [isFormComplete, setFormComplete] = useState(false);
  const [showBottomDrawer, setBottomDrawer] = useState(false);
  const [isCoffeeModalVisible, setCoffeeModalVisible] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [brewExists, setBrewExists] = useState(false);
  const [setupOptions, setSetupOptions] = useState({
    bean: [],
    method: methodByName,
    grinder: grinderByName,
  });

  useEffect(() => {
    fetchCoffeeBeans();
  }, []);

  useEffect(() => {
    const {bean, method, grinder} = state;
    if (bean.value && method.value && grinder.value) {
      const brewId = createBrewId(state);
      console.log(brewId);
      checkForBrew(brewId);
      setFormComplete(true);
    }
  }, [state]);

  const checkForBrew = async (id) => {
    const brewData = await getBrew(id);
    const exists = brewData && true;

    props.onChangeBrew(id, brewData);

    setBrewExists(exists);
  };

  const fetchCoffeeBeans = async () => {
    await getBeans().then(response => {
      setSetupOptions(prev => ({
        ...prev,
        bean: response,
      }));
    });
  };

  const handleChangeCoffeePress = () => {
    if (setupOptions[fieldType.BEAN].length <= 0) return;

    setBottomDrawer(true);
    setOptionType(fieldType.BEAN);
  };

  const handleChangeMethodPress = () => {
    setBottomDrawer(true);
    setOptionType(fieldType.METHOD);
  };

  const handleChangeGrinderPress = () => {
    setBottomDrawer(true);
    setOptionType(fieldType.GRINDER);
  };

  const handleCreateCoffeePress = () => {
    setCoffeeModalVisible(true);
  };

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
      const navigateId = brewExists ? 'brew' : 'prep';
      const setupRecord = brewExists ? null : convertFormDataToRecord(state);

      props.onComplete(navigateId, setupRecord);
    }
  };

  const handleDrawerStateChange = state => {
    if (state === drawerState.Closed) {
      handleDrawerClose();
    }
  };

  const handleDrawerClose = () => {
    setBottomDrawer(false);
    setOptionType('');
  };

  const handleSelectedDrawerItem = (data) => {
    handleDrawerClose();

    dispatch(updateField(optionType, data));
  };

  const handleBeanModalClose = () => {
    setCoffeeModalVisible(false);
  };

  const handleBeanModalComplete = (data) => {
    if (data) {
      // update bean list
      setSetupOptions(prev => ({
        ...prev,
        bean: [...prev.bean, data],
      }));
    }
    setCoffeeModalVisible(false);
  };

  const renderFieldContainer = field => <View style={styles.row}>{field}</View>;

  return (
    <View style={styles.home}>
      <StatusBar hidden />
      <Title dark>{TITLE}</Title>
      <View style={styles.form}>
        {renderFieldContainer(
          <>
            <ButtonField
              hasTopRoom
              label={beanField.LABEL}
              error={showFormErrors && state.bean.hasError}
              placeholder={beanField.PLACEHOLDER}
              value={
                state.bean.value
                  ? `${state.bean.value.roaster} - ${state.bean.value.origin}`
                  : ''
              }
              onPress={handleChangeCoffeePress}
            />
            <View style={{marginLeft: 5, alignSelf: 'flex-end'}}>
              <IconButton onPress={handleCreateCoffeePress}>
                <PlusSvg fill={iconColor} />
              </IconButton>
            </View>
          </>,
        )}
        {renderFieldContainer(
          <ButtonField
            hasTopRoom
            error={showFormErrors && state.method.hasError}
            label={methodField.LABEL}
            placeholder={methodField.PLACEHOLDER}
            value={
              state.method.value !== undefined
                ? methodData[state.method.value].displayName
                : ''
            }
            onPress={handleChangeMethodPress}
          />,
        )}
        {renderFieldContainer(
          <ButtonField
            hasTopRoom
            error={showFormErrors && state.grinder.hasError}
            label={grinderField.LABEL}
            placeholder={grinderField.PLACEHOLDER}
            value={
              state.grinder.value !== undefined
                ? grinderData[state.grinder.value].displayName
                : ''
            }
            onPress={handleChangeGrinderPress}
          />,
        )}
        <View style={{marginTop: 30}}>
          <PrimaryButton disabled={!isFormComplete} onPress={handleSubmit}>
            {brewExists ? 'Brew' : 'Create'}
          </PrimaryButton>
        </View>
      </View>
      <AddBeanFormModal
        visible={isCoffeeModalVisible}
        onClose={handleBeanModalClose}
        onComplete={handleBeanModalComplete}
      />
      <BottomDrawer
        isVisible={showBottomDrawer}
        onDrawerStateChange={handleDrawerStateChange}>
        <FlatList
          data={setupOptions[optionType]}
          renderItem={({item, index}) => {
            const content = drawerListItemContent(item, optionType);

            return (
              <TouchableOpacity
                onPress={() => {
                  handleSelectedDrawerItem(item);
                }}>
                <Text style={styles.drawerItemText}>{content}</Text>
              </TouchableOpacity>
            );
          }}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          keyExtractor={(__, index) => index.toString()}
        />
      </BottomDrawer>
    </View>
  );
};

export default Setup;
