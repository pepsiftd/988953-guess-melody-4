import React from 'react';
import WelcomeScreen from '@/components/welcome-screen/welcome-screen';

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {mistakesCount} = props;

  return <WelcomeScreen mistakesCount={mistakesCount}/>;
};

export default App;
