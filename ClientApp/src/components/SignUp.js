import React, { Component } from 'react';

export class SignUp extends Component {
  static displayName = SignUp.name;

  constructor(props) {
      super(props);
      this.state = { signUpResults: "", loading: true };
  }

  componentDidMount() {
      this.populateSignUpResults();
  }

  static renderSignUpResults(results) {
    return (
        <p>{results}</p>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : SignUp.renderSignUpResults(this.state.signUpResults);

    return (
      <div>
        <h1 id="tabelLabel" >Sign Up</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

    async populateSignUpResults() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: '""'
        };

        const response = await fetch('users/sign-up', requestOptions);
        const data = await response.text();
        const spacer = 2 + 3;
        this.setState({ signUpResults: data, loading: false });
  }
}
