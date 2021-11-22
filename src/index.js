import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import initFirebase, {FirebaseContext} from './firebase';
import './style/index.css'
import './style/backOffice/index.css'


ReactDOM.render(
    <FirebaseContext.Provider value={initFirebase}>
      <App />
    </FirebaseContext.Provider>,
  document.getElementById('root')
);

