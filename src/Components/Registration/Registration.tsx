import React from 'react';
import s from '../Registration/Registration.module.css';
import {NavLink, Redirect} from "react-router-dom";
import loading from "../Registration/svgImages/loading.svg";
import {useRegistrationLogic} from "./useRegistrationLogic";


const Registration: React.FC = () => {
    const {error, success, onSetEmail, onSetPassword,
        onSetRepeatPassword, onRegisterClick,
        isLoading} = useRegistrationLogic();

    if (success) return <Redirect to="/login"/>;

    return (
        <div className={s.registration}>
            <span>Register</span>
            <div>
                <span>Email:</span>
                <input type="text" onChange={onSetEmail}/>
            </div>
            <div>
                <span>Password:</span>
                <input type="password" onChange={onSetPassword}/>
            </div>
            <div>
                <span>Repeat password:</span>
                <input type="password" onChange={onSetRepeatPassword}/>
            </div>
            <span className={s.sp}>{error}</span>
            {isLoading &&
            <span><img src={loading} alt=""/></span>
            }
            <button onClick={onRegisterClick} disabled={isLoading}>Register</button>
            <NavLink to='/login'>Sign in</NavLink>
        </div>
    );
};


export default Registration;