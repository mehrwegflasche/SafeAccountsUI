import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
        this.state = { loginSuccessful: false, id: null, rememberMe: false };

        // functions
        this.OnChangeRemeberMe = this.OnChangeRemeberMe.bind(this);
        this.Login = this.Login.bind(this);
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect to={{
                pathname: '/profile',
                state: { id: this.state.id }
            }} />);
        }

        if (this.state.loginSuccessful)
            return (<p id="p_login_successful">Login successful... Redirecting Page</p>);

        return (
            <div class="div_login">
                <form id="form_login" onSubmit={this.Login}>
                    <div class="container">
                        <label id="lbl_login_email" htmlFor="text_input_login_email"><b>Email</b></label><br />
                        <input class="text_input_login_email" type="text" placeholder="" id="text_input_login_email" size="35" required></input>
                        <br />
                        <label id="lbl_login_password" htmlFor="text_input_login_password"><b>Password</b></label><br />
                        <input class="text_input_login_password" type="password" placeholder="" id="text_input_login_password" size="35" required></input>
                        <br />
                        <div class="div_login_buttons">
                            <input type="checkbox" defaultChecked={false} onClick={this.OnChangeRemeberMe} id="input_chk_login_remember"></input>
                            <label id="lbl-login-remember">Remember me</label>
                            <button id="btn_login" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    OnChangeRemeberMe() {
        this.setState({ rememberMe: !this.state.rememberMe })
    }

    async Login(event) {
        event.preventDefault(); //prevent page refresh
        var email = event.target.text_input_login_email.value;
        var password = event.target.text_input_login_password.value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '"{\\"email\\":\\"' + email + '\\", \\"password\\":\\"' + password + '\\"}"',
            credentials: 'include'
        };

        //make request and get response
        const response = await fetch('https://eus-safeaccounts-test.azurewebsites.net/users/login', requestOptions);
        if (response.ok) {
            const responseText = await response.text();
            var obj = JSON.parse(responseText);

            // we need to store this id in a cookie for us to use
            this.setState({ id: obj.id, loginSuccessful: true })
            this.timeout = setTimeout(() => this.setState({ redirect: true }), 3000); // set redirect to true after some seconds
        }

        this.render();
    }
}
