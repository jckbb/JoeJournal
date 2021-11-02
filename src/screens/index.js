import React, {useRef, useEffect, useReducer, useState} from 'react';
import {BackHandler} from 'react-native';

import Setup from './Setup';
import PrepForm from './PrepForm';
import StageForm from './StageForm';
import BrewDetails from './BrewDetails';
import Evaluate from './Evaluate';

import {setBrew, wipeStorage, changeBrewIncrementDial} from '../storage/utils';
import reducer, {initialState} from '../common/data/reducer';
import {updateSetup, updatePrep, updateStage} from '../common/data/actions';

const Root = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [screen, setScreen] = useState('');
  const screenRef = useRef('');

  useEffect(() => {
    screenRef.current = screen;
  }, [screen]);

  const backAction = () => {
    switch (screenRef.current) {
      case 'setup':
        BackHandler.exitApp();
        break;
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

  const handleSetupComplete = (id, data) => {
    dispatch(updateSetup(id, data));
  };

  const handlePrepComplete = (data) => {
    dispatch(updatePrep(data));
  };

  const handleStageComplete = async (data) => {
    await setBrew(state.brewId, {
      ...state.setup,
      ...state.prep,
      stages: data,
    });
    dispatch(updateStage(data));
  };

  const handleNavigateTo = (type) => {
    setScreen(type);
  };

  const handleChangeDial = async (value) => {
    await changeBrewIncrementDial(state.brewId, value);
  };

  const renderScreen = (type) => {
    switch (type) {
      case 'setup':
        return (
          <Setup
            onNavigateTo={handleNavigateTo}
            onSetupComplete={handleSetupComplete}
          />
        );
      case 'prep':
        return (
          <PrepForm
            data={state}
            onPrepComplete={handlePrepComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'stage':
        return (
          <StageForm
            data={state}
            onStageComplete={handleStageComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'brew':
        return (
          <BrewDetails id={state.brewId} onNavigateTo={handleNavigateTo} />
        );
      case 'evaluate':
        return (
          <Evaluate
            onChangeDial={handleChangeDial}
            onNavigateTo={handleNavigateTo}
          />
        );
      default:
        return (
          <Setup
            onSetupComplete={handleSetupComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
    }
  };

  return renderScreen(screen);
};

export default Root;
