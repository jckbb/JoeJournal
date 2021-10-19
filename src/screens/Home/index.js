import React, {useReducer, useState, useEffect} from 'react';
import {TouchableOpacity, StatusBar, View, FlatList, Text} from 'react-native';

import ButtonField from '../../common/components/ButtonField';
import IconButton from '../../common/components/IconButton';
import SubmitForm from '../../common/components/SubmitForm';
import Title from '../../common/components/Title';
import BottomDrawer, {drawerState} from '../../common/components/BottomDrawer';
import CreateCoffeeModal from '../CreateCoffeeModal';

import {PlusSvg} from '../../common/res/svgs';
import {getBeans, wipeStorage} from '../../storage/utils';

import reducer, {initialState} from './data/useForm';
import {updateField} from './data/actions';
import styles from './styles';

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showBottomDrawer, setBottomDrawer] = useState(false);
  const [isCoffeeModalVisible, setCoffeeModalVisible] = useState(false);
  const [optionType, setOptionType] = useState('');
  const [setupOptions, setSetupOptions] = useState({
    coffee: ['burundi'],
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
              placeholder={'Burundi'}
              value={
                !state.coffee
                  ? ''
                  : `${state.coffee.roaster} - ${state.coffee.origin}`
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
            label={'Method'}
            placeholder={'Pour over'}
            value={state.method}
            onPress={handleChangeMethodPress}
          />,
        )}
        {renderFieldContainer(
          <ButtonField
            hasTopRoom
            label={'Grinder'}
            placeholder={'Baratza Encore'}
            value={state.grinder}
            onPress={handleChangeGrinderPress}
          />,
        )}
        <View style={{alignItems: 'center', top: 50}}>
          <SubmitForm
            nextArrow
            label={'Continue'}
            onPress={() => {
              handleWipe();
            }}
          />
        </View>
      </View>
      <CreateCoffeeModal
        visible={isCoffeeModalVisible}
        onClose={() => {
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
                content = <Text style={styles.drawerItemText}>{`${item.roaster} - ${item.origin}`}</Text>;
                break;
              default:
                content = <Text>{item}</Text>;
                break;
            }

            return (
              <TouchableOpacity
                onPress={() => {
                  handleSelectedDrawerItem(item);
                }}>
                {content}
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
