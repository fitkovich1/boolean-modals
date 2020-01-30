import React from 'react';
import s from './Login.module.css';
import {NavLink, Redirect} from "react-router-dom";
import loading from '../Registration/svgImages/loading.svg';
import {useLoginLogic} from "./useLoginLogic";

const Login: React.FC = () => {
    const {
        isAuth, error, isLoading, email, password,
        rememberMe, setLoginState, setPasswordState,
        setValueState, sendData} = useLoginLogic();


    if (!isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div className={s.login}>
            <span>sing in</span>
            <span className={s.error}>{error}</span>
            <input value={email} onChange={(e) => setLoginState(e.currentTarget.value)}/>
            <input value={password} onChange={(e) => setPasswordState(e.target.value)} type={'password'}/>
            <NavLink to={'/password_recover'}>Forgot password?</NavLink>
            <input type={'checkbox'} placeholder={'Remember Me'} onChange={() => setValueState(!rememberMe)}
                   checked={rememberMe}/>
            <button onClick={sendData} disabled={isLoading}>Sing In</button>
            <NavLink to={'/registration'}>Registration</NavLink>
            {isLoading &&
            <img src={loading}/>
            }
        </div>
    );
};

export default Login
