import React, { FC, useReducer, useState } from 'react';
import ReactModal from 'react-modal';
import { isPasswordValid, PasswordTestResult } from '../common/validators/PasswordValidator';
import { ModalProps } from '../types/ModalProps';
import { allowSubmit } from './common/Helpers';
import userReducer, { initialAuthUserState } from './common/UserReducer';





const Registration: FC<ModalProps> = ({isOpen, onClickToggle}) => {
 
    
    const [{ userName, password, email, passwordConfirm, resultMsg, isSubmitDisabled}, dispatch] = useReducer(userReducer, initialAuthUserState);

    console.log(isSubmitDisabled);

    const onChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "AUTH_USERNAME"});

        if (!e.target.value) allowSubmit(dispatch, "Username cannot be empty", true);
        else allowSubmit(dispatch, "", false);
    }

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "AUTH__EMAIL"});

        if (!e.target.value) allowSubmit(dispatch, "Email cannot be empty", true);
        else allowSubmit(dispatch, "", false);
    }

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "AUTH_PASSWORD"});
        
        const passwordCheck: PasswordTestResult = isPasswordValid(e.target.value);
        if (!passwordCheck.isValid) {
            allowSubmit(dispatch, passwordCheck.message, passwordCheck.isValid);
            return;
        }
        passwordsSame(passwordConfirm, e.target.value);
    }

    const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ payload: e.target.value, type: "AUTH_PASSWORD_CONFIRM"});
        passwordsSame(password, e.target.value);
    }

    const passwordsSame = (passwordVal: string, passwordConfirmVal: string) => {
        if (passwordVal !== passwordConfirmVal) {
            allowSubmit(dispatch, "Passwords do not match", true);
            return false;
        } else {
            allowSubmit(dispatch, "", false);
            return true;
        }
    }

    const onClickRegister = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        e.preventDefault();
        onClickToggle(e);
    }

    const onClickCancel = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
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
                <h2>Create a new account</h2>
                <div className="reg-inputs">
                    <div>
                        <label>Username</label>
                        <input
                            type="text"
                            placeholder="craol..."
                            value={userName}
                            onChange={onChangeUserName}
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            type="text"
                            placeholder="userd@mail.com"
                            value={email}
                            onChange={onChangeEmail}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={onChangePassword}
                        />
                    </div>
                    <div>
                        <label>Password Confirm</label>
                        <input
                            type="password"
                            placeholder="Confirm the password"
                            value={passwordConfirm}
                            onChange={onChangePasswordConfirm}
                        />
                    </div>
                    <div className="reg-buttons">
                        <div className="reg-btn-left">
                            <button
                                style={{ marginLeft: ".5em"}}
                                className="action-btn"
                                disabled={isSubmitDisabled}
                                onClick={onClickRegister}
                            >
                                Register
                            </button>
                            <button
                                style={{ marginLeft: ".5em"}}
                                className="cancel-btn"
                                onClick={onClickCancel}
                            >
                                Close
                            </button>
                        </div>
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


export default  Registration;