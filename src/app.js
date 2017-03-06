import 'babel-polyfill';

// copy index.html to the build directory
require('file?name=[name].[ext]!../index.html');

import ReactDOM from 'react-dom';
import React from 'react';
import Events from 'Events';
import scheduleJSON from 'schedule';


ReactDOM.render(
  <Events data={scheduleJSON} />,
  document.getElementById('root')
);

