import React, {useReducer, useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar, View, FlatList, Text} from 'react-native';

import ButtonField from '../../common/components/ButtonField';
import IconButton from '../../common/components/IconButton';
import SubmitForm from '../../common/components/SubmitForm';
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
import {getBeans, checkSetupIdExists} from '../../storage/utils';

import reducer, {initialState} from './data/formReducer';
import {updateField} from './data/actions';
import {convertFormDataToRecord} from './utils';
import {
  TITLE,
  SUBMIT,
  beanField,
  methodField,
  grinderField,
} from './res/strings';
import styles from './styles';

const fieldType = {
  BEAN: 'bean',
  METHOD: 'method',
  GRINDER: 'grinder',
};

const Home = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);
  const [showBottomDrawer, setBottomDrawer] = useState(false);
  const [isCoffeeModalVisible, setCoffeeModalVisible] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [setupOptions, setSetupOptions] = useState({
    bean: [],
    method: methodByName,
    grinder: grinderByName,
  });

  useEffect(() => {
    fetchCoffeeBeans();
  }, []);

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
      const setupRecord = convertFormDataToRecord(state);
      const setupId = `${state.bean.value.roaster}_${state.bean.value.origin}_${state.method.value}_${state.grinder.value}`;

      const logIdExists = await checkSetupIdExists(setupId);
      const navigateId = logIdExists ? 'brew' : 'prep';
      props.onSetupComplete(setupId, setupRecord);
      props.onNavigateTo(navigateId);
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

  const renderFieldContainer = field => <View style={styles.row}>{field}</View>;

  return (
    <View style={styles.home}>
      <StatusBar hidden />
      <Title>{TITLE}</Title>
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
                <PlusSvg />
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
        <View style={{alignItems: 'center', top: 50}}>
          <SubmitForm nextArrow label={SUBMIT} onPress={handleSubmit} />
        </View>
      </View>
      <AddBeanFormModal
        visible={isCoffeeModalVisible}
        onClose={(data) => {
          if (data) {
            // update bean list
            setSetupOptions(prev => ({
              ...prev,
              bean: [...prev.bean, data],
            }));
          }
          setCoffeeModalVisible(false);
        }}
      />
      <BottomDrawer
        isVisible={showBottomDrawer}
        onDrawerStateChange={handleDrawerStateChange}>
        <FlatList
          data={setupOptions[optionType]}
          renderItem={({item, index}) => {
            let content = null;

            switch (optionType) {
              case fieldType.BEAN:
                content = `${item.roaster} - ${item.origin}`;
                break;
              case fieldType.METHOD:
                content = methodData[item].displayName;
                break;
              case fieldType.GRINDER:
                content = grinderData[item].displayName;
                break;
              default:
                content = item;
                break;
            }

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

export default Home;
