//Framework de trabajo
import React from 'react';
import ReactDOM from 'react-dom';

//Para el uso de la tienda
import {Provider} from 'react-redux'
import generateStore from './redux/store'

import './index.css';
import './App.css';
import App from './App';

//Declaramos la tienda
const store = generateStore()


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


