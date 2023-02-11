import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signInThunk } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Input } from '../common/FormsControls/FormsControls';
import styles from './Login.module.css';
import { Redirect } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.general}>
            <div className={styles.inner}>
                <div className={styles.logo}><h1 className={styles.logo_left}>Developers</h1><h1 className={styles.logo_right}>NETWORK</h1></div>
               
                <button className={styles.button}>Log in like guest</button>
                <div>
                    <a className={styles.register} target="_blank" rel="noopener noreferrer" href="https://social-network.samuraijs.com/login">If you have your account</a>
                </div>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({ form: 'email' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.signInThunk("markelovtrofim1337@gmail.com", "123", true);

    }

    if (props.isAuth) {
        return <Redirect to={"/profile/" + props.id} />
    }

    return <div>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
};

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        id: state.auth.id
    }
}


const LoginContainer = connect(mapStateToProps, { signInThunk })(Login)

export default LoginContainer;
