


const ERROR_REGISTRATION_DATA = 'ERROR_REGISTRATION_DATA';
const initialState = {

};

const booleanReducer = (state: any = initialState, action: any):void => {
   /*     switch (action.type) {
            case ERROR_REGISTRATION_DATA: {
                return {
                    ...state,
                    error: action.error
                };
            }
        }*/
        return state;
    };

export const errorRegistrationData = (error: string) => {
    return {
        type: ERROR_REGISTRATION_DATA,
        error
    }
};

export default booleanReducer;