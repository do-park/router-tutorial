import React from 'react';
import { Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path={['/about', '/info']} component={About} />
    </div>
  );
};

export default App;
