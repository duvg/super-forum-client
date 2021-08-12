import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/AppState';
import { UserProfileSetType } from '../../store/user/Reducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './SideBarMenus.css';

const SideBarMenus = () => {

    const user = useSelector((state: AppState) => state.user);

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

    console.log(user?.userName);
    return (
        <>
            <ul style={{ border: "thin solid #000;"}}>
                <FontAwesomeIcon icon={faUser} />
                <span className="menu-name">{user?.userName}</span>
            </ul>
        </>
    )
}


export default SideBarMenus;