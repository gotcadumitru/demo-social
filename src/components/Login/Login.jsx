import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { login, logout } from '../../redux/auth-reducer';
import { maxLengthCreator, required } from '../../validators/validators';
import FormCreator from '../FormControls/FormControls';
import s from './Login.module.css';
const maxLength100 = maxLengthCreator(100);
const Input = FormCreator('input');

const LoginForm = (props)=>{
    return <form onSubmit={props.handleSubmit}>
    <div>
        <Field name={"login"} placeholder={"Login"} component={Input} validate={[required,maxLength100]}  />
    </div>
    <div>
        <Field name={"password"} placeholder={"Password"} component={Input}validate={[required,maxLength100]} />
    </div>
    <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} /> Remeber me
    </div>
    {props.error && <div className={s.formError}>{props.error}</div>}
    <div>
     <button  >Login</button>
    </div>
</form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

function Login(props) {
    const onSubmit = (formData) =>{
        props.login(formData.login,formData.password, formData.rememberMe)
    }
    if(props.isAuth){
        return (
            <Redirect to={'/profile'}/>
        )
    }
    return (
        <div className={s.content}>
            <h1>Login form</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
const mapStateToProps =(state)=>{
    return {
        
        isAuth: state.auth.isAuth,
    }
}
export default connect(mapStateToProps,{login,logout})(Login) ;