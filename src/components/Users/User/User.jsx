import React from 'react'
import s from '../Users.module.css'
import userPhoto from "./../../../assets/images/BigSmile.png";
import { NavLink } from 'react-router-dom';


function User ({user, unFollow,follow,followingInProgress}){
    return (<div className={s.user} key={user.id}>

        <div className={s.avatar}>
        <NavLink to={`/profile/${user.id}`} >
                <img className={s.ava} src={ user.photos.small ? user.photos.small : user.photos.large ? user.photos.large : userPhoto} alt="1" />
        </NavLink>

            {
            user.followed ? 
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { 
                
                unFollow(user.id)
            
            }} className={s.follow}>followed</button>
                :
            <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                
               follow(user.id);
            
            
            }}className={s.follow}>unfollowed</button>}

        </div>
        <div className={s.info}>
            <div className={s.AboutME}>
                <div >
                    {user.name}
                </div>
                <div>
                    {user.status == null? "Nema statusa": user.status}

                    </div>
            </div>
            <div className={s.live}>
                <div>
                    {/* {u.location.country} */}
                        Romania sau Moldova
                    </div>
                <div>
                    {/* {u.location.sity} */}
                        Suceava
                    </div>
            </div>
        </div>
    </div>)
    
    
    
    
    
    

    
}
export default User;