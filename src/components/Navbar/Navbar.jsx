import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import s from'./Navbar.module.css'


function Navbar(props){
  let navbarItems = props.navbarComponent[0].navbarItemsArray.map( item =>{
    return (
    <li>
      <NavLink activeClassName={s.active} className={s.item} to={item.itemLink}>
        {item.itemName}
      </NavLink>
    </li>
    );
  } );
    return (
      <nav className={s.nav}>
      <ul>
        {/* Punem activeClassName={s.active} ca sa adauge automat nu 'active' dar 'Navbar_active__3nXD_' */}
        {navbarItems}
      </ul>

      <div>
        
          <Friends friends={props.navbarComponent[1].friendsArray}/>

      </div>

    </nav>
    );
}
export default Navbar;