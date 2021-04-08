import React, { Component } from 'react';

export class Login extends Component {
  static displayName = Login.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementLogin = this.incrementLogin.bind(this);
  }

  incrementLogin() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
    }

    static RememberMeChanged(event) {
        this.setState({ rememberMe: !this.state.rememberMe });
    }

  render() {
    return (
        <div>
            <div class="div-login-buttons">
                <label><input type="checkbox" defaultChecked={this.state.rememberMe} id="chk-input-remember" onChange={this.state.RememberMeChanged}></input> Remember me</label>
                <button id="btn-login" type="submit">Sign Up</button>
            </div>
        </div>
    );
  }
}
