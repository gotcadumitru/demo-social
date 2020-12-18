import Reat from 'react';
import { NavLink } from 'react-router-dom';
import s from './../Messages.module.css';

function Persons(props) {
    return (

        <li>
            <NavLink 
                activeClassName={s.active} 
                className={s.item} 
                to={`/messages/${props.user.id}`}>

            <div className={s.personInfo}>
                <img src={props.user.image} alt="Hi"/>
                {props.user.name}
            </div>  
            </NavLink>
        </li>
    );
}

export default Persons;