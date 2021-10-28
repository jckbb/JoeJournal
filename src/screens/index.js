import React, {useRef, useEffect, useReducer, useState} from 'react';
import {BackHandler} from 'react-native';

import Home from './Home';
import PrepForm from './PrepForm';
import StageForm from './StageForm';
import BrewDetails from './BrewDetails';
import Overview from './Overview';

import {setLog, wipeStorage} from '../storage/utils';
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
      case 'home':
        BackHandler.exitApp();
        break;
      case 'brew':
      case 'prep':
      case 'overview':
        setScreen('home');
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
    // TODO add to storage
    await setLog(state.logId, {
      ...state.setup,
      ...state.prep,
      stages: data,
    });
    dispatch(updateStage(data));
  };

  const handleNavigateTo = (type) => {
    setScreen(type);
  };

  const renderScreen = (type) => {
    switch (type) {
      case 'home':
        return (
          <Home
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
        return <BrewDetails id={state.logId} onNavigateTo={handleNavigateTo} />;
      case 'overview':
        return <Overview onNavigateTo={handleNavigateTo} />;
      default:
        return (
          <Home
            onSetupComplete={handleSetupComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
    }
  };

  return renderScreen(screen);
};

export default Root;
