import {Dispatch} from 'react';

export const allowSubmit = (
    dispatch: Dispatch<any>,
    msg: string,
    setDisabled: boolean
) => {
    dispatch({
        type: "AUTH_IS_SUBMIT_ENABLED",
        payload: setDisabled
    });
    
    dispatch({
        type: "AUTH_RESULT_MSG",
        payload: msg
    });
}

