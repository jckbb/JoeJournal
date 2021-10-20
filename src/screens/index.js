import React, {useState, useEffect} from 'react';
import Home from './Home';
import PrepForm from './PrepForm';

const Root = () => {
  const [screen, setScreen] = useState('home');

  const handleNavigateTo = (type) => {
    setScreen(type);
  };

  const renderScreen = (type) => {
    switch (type) {
      case 'home':
        return <Home onNavigateTo={handleNavigateTo} />;
      case 'prep':
        return <PrepForm onNavigateTo={handleNavigateTo} />;
      default:
        return <Home onNavigateTo={handleNavigateTo} />;
    }
  };

  return renderScreen(screen);
};

export default Root;
