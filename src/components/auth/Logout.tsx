import React, { FC } from 'react';
import ReactModal from 'react-modal';
import { ModalProps } from '../types/ModalProps'

const Logout: FC<ModalProps> = ({ isOpen, onClickToggle }) => {

    const onClickLogout = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        onClickToggle(e);
    };

    const onClickCancel = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        onClickToggle(e);
    };

    return (
        <ReactModal
            appElement={document.getElementById('app') as HTMLElement}
            className="modal-menu"
            isOpen={isOpen}
            onRequestClose={onClickToggle}
            shouldCloseOnOverlayClick={true}
        >
            <form>
                <div className="logout-inputs">
                    Are you sure you want to logout?
                </div>
                <div className="form-buttons fotm-buttons-sm">
                    <button
                        style={{ marginLeft: ".5em" }}
                        className="action-btn"
                        onClick={onClickLogout}
                    >
                        Logout
                    </button>
                    <button
                        style={{ marginLeft: ".5em" }}
                        className="cancel-btn"
                        onClick={onClickCancel}
                    >
                        Close
                    </button>
                </div>
            </form>
        </ReactModal>
    )
}


export default Logout;