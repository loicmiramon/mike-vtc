import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
      apiKey: "AIzaSyAkLwEmDzshN6_eOiyxiranqqARrNpP5vY",
      authDomain: "mike-vtc.firebaseapp.com",
      projectId: "mike-vtc",
      storageBucket: "mike-vtc.appspot.com",
      messagingSenderId: "40719024149",
      appId: "1:40719024149:web:a11a069603d62884660e1c",
      measurementId: "G-797B08S090"
};

const initFirebase = initializeApp(firebaseConfig);

export default initFirebase
