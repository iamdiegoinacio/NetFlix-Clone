import React from 'react';
import './Header.css';


export default ({headerBlackground}) => {
    return (
        <header className={headerBlackground? 'header--background': ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png" alt="Netflix logo"/>
                </a>
            </div>
            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="User photo"/>
                </a>
            </div>
        </header>
    )
}