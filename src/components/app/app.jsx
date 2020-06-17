import React from 'react';
import PropTypes from 'prop-types';
import WelcomeScreen from '@/components/welcome-screen/welcome-screen';

const welcomeButtonClickHandler = () => {};

const App = ({mistakesCount}) => {
  return <WelcomeScreen
    mistakesCount={mistakesCount}
    welcomeButtonClickHandler={welcomeButtonClickHandler}
  />;
};

App.propTypes = {
  mistakesCount: PropTypes.number.isRequired,
};

export default App;
