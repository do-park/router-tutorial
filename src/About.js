import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });
  const showDetail = query.detail === 'true';
  return (
    <div>
      <h1>About</h1>
      <p>react router example</p>
      {showDetail && <p>You setted detail value true!</p>}
    </div>
  );
};

export default About;
