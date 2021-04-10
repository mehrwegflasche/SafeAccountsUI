import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
        this.state = { loginSuccessful: false, data: null, rememberMe: false };
        this.OnChangeRemeberMe = this.OnChangeRemeberMe.bind(this);
        this.Login = this.Login.bind(this);
    }

    render() {
        if (this.state.redirect)
            return (<Redirect to="/profile" />);

        if (this.state.loginSuccessful)
            return (<p>{this.state.data}</p>);

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
                            <input type="checkbox" defaultChecked="unchecked" onClick={this.OnChangeRemeberMe} id="input_chk_login_remember"></input>
                            <label id="lbl-login-remember">Remember me</label>
                            <button id="btn_login" type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }

    OnChangeRemeberMe() {

    }

    async Login(event) {
        event.preventDefault(); //prevent page refresh
        var email = event.target.text_input_login_email.value;
        var password = event.target.text_input_login_password.value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '"{\\"email\\":\\"' + email + '\\", \\"password\\":\\"' + password + '\\"}"'
        };

        const response = await fetch('https://eus-safeaccounts-test.azurewebsites.net/users/login', requestOptions);
        const responseText = await response.text();
        this.setState({ data: responseText, loginSuccessful: true })
        this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000); // set redirect to true after 5 seconds
    }
}
