import React, { Component } from 'react';
import './Login.css';

export class Login extends Component {
    static displayName = Login.name;

    constructor(props) {
        super(props);
        this.state = { rememberMe: false };
        this.OnChangeRemeberMe = this.OnChangeRemeberMe.bind(this);
    }

    render() {
        return (
            <div class="div_login">
                <form id="form_login" onSubmit={this.login}>
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
}
