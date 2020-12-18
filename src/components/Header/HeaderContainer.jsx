import React from 'react';
import * as axios from 'axios'
import Header from './Header';
import { connect } from 'react-redux';
import {logout } from '../../redux/auth-reducer';
import { compose } from 'redux';

class HeaderComponent extends React.Component {
    componentDidMount() {
        
    }
    render(){

        return(
                <Header {...this.props}/>
            );
        }
}

const mapStateToProps=(state)=>{
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        userID: state.auth.userID,
    }
}




export default compose(
    connect(mapStateToProps,{logout})
)(HeaderComponent)
