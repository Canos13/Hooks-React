import React from 'react';
import ReactDOM from 'react-dom';
/* import { HooksApp } from './HooksApp' */
/* import { CounterApp } from './components/01-useSate/CounterApp'; */
import { CounterAppCustomHook } from './components/01-useSate/CounterAppCustomHook';

ReactDOM.render(
  <CounterAppCustomHook />,
  document.getElementById('root')
);

