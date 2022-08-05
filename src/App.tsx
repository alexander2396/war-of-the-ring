import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import { AppMenu } from './features/menu/AppMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <AppMenu/>
    </div>
  );
}

export default App;
