import React, { Component } from 'react';
import './Profile.css';

export class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);

    }

    componentDidMount() {
    }

    render() {
        return (<p>{this.props.location.state.id}</p>)
    }


    async FetchUserInfo() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const response = await fetch('https://eus-safeaccounts-test.azurewebsites.net/users/login', requestOptions);
        const responseText = await response.text();
        this.setState({ data: responseText, loginSuccessful: true })
        this.timeout = setTimeout(() => this.setState({ redirect: true }), 5000); // set redirect to true after 5 seconds
    }
}
