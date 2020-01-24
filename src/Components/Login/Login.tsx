import React, {useState} from 'react';
import s from './Login.module.css';
import {NavLink, Redirect} from "react-router-dom";
import {errorLoginAC, putLoginTC} from '../../redux/loginReducer'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import loading from '../Registration/svgImages/loading.svg'

const Login: React.FC = () => {

    let [email, setLoginState] = useState('')
    let [password, setPasswordState] = useState('')
    let [rememberMe, setValueState] = useState(false)
    let error = useSelector((store: AppStateType) => store.login.error);
    let isAuth = useSelector((store: AppStateType) => store.profile.isAuth);
    let isLoading = useSelector((store: AppStateType) => store.login.isLoading);

    let dispatch = useDispatch()

    let validationEmail = (email: string) => {
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        return reg.test(String(email).toLowerCase())
    }

    let sendData = () => {
        if (!validationEmail(email) || password.length < 7) {
            dispatch(errorLoginAC('Email/Password введен не корректно'))
        } else {
            dispatch(putLoginTC(email, password, rememberMe))
        }
    }

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
}

export default Login
