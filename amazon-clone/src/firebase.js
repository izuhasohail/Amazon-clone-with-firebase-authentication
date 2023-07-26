// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
//  const firebaseConfig = {
//    apiKey: "AIzaSyAvyJbyZWccAudlrEq9VCqS--qzxIzpbUw",
//    authDomain: "clone-72a91.firebaseapp.com",
//    projectId: "clone-72a91",
//    storageBucket: "clone-72a91.appspot.com",
//    messagingSenderId: "534161805852",
//    appId: "1:534161805852:web:fd1126dbc9ef47caee45d9",
//    measurementId: "G-QNL3D8KFQ4"
//  };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAFLm2uwhWkbfCwiQZtcKr8XsgDC7p5mbA",
   authDomain: "app-clone-6583c.firebaseapp.com",
   projectId: "app-clone-6583c",
   storageBucket: "app-clone-6583c.appspot.com",
   messagingSenderId: "1024558293297",
   appId: "1:1024558293297:web:cb045275ad34c0ead81010",
   measurementId: "G-L2J75KJN1N"
 };



const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();
const auth=firebase.auth();

export {db,auth};
