// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC7t6UYH4JJEIz4EWgOclP0Dn1dUUGQlLQ",
  authDomain: "react-exam-bc2b6.firebaseapp.com",
  projectId: "react-exam-bc2b6",
  storageBucket: "react-exam-bc2b6.appspot.com",
  messagingSenderId: "438110849761",
  appId: "1:438110849761:web:7d20fc85922f5f288445a0",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
