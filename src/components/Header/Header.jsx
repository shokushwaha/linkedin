import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import HeaderOption from './HeaderOption';
import { useDispatch } from 'react-redux';
import { auth } from '../../firebase';
import { logout } from '../../features/userSlice';
import Logo from '../../assets/linkedinlogo.png'
function Header() {

    const dispatch = useDispatch();

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
        window.location.replace("/");
    }

    return (
        <div className="header">
            <div className="header__left">
                <img src={Logo} alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search" type="text" />
                </div>
            </div>
            <div className="header__right">


                <HeaderOption Icon={HomeIcon} title="Home" />

                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notification" />
                <HeaderOption
                    avatar={true}
                    title="Logout"
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    )
}

export default Header
