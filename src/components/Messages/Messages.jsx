import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../validators/validators';
import FormCreator from '../FormControls/FormControls';
import Message from './Message/Message';
import s from './Messages.module.css';
import Persons from './Persons/persons';
const maxLength10 = maxLengthCreator(10);
const Textarea = FormCreator('textarea');
const MessageForm = (props)=>{
    return <form onSubmit= {props.handleSubmit}>
    <Field 
    name={"message"}
    component={Textarea}
    validate={[required,maxLength10]}
    cols="70" 
        rows="3"/>
    <button >Send Messaage</button>
</form>
}

function Messages(props) {
    const addMess = (formData) =>{
        props.addMessage(formData.message)
    }
    let users = props.usersArray.map( user => {
        return <Persons user={user}/>
    });
    let messages = props.usersArray.map( user => {
        return user.messages.map( message =>{
            return <Message 
                        userImage={user.image} 
                        message={message}/>
        } );
    });
    return (
        <div className={s.mess}>
            <div className={s.personList}>
                <ul>
                {users}
                </ul>
            </div>
            <div className={s.dialogs}>
                {messages[0]}
                <MessageReduxForm onSubmit={addMess}/>
            </div>

        </div>
    );
}
const MessageReduxForm = reduxForm({
    form: "message",
})(MessageForm)


export default Messages;