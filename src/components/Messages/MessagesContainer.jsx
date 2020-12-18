import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage} from '../../redux/dialogs-reducer';
import Messages from './Messages';

let mapStateToProps = (state) =>{
    return {
        usersArray: state.dialogsPage.usersArray,
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addMessage : (messageText) => {
            dispatch(addMessage(messageText));
        },
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
    )(Messages);