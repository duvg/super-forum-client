import React, { useState } from 'react';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useWindowDimensions } from '../../hooks/useWindowDimensions';
import './Nav.css';
import ReactModal from 'react-modal';
import SideBarMenus from './sidebar/SideBarMenus';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { width } = useWindowDimensions();

    const getMobileMenu = () => {
        if (width <= 768) {
            return (
                <FontAwesomeIcon 
                    onClick={onClickToggle}
                    icon={faBars}
                    size="lg"
                    className="nav-mobile-menu"
                />
            )
        }
    }

    const onClickToggle = (e: React.MouseEvent<Element, MouseEvent>) => {
        setShowMenu(!showMenu);
    }

    const onRequestClose = (
        e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>
    ) => {
        setShowMenu(false);
    }

    return (
        <>
            <ReactModal
                appElement={document.getElementById('app') as HTMLElement}
                className="modal-menu"
                isOpen={showMenu}
                onRequestClose={onRequestClose}
                shouldCloseOnOverlayClick={true}
            >
                <SideBarMenus />
            </ReactModal>
            <nav >
                {getMobileMenu()}
                <strong>SuperForum</strong>
            </nav>
        </>
    )
}

export default Nav;