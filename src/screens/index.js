import React, {useEffect, useReducer, useState} from 'react';

import Home from './Home';
import PrepForm from './PrepForm';
import StageForm from './StageForm';
import BrewDetails from './BrewDetails';

import {setLog, wipeStorage, getBeans} from '../storage/utils';
import reducer, {initialState} from '../common/data/reducer';
import {updateSetup, updatePrep, updateStage} from '../common/data/actions';

const Root = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [screen, setScreen] = useState('');

  useEffect(() => {
    // handleWipe();
    handleBeans();
  },[]);

  const handleBeans = async () => {
    await getBeans();
  };

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
            onPrepComplete={handlePrepComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'stage':
        return (
          <StageForm
            onStageComplete={handleStageComplete}
            onNavigateTo={handleNavigateTo}
          />
        );
      case 'brew':
        return <BrewDetails id={state.logId} onNavigateTo={handleNavigateTo} />;
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
