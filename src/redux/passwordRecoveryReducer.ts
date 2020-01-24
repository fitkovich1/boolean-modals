// import {recoveryAPI} from '../api-recovery/api'
const ADD_RECOVERY = 'ADD_RECOVERY'


interface IState {
    value: string
}

interface IAction {
    type: typeof ADD_RECOVERY
    message: string
}

const initialState = {
    value: ''
}

export const reducerPasswordRecovery = (state = initialState, action: IAction): IState => {
    if(action.type){
        return{...state, value: action.message}
    }
    return state
}
const setRecoveryMessage = (message: any)=> {
    return{ type: ADD_RECOVERY, message}
}

export const sendRecoveryPasswordRequest = (email: any) => async(dispatch: any) =>{
    try {
        // let response = await recoveryAPI.recovery(email)
    }
    catch(error){

        alert(error.response.data.error)}
    
    
}

export default reducerPasswordRecovery