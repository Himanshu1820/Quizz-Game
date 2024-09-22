import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./components/MainPage";
import Listing from "./components/Listing";
import Question from "./components/Question";
import Login from "./components/Login";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Signup from "./components/Signup";
import Play from "./components/Play";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGj4MqW3Z1WWkifTXeLpI0D4F3Sl3Eg8Y",
  authDomain: "firstproject-jsx.firebaseapp.com",
  databaseURL: "https://firstproject-jsx-default-rtdb.firebaseio.com",
  projectId: "firstproject-jsx",
  storageBucket: "firstproject-jsx.appspot.com",
  messagingSenderId: "700516006776",
  appId: "1:700516006776:web:7169eb69f75f8c6504268d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const App = () => {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <MainPage />,
      children: [
        {
          path: "/",
          element: <Listing />,
        },
        {
          path: "/ques",
          element: <Question />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/play",
          element: <Play />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
};

export default App;
