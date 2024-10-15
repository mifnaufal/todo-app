import {initializeApp} from "firebase/app"
import{getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBFXgLTb3o4-m_mzZEOVTZRx70qDOGAP8E",
    authDomain: "todo-crud-73872.firebaseapp.com",
    projectId: "todo-crud-73872",
    storageBucket: "todo-crud-73872.appspot.com",
    messagingSenderId: "882247869504",
    appId: "1:882247869504:web:80ce65294118cd6032eba5"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {db};