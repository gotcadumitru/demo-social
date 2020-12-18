import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage,toggleFollowingProgress ,unFollow,getUsers } from '../../redux/users-reducer';
import { getFollowingInProgress, getIsFetching,getCurrentPage, getPageSize, getTotalUsersCount, getUsersFromState } from '../../redux/users-selectors'
import Users from './Users';
import s from './Users.module.css'
import Preloader from '../common/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class UsersContainerComponent extends React.Component {
    //constructor(props){
     //   super(props) //asta putem sa nu scriem deoarece daca
            //face doar asta atunci asta este ca default la constructor     
    //}
    
    componentDidMount(){

        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChanged = (data) =>{
        let pageNumber =  data.selected+1
        this.props.getUsers(pageNumber, this.props.pageSize);
    }
    render(){
        return (
            <>
            {this.props.isFetching ?
            <Preloader /> : null}
        <Users 
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            unFollow={this.props.unFollow}
            follow={this.props.follow}
            onPageChanged={this.onPageChanged}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}

            
        
        />
        </>
        )
    }

}


let mapStateToProps = (state) =>{
    return {
        users: getUsersFromState(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state), 
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{
            follow,
            unFollow,
            setCurrentPage,
            toggleFollowingProgress,
            getUsers,
        }),
)(UsersContainerComponent)
