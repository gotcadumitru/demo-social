import React from 'react'
import s from './Users.module.css'
import userPhoto from "./../../assets/images/BigSmile.png";
import { NavLink } from 'react-router-dom';
import ReactPaginate from 'react-paginate'
import User from './User/User';


function Users(props) {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.content}>
            {/* { pages.map((p, count) => {
                if (count < 20 || count > pageCount - 2) {
                    return (
                        <span onClick={(e) => { props.onPageChanged(p) }} className={`${props.currentPage === p ? s.selected : ''} ${s.pages}`}> {p} </span>
                    )
                }
            })} */}

            <ReactPaginate
                pageCount={pageCount}
                pageRangeDisplayed={8}
                marginPagesDisplayed={3}
                onPageChange={props.onPageChanged}
                initialPage={0}
                activeClassName={s.selected}
                containerClassName={s.paginationContainer}
                pageClassName={s.pageClassName}
                


            />

            {
                props.users.map(user => {
                    return <User user={user}
                        followingInProgress={props.followingInProgress}
                        follow={props.follow}
                        unFollow={props.unFollow}

                    />
                })
            }

        </div>
    );








}
export default Users