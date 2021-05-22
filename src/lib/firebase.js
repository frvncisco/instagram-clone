import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here is where we want to call the seed file only once

const config = {
  apiKey: 'AIzaSyCnPNNJ8pSOPLhGSWR6_mb23zik_QrlQxw',
  authDomain: 'instagram-clone-1824d.firebaseapp.com',
  projectId: 'instagram-clone-1824d',
  storageBucket: 'instagram-clone-1824d.appspot.com',
  messagingSenderId: '850515406358',
  appId: '1:850515406358:web:b1b0c6f2f3ab4973298f37'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
