// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAnalytics} from 'firebase/analytics';
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDRDhINX0beODiUpVM8tRSn07aRPuD4LXA',
  authDomain: 'mobile-app-a47c7.firebaseapp.com',
  projectId: 'mobile-app-a47c7',
  storageBucket: 'mobile-app-a47c7.appspot.com',
  messagingSenderId: '772907046172',
  appId: '1:772907046172:web:4416240a180d8e8e6b56d9',
  measurementId: 'G-F9CD6SCDBK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};
