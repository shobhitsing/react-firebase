import firebase from 'firebase';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMOkMxUIDIlSdZz258fGX_iJ5xoTE3n6M",
  authDomain: "destinyalert-e2953.firebaseapp.com",
  projectId: "destinyalert-e2953",
  storageBucket: "destinyalert-e2953.appspot.com",
  messagingSenderId: "775168120209",
  appId: "1:775168120209:web:193377a1236b6a33517630",
  measurementId: "G-5RTGJT26B2"
};
 firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore()
export const auth = firebase.auth();

export default {firestore,auth}



