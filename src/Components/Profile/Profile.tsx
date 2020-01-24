import React, {useEffect, /*useState*/} from 'react';
import s from './Profile.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {postProfileTC, logoutTC} from "../../redux/profileReducer";
import {Redirect} from "react-router";



const Profile: React.FC = () => {

    let isAuth = useSelector((store: AppStateType) => store.profile.isAuth);
    let name = useSelector((store: AppStateType) => store.profile.name);
    let token: string | null = localStorage.getItem('stringToken')

    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(postProfileTC(token))
    }, [])

    if (isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.profile}>
            <h1>{name}</h1>
            <button onClick={() => {
                dispatch(logoutTC())
            }}>Log out
            </button>
        </div>
    );
}

export default Profile
