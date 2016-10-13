/**
 * Created by Diego Santa Cruz on 13/10/2016.
 */
import React from 'react';

//Permitirá hacer el render de nuestra aplicación
import { render } from 'react-dom';

//Provider pasar el store
import { Provider } from 'react-redux';

//Crear nuestra store donde esta almacenado el estado
import { createStore } from 'redux';

import reducer from './reducers';

import App from './components/App';

//El estado lo va a manejar a traves de store
let store = createStore(reducer);

//store.dispatch(addItem('Nuevo Item'));