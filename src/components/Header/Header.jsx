import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css'
import * as axios from 'axios'
function Header(props) {
    return (

        <header className={s.header}>
            <img src="https://abali.ru/wp-content/uploads/2013/11/lavrovyj_venok_4.png" />

            
            <div className={s.loginBlock}>
            {props.isAuth ? 
                <div><NavLink to={`/profile/${props.userID}`}>{props.login}</NavLink> <div><button onClick={props.logout}>LogOUT</button></div> </div> :
                // props.login : 
                <NavLink to={`/login`}> Login</NavLink>}
            </div>



        </header>
    );
}
export default Header;