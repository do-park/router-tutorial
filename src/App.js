import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

const App = () => {
  return (
    <div>
      <ul>
        <li><Link to='/'>홈</Link></li>
        <li><Link to='/about'>소개</Link></li>
        <li><Link to='/profile/dpark'>dpark profile</Link></li>
        <li><Link to='/profile/gildong'>gildong profile</Link></li>
        <li><Link to='/profiles'>profiles</Link></li>
        <li><Link to='/history'>History example</Link></li>
      </ul>
      <Route exact path='/' component={Home} />
      <Route path={['/about', '/info']} component={About} />
      <Route path='/profile/:username' component={Profile} />
      <Route path='/profiles' component={Profiles} />
      <Route path='/history' component={HistorySample} />
    </div>
  );
};

export default App;
