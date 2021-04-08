import React, { Component } from 'react';
import './SignUp.css';

export class SignUp extends Component {
    static displayName = SignUp.name;
    rememberMe = false;

    constructor(props) {
        super(props);
        //this.state = { signUpResults: "", loading: true };
    }

    componentDidMount() {
        //this.populateSignUpResults();
    }

    //static renderSignUpResults(results) {
    //    return (
    //        <p>{results}</p>
    //    );
    //}

    render() {
        return (
            <div class="div-signup">
                <form onSubmit={this.SignUp}>
                    <div class="container">
                        <label id="lbl-signup-name" htmlFor="text-input-signup-firstname"><b>First Name</b></label><br/>
                        <input class="text-input-signup" type="text" placeholder="Enter First Name" id="text-input-signup-firstname" size="30" required></input>
                        <br />

                        <label id="lbl-signup-pass" htmlFor="text-input-signup-pass"><b>Password</b></label><br/>
                        <input class="text-input-signup" type="password" placeholder="Enter Password" id="text-input-signup-pass" size="30" required></input>
                        <br />
                        <button id="btn-signup" type="submit">Sign Up</button>
                    </div>
                </form>
            </div> 
        );
    }

    //render() {
    //    let contents = this.state.loading
    //        ? <p><em>Loading...</em></p>
    //        : SignUp.renderSignUpResults(this.state.signUpResults);

    //    return (
    //        <div>
    //        <h1 id="tabelLabel" >Sign Up</h1>
    //        <p>This component demonstrates fetching data from the server.</p>
    //        {contents}
    //        </div>
    //    );
    //}

    //this is the function where we will send sign up stuff to our controller our controller
    async SignUp() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '""'
        };

        const response = await fetch('users/signup', requestOptions);
        const data = await response.text();
        this.setState({ signUpResults: data, loading: false });
  }
}
