//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4QFh7-MUjH8yDUKzUXIrfr5IeUnayDFo",
  authDomain: "devx-d25d5.firebaseapp.com",
  projectId: "devx-d25d5",
  storageBucket: "devx-d25d5.appspot.com",
  messagingSenderId: "269069834044",
  appId: "1:269069834044:web:787b7e8d162cbf02073039",
  measurementId: "G-L1DF5CYCCK",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
