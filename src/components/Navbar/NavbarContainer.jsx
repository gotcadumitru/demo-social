import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Navbar from './Navbar';


let mapStateToProps = (state) =>{
  return {
    navbarComponent: state.navbarComponent,
  }
}
let mapDispatchToProps = (dispatch) =>{
  return {
      
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
)(Navbar);