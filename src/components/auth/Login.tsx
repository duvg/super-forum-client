import React, { FC, useReducer } from 'react';
import ReactModal from 'react-modal';
import { ModalProps } from '../types/ModalProps';
import { allowSubmit } from './common/Helpers';
import userReducer, { initialAuthUserState } from './common/UserReducer';

const Login: FC<ModalProps> = ({ isOpen, onClickToggle}) => {

    //const dispatch = useReducer(initialAuthUserState, userReducer);
    const [{ userName, password, resultMsg, isSubmitDisabled}, dispatch] = useReducer(userReducer, initialAuthUserState);


    const onChangeUserame = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'AUTH_USERNAME', payload: e.target.value});
        if (!e.target.value) 
            allowSubmit(dispatch, "Username cannot be empty", true);
        else allowSubmit(dispatch, "", false);
    }

    const onChangePassword = (e : React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'AUTH_PASSWORD', payload: e.target.value});
        if (!e.target.value)
            allowSubmit(dispatch, "Password cannot be empty", true);
        else allowSubmit(dispatch, "", false);
    }

    const onClickLogin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    }
    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e);
    }
    

    return (
        <ReactModal
            appElement={document.getElementById('app') as HTMLElement}
            className="modal-menu"
            isOpen={isOpen}
            onRequestClose={onClickToggle}
            shouldCloseOnOverlayClick={true}
        >
            <form>
                <div className="reg-inputs">
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="user2dap"
                            value={userName}
                            onChange={onChangeUserame}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div className="form-buttons form-buttons-sm">
                        <button
                            style={{ marginLeft: ".5em" }}
                            className="action-btn"
                            disabled={isSubmitDisabled}
                            onClick={onClickLogin}
                        >
                            Login
                        </button>
                        <button
                            style={{ marginLeft: ".5em"}}
                            className="cancel-btn"
                            onClick={onClickCancel}
                        >
                            Close
                        </button>
                    </div>
                    { resultMsg && 
                        (
                            <span className="err-msg">
                                <strong>{resultMsg}</strong>
                            </span>
                        )
                    }
                </div>
            </form>
        </ReactModal>
    )
}

export default Login;