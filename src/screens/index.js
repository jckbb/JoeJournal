import React, {useRef, useEffect, useReducer, useState} from 'react';
import {BackHandler} from 'react-native';

import Setup from './Setup';
import PrepForm from './PrepForm';
import StageForm from './StageForm';
import BrewDetails from './BrewDetails';
import Evaluate from './Evaluate';

import {
  logChange,
  setBrew,
  wipeStorage,
  changeBrewIncrementDial,
} from '../storage/utils';
import reducer, {initialState} from '../common/data/reducer';
import {updateBrew} from '../common/data/actions';

const Root = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [screen, setScreen] = useState('setup');
  const [multiStepFormData, setMutliStepFormData] = useState({});
  const screenRef = useRef('');

  useEffect(() => {
    screenRef.current = screen;
  }, [screen]);

  const backAction = () => {
    switch (screenRef.current) {
      case 'brew':
      case 'prep':
      case 'evaluate':
        setScreen('setup');
        break;
      case 'stage':
        setScreen('prep');
        break;
      default:
        BackHandler.exitApp();
        break;
    }
    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backAction);
    };
  },[]);

  const handleWipe = async () => {
    await wipeStorage();
  };

  const handleNavigateTo = (type) => {
    setScreen(type);
  };

  const handleChangeDial = async (value) => {
    await logChange(
      state.brewId,
      state.brewData.dial,
      state.brewData.dial + value,
    );
    await changeBrewIncrementDial(state.brewId, value);
  };

  const handleChangeBrew = (id, data) => {
    dispatch(updateBrew(id, data));
  };

  const handleSetupComplete = (nextScreen, data) => {
    if (data) {
      setMutliStepFormData((prev) => ({
        ...prev,
        setup: data,
      }));
    }

    handleNavigateTo(nextScreen);
  };

  const handlePrepComplete = (nextScreen, data) => {
    if (data) {
      setMutliStepFormData((prev) => ({
        ...prev,
        [screen]: data,
      }));
    }

    handleNavigateTo(nextScreen);
  };

  const handleStageComplete = async (nextScreen, data) => {
    const brewData = {
      ...multiStepFormData.setup,
      ...multiStepFormData.prep,
      stages: data,
    };

    await setBrew(state.brewId, brewData);

    dispatch(updateBrew(state.brewId, brewData));
    setMutliStepFormData({});
    handleNavigateTo(nextScreen);
  };

  const renderScreen = (type) => {
    switch (type) {
      case 'prep':
        return (
          <PrepForm data={multiStepFormData} onComplete={handlePrepComplete} />
        );
      case 'stage':
        return (
          <StageForm
            data={multiStepFormData}
            onComplete={handleStageComplete}
          />
        );
      case 'brew':
        return (
          <BrewDetails
            data={{id: state.brewId, ...state.brewData}}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'evaluate':
        return (
          <Evaluate
            onChangeDial={handleChangeDial}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'setup':
        return (
          <Setup
            onChangeBrew={handleChangeBrew}
            onComplete={handleSetupComplete}
          />
        );
      default:
        return null;
    }
  };

  return renderScreen(screen);
};

export default Root;
