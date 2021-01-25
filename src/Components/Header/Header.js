import React, {useRef} from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const menuRef = useRef(null);
    const navItems = ['home', 'about+us', 'investment+plans', 'contact+us', 'faq', 'terms+&+conditions'];

    const handleItemClick = () => {
        menuRef.current.click();
    }
    return (
        <header className="header" id="site-header">
            <div className="container">
                <div className="header-content-wrapper">
                    <a href="/" className="site-logo" style={{fontWeight: 'bolder', letterSpacing: '2px', fontSize: '1.3rem'}}>
                        <img src="img/logo-primary.png" alt="logo" />
                        LOGO
                    </a>

                    <nav id="primary-menu" className="primary-menu">

                        <a id="menu-icon-trigger" className="menu-icon-trigger showhide" ref={menuRef}>
                            <span className="mob-menu--title">Menu</span>
                            <span id="menu-icon-wrapper" className="menu-icon-wrapper">
                                <svg width="1000px" height="1000px">
                                    <path id="pathD" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800"></path>
                                    <path id="pathE" d="M 300 500 L 700 500"></path>
                                    <path id="pathF" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200"></path>
                                </svg>
                            </span>
                        </a>

                        <ul className="primary-menu-menu">
                            {
                                navItems.map(navItem => (
                                    <li style={{textTransform: 'uppercase'}} key={navItem} onClick={e => {handleItemClick()}}>
                                        <NavLink to={'/' + (navItem === 'home'? '' : navItem)}>
                                            {navItem.replaceAll('+', ' ')}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>

                    </nav>

                </div>
            </div>
        </header>
    );
};

export default Header;