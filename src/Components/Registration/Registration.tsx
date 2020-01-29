import React, {useEffect, useState} from 'react';
import s from '../Registration/Registration.module.css';
import {useDispatch, useSelector} from "react-redux";
import {sendRegistrationRequest} from "../../redux/registrationReducer";
import {NavLink, Redirect} from "react-router-dom";
import loading from "../Registration/svgImages/loading.svg";
import {AppStateType} from "../../redux/store";
import {errorAC} from "../../redux/booleanReducer";


const Registration: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const dispatch = useDispatch();
    const error = useSelector((store: AppStateType) => store.boolean.error);
    const isloading = useSelector((store: AppStateType) => store.boolean.isLoading);
    const success = useSelector((store: AppStateType) => store.boolean.success);
    useEffect(() => {
    }, [error]);
    useEffect(() => {
    }, [isloading]);

    const onSetEmail = (e: React.FormEvent<HTMLInputElement>): void => {
        setEmail(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const onSetPassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setPassword(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const onSetRepeatPassword = (e: React.FormEvent<HTMLInputElement>): void => {
        setRepeatPassword(e.currentTarget.value);
        dispatch(errorAC(``));
    };
    const validate = (email: string) => {
        const expression = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,7}$/i;
        return expression.test(String(email).toLowerCase())
    };

    const onRegisterClick = (): void => {
        if (repeatPassword !== password) {
            dispatch(errorAC(`Passwords don't match`))
        } else if (password.length <= 7) {
            dispatch(errorAC(`Password must contain minimum 8 symbols`))
        } else if (!validate(email)) {
            dispatch(errorAC(`Email is not valid`))
        } else {
            dispatch(sendRegistrationRequest(email, password))
        }
    };

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
            {isloading &&
            <span><img src={loading} alt=""/></span>
            }
            <button onClick={onRegisterClick} disabled={isloading}>Register</button>
            <NavLink to='/login'>Sign in</NavLink>
        </div>
    );
};


export default Registration;