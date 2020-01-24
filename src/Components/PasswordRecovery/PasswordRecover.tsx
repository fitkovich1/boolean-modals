import React, { useState } from 'react';
import s from './Password.module.css'
import { useDispatch } from 'react-redux';
import { sendRecoveryPasswordRequest } from '../../redux/passwordRecoveryReducer';



const PasswordRecover: React.FC = () => {
  const [emailValue , setEmailValue] = useState('')
  const dispatch = useDispatch()
  let sendEmailValue = (e:any) =>{
    setEmailValue(e.currentTarget.value)
  }
  const sendRecoveryPassword = () =>{

      dispatch(sendRecoveryPasswordRequest(emailValue))
  }
  
  return (
    <div className={s.recover}>
        <div>Forgot password</div>
        <input onChange = {sendEmailValue}></input>
        <button onClick = {sendRecoveryPassword}>Send request</button>
    </div>
  );
}

export default PasswordRecover;
