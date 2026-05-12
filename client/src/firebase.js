import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBqBJkWtwKukYbh9Ry2cVwKsWk7DkfPIoc",
  authDomain: "portfolio-github-f3e35.firebaseapp.com",
  projectId: "portfolio-github-f3e35",
  storageBucket: "portfolio-github-f3e35.firebasestorage.app",
  messagingSenderId: "110506469752",
  appId: "1:110506469752:web:6e512f20ce8cf8926f408d",
  measurementId: "G-D2H1C3N8JT"
};

const app = initializeApp(firebaseConfig);

// 🔥 AUTH
export const auth = getAuth(app);