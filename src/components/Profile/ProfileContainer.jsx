import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile , getStatus, updateStatus } from '../../redux/profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';

class ProfileContainerComponent extends React.Component {
  componentDidMount(){
    let userID = this.props.match.params.userID;
    if(!userID){
      userID = this.props.userID;
    }
    this.props.getUserProfile(userID);
    this.props.getStatus(userID);
  }
  render() {
    if (this.props.isAuth == false) return <Redirect to='/login' />

    return (
      <Profile {...this.props} profile={this.props.profile}/>
    );
  }

}

let mapStateToProps = (state) =>{
  return {
    profile : state.profilePage.profile, 
    status: state.profilePage.status,
    userID: state.auth.userID,
  }
}



//let withURLDataProfileContainerComponent = withRouter(authRedirectComponent)
// Ca sa primim datele din URL de exemplu ID sau name sau ceva din URL
export default compose(
  connect(mapStateToProps,{getUserProfile,getStatus,updateStatus}),
  withRouter,
  //withAuthRedirect
  )(ProfileContainerComponent);
