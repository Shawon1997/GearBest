

import './App.css';

import { Navbar } from "./components/Navbar";
import { LandingPage } from './components/landingPage';
import { Routes, Route } from "react-router-dom";

import { SignInPage } from './components/auth';
import { AllRoutes } from './components/allRoutes';
import {useDispatch, useSelector} from "react-redux"



function App() {

  const status = useSelector((store)=>{
    return store.isLogin.isLogin
  })

 // console.log(status)

  return (
    <div className="App">
      <Navbar />
      <Routes>
    {/* <Route path="/auth" element={<SignInPage/>}></Route> */}
    <Route path="" element={<LandingPage />}></Route>
    </Routes>
   <AllRoutes/>
     
      
   
    </div>
  );
}

export default App;

