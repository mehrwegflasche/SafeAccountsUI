import React, { Component } from 'react';
import './SignUp.css';

export class SignUp extends Component {
    static displayName = SignUp.name;

    constructor(props) {
        super(props);
        this.state = { loading: true, data: null };
        this.SignUp = this.SignUp.bind(this); // bind sign up function
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
        if (!this.state.loading)
            return (
                <p>{this.state.data}</p>
                );
        return (
            <div class="div_signup">
                <form id="form_signup" onSubmit={this.SignUp}>
                    <div class="container">
                        <label id="lbl_signup_firstname" htmlFor="text_input_signup_firstname"><b>First Name</b></label><br />
                        <input class="text_input_signup_name" type="text" placeholder="" id="text_input_signup_firstname" size="35" required></input>
                        <br />
                        <label id="lbl_signup_lastname" htmlFor="text_input_signup_lastname"><b>Last Name</b></label><br />
                        <input class="text_input_signup_name" type="text" placeholder="" id="text_input_signup_lastname" size="35" required></input>
                        <br />
                        <label id="lbl_signup_email" htmlFor="text_input_signup_email"><b>Email</b></label><br/>
                        <input type="email" placeholder="" id="text_input_signup_email" size="35" required></input>
                        <br />
                        <label id="lbl_signup_pass" htmlFor="text_input_signup_pass"><b>Password</b></label><br/>
                        <input type="password" placeholder="" id="text_input_signup_pass" size="35" required></input>
                        <br />
                        <button id="btn_signup" type="submit">Sign Up</button>
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
    async SignUp(event) {
        var firstname = event.target.text_input_signup_firstname.value;
        var lastname = event.target.text_input_signup_lastname.value;
        var email = event.target.text_input_signup_email.value;
        var password = event.target.text_input_signup_pass.value;

        //this.setState({ data: event.target.text_input_signup_lastname.value, loading: false });
        //return;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '"{\\"firstname\\":\\"' + firstname + '\\", \\"lastname\\":\\"' + lastname + '\\", \\"email\\":\\"' + email + '\\", \\"password\\":\\"' + password + '\\"}"'
        };

        const response = await fetch('users/signup', requestOptions);
        const responseText = await response.text();
        this.setState({ data: responseText, loading: false });
        var spaces = 5 + 3;
  }
}
