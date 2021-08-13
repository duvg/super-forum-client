import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../store/AppState';
import { UserProfileSetType } from '../../../store/user/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRegistered, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Registration from '../../auth/Registration';
import Login from '../../auth/Login';
import './SideBarMenus.css';
import Logout from '../../auth/Logout';



const SideBarMenus = () => {

    const user = useSelector((state: AppState) => state.user);
    const [showRegister, setShowRegister] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showLogout, setShowLogout] = useState(false);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: UserProfileSetType,
            payload: {
                id: 1,
                userName: "testUser"
            }
        })
    }, [dispatch]);


    const onClickToggleRegister = () => {
        setShowRegister(!showRegister);
    }

    const onClickToggleLogin = () => {
        setShowLogin(!showLogin);
    }

    const onClickToggleLogout = () => {
        setShowLogout(!showLogout);
    }

    console.log(user?.userName);
    return (
        <>
            <ul>
                <li>
                    <FontAwesomeIcon icon={faUser} />
                    <span className="menu-name">Welcome {user?.userName}</span>
                </li>
                <li>
                    <FontAwesomeIcon icon={faRegistered} />
                    <span className="menu-name" onClick={onClickToggleRegister}>Register</span>
                    <Registration
                        isOpen={showRegister}
                        onClickToggle={onClickToggleRegister}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignInAlt} />
                    <span className="menu-name" onClick={onClickToggleLogin}>Login</span>
                    <Login
                        isOpen={showLogin}
                        onClickToggle={onClickToggleLogin}
                    />
                </li>
                <li>
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span className="menu-name" onClick={onClickToggleLogout}>Logout</span>
                    <Logout
                        isOpen={showLogout}
                        onClickToggle={onClickToggleLogout}
                    />
                </li>
            </ul>
        </>
    )
}


export default SideBarMenus;