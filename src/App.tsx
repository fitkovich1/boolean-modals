import React from 'react';
import s from './App.module.css';
import {Route} from "react-router-dom";
import Login from './Components/Login/Login'
import Registration from './Components/Registration/Registration'
import PasswordRecover from './Components/PasswordRecovery/PasswordRecover'
import Header from './Components/Header/header';
import Profile from './Components/Profile/Profile';

const App: React.FC = () => {
  return (
    <div >
      <Header/>
        <div className={s.app}>
            <Route render={() => <Login/>} path='/login'/>
            <Route render={() => <Registration/>} path='/registration'/>
            <Route render={() => <PasswordRecover/>} path='/password_recover'/>
            <Route render={() => <Profile/>} path='/profile'/>
        </div>
    </div>
  );
}

export default App;