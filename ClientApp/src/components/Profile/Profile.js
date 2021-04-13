import React, { Component } from 'react';
import './Profile.css';

export class Profile extends Component {
    static displayName = Profile.name;

    constructor(props) {
        super(props);
        this.state = { userInfo: null, userAccounts: null };

        this.FetchUserInfo = this.FetchUserInfo.bind(this);
        this.FetchUserAccounts = this.FetchUserAccounts.bind(this);
    }

    componentDidMount() {
        this.FetchUserInfo(); // get user Info
        this.FetchUserAccounts(); // get accounts
    }

    render() {
        var contents = null;

        if (this.state.userInfo === null || this.state.userAccounts === null) {
            contents = <p>Loading...</p>;
        }
        else
            contents = this.state.userInfo;

        return (contents);
    }


    async FetchUserInfo() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const reqURI = 'https://eus-safeaccounts-test.azurewebsites.net/users/' + this.props.location.state.id;

        const response = await fetch(reqURI, { credentials: 'include' }, requestOptions);
        if (response.ok) {
            const responseText = await response.text();
            this.setState({ userInfo: responseText })
        }
        this.render();
    }

    async FetchUserAccounts() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        };

        const reqURI = 'https://eus-safeaccounts-test.azurewebsites.net/users/' + this.props.location.state.id + '/accounts';

        const response = await fetch(reqURI, { credentials: 'include' }, requestOptions);
        if (response.ok) {
            const responseText = await response.text();
            this.setState({ userAccounts: responseText })
        }
        this.render();
    }
}
