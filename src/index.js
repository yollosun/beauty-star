import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/nullstyle.scss'
import firebase from "firebase"

import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCd-jwPIRbU40r_zjoXN98MMurSSOMNJh4",
  authDomain: "chat-tutor-fc1d1.firebaseapp.com",
  projectId: "chat-tutor-fc1d1",
  storageBucket: "chat-tutor-fc1d1.appspot.com",
  messagingSenderId: "395431847630",
  appId: "1:395431847630:web:cf4fd2a2b1b8e50100d29f",
  measurementId: "G-YQ24SV40CT"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)


export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{
    firebase,
    auth,
    firestore
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);


