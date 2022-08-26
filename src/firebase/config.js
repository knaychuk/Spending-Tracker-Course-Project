import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCM_S-wB4PgfSLxUGnIIUiY58Cfg5XoTM0",
  authDomain: "mymoney-5fc30.firebaseapp.com",
  projectId: "mymoney-5fc30",
  storageBucket: "mymoney-5fc30.appspot.com",
  messagingSenderId: "10944610432",
  appId: "1:10944610432:web:bbddbc92f064908de76665"
}

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }
