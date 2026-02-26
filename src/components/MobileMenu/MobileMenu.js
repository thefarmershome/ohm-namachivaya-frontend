import React, { useState, useEffect } from 'react';
import ListItem from "@mui/material/List";
import { NavLink, Link } from "react-router-dom";
import { useUser } from "../Context/UserContext";
import { USER_NAME } from "../../LocalStorage/LocalStorageNames";
import siteConfig from "../../config/siteConfig";
import ProfileImage from "../../images/icon/UserProfile.png";
import './style.css';

const menus = [
    { id: 1, title: 'Home', link: '/home' },
    { id: 2, title: 'About', link: '/aboutUS' },
    { id: 3, title: 'Our Products', link: '/our-products' },
    { id: 4, title: 'Contact', link: '/contact' },
]


const MobileMenu = () => {

    const [menuActive, setMenuState] = useState(false);
    const { isLoggedIn } = useUser();
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const storedUsername = localStorage.getItem(USER_NAME);
        if (storedUsername) {
            setUserName(storedUsername);
        }
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                {siteConfig.isLoginEnabled && (
                    <div className="mobile-menu-profile">
                        <Link to={isLoggedIn ? "/profilePage" : "#"} onClick={() => setMenuState(false)}>
                            <img src={ProfileImage} alt="profile" className="mobile-profile-img" />
                        </Link>
                        <span className="mobile-profile-name">
                            {isLoggedIn ? userName : "Login"}
                        </span>
                    </div>
                )}

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem key={mn}>
                                <NavLink className="active" onClick={ClickHandler}
                                    to={item.link}>{item.title}</NavLink>
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu mobail-menu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;