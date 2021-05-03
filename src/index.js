import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import FirebaseContext from './context/firebase';
import { firebase, FieldValue } from './lib/firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

/**
 * Client-side rendered app: react (create-react-app)
 * -> database using Firebase
 * -> react-loading-skeleton
 * -> tailwind css
 *
 * Folder structure:
 * src
 * -> components
 * -> constants
 * -> context
 * -> helpers
 * -> hooks
 * -> pages
 * -> lib (firebase lives here)
 * -> services (firebase functions)
 * -> styles (tailwind folder)
 * --> app
 * --> tailwind
 */
