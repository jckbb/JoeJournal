import React, {useReducer, useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar, View, FlatList, Text} from 'react-native';

import ButtonField from '../../common/components/ButtonField';
import IconButton from '../../common/components/IconButton';
import SubmitForm from '../../common/components/SubmitForm';
import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import AddBeanFormModal from '../AddBeanFormModal';

import {PlusSvg} from '../../common/res/svgs';
import {getBeans, wipeStorage} from '../../storage/utils';

import reducer, {initialState} from './data/formReducer';
import {updateField} from './data/actions';
import styles from './styles';

const Home = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showFormErrors, setFormErrors] = useState(false);
  const [showBottomDrawer, setBottomDrawer] = useState(false);
  const [isCoffeeModalVisible, setCoffeeModalVisible] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [setupOptions, setSetupOptions] = useState({
    coffee: [],
    method: ['Pour over'],
    grinder: ['Baratza Encore'],
  });

  useEffect(() => {
    fetchCoffeeBeans();
  }, []);

  const fetchCoffeeBeans = async () => {
    await getBeans().then(response => {
      setSetupOptions(prev => ({
        ...prev,
        coffee: response,
      }));
    });
  };

  const handleChangeCoffeePress = () => {
    if (setupOptions['coffee'].length <= 0) return;

    setBottomDrawer(true);
    setOptionType('coffee');
  };

  const handleChangeMethodPress = () => {
    setBottomDrawer(true);
    setOptionType('method');
  };

  const handleChangeGrinderPress = () => {
    setBottomDrawer(true);
    setOptionType('grinder');
  };

  const handleCreateCoffeePress = () => {
    setCoffeeModalVisible(true);
  };

  // temp
  const handleWipe = async () => {
    await wipeStorage();
  };

  const handleSubmit = () => {
    let isFormValid = true;

    for (const field in state) {
      if (state[field].hasError) {
        isFormValid = false;
      }
    }

    if (!isFormValid) {
      setFormErrors(true);
    } else {
      props.onNavigateTo('prep');
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
      <Title>{'Setup'}</Title>
      <View style={styles.form}>
        {renderFieldContainer(
          <>
            <ButtonField
              label={'Coffee'}
              error={showFormErrors && state.coffee.hasError}
              placeholder={'Burundi'}
              value={
                state.coffee.value
                  ? `${state.coffee.value.roaster} - ${state.coffee.value.origin}`
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
            label={'Method'}
            placeholder={'Pour over'}
            value={state.method.value}
            onPress={handleChangeMethodPress}
          />,
        )}
        {renderFieldContainer(
          <ButtonField
            hasTopRoom
            error={showFormErrors && state.grinder.hasError}
            label={'Grinder'}
            placeholder={'Baratza Encore'}
            value={state.grinder.value}
            onPress={handleChangeGrinderPress}
          />,
        )}
        <View style={{alignItems: 'center', top: 50}}>
          <SubmitForm nextArrow label={'Continue'} onPress={handleSubmit} />
        </View>
      </View>
      <AddBeanFormModal
        visible={isCoffeeModalVisible}
        onClose={(data) => {
          if (data) {
            // update bean list
            setSetupOptions(prev => ({
              ...prev,
              coffee: [...prev.coffee, data],
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
              case 'coffee':
                content = `${item.roaster} - ${item.origin}`;
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
