import {apiRegistration} from '../api/apiRegistration';
import {AppStateType} from "./store";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

const ERROR_REGISTRATION_DATA = 'ERROR_REGISTRATION_DATA';
const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

interface IErrorRegistrationDataAction {
    type: typeof ERROR_REGISTRATION_DATA;
    error: string
}

interface IRegistrationRequestSendAction {
    type: typeof REGISTRATION_REQUEST,
}

interface IAuthSuccessAction {
    type: typeof AUTH_SUCCESS,
    success: boolean
}

interface IInitialStateRegistration {
    error: string,
    isLoading: boolean,
    success: boolean
}

export type IActionsRegistration = IErrorRegistrationDataAction | IRegistrationRequestSendAction | IAuthSuccessAction;


const initialState: IInitialStateRegistration = {
    error: '',
    isLoading: false,
    success: false
};

const reducerRegistration =
    (state: IInitialStateRegistration = initialState, action: IActionsRegistration): IInitialStateRegistration => {
        switch (action.type) {
            case ERROR_REGISTRATION_DATA: {


                return {
                    ...state,
                    error: action.error
                };
            }
            case REGISTRATION_REQUEST:
                return {
                    ...state,
                    isLoading: !state.isLoading
                };
            case AUTH_SUCCESS:
                return {
                    ...state,
                    success: action.success
                }
        }
        return state;
    };

export const errorRegistrationData = (error: string): IErrorRegistrationDataAction => {
    return {
        type: ERROR_REGISTRATION_DATA,
        error
    }
};

const isRegistrationRequestSend = (): IRegistrationRequestSendAction => {
    return {
        type: REGISTRATION_REQUEST
    }
};

const isAuthSuccess = (success: boolean): IAuthSuccessAction => {
    return {
        type: AUTH_SUCCESS,
        success
    }
};


export const sendRegistrationRequest = (email: string, password: string): ThunkAction<void, AppStateType, {}, IActionsRegistration> =>
    async (dispatch: ThunkDispatch<AppStateType, {}, IActionsRegistration>) => {
        try {
            dispatch(isRegistrationRequestSend());
            let response = await apiRegistration.sendEmail(email, password);
            console.log(response);
            dispatch(isAuthSuccess(response.data.success));
        } catch (error) {
            dispatch(errorRegistrationData(error.response.data.error))
        }
        dispatch(isRegistrationRequestSend());
    };

export default reducerRegistration;