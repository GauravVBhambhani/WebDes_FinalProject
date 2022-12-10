import React from "react";

class UserAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userAccount: "",
        };
    }

    componentDidMount() {
        fetch("http://localhost:3001/userAccount", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token")
            }),
        }).then((res) => res.json())
            .then((data) => {
                console.log(data, "userAccount");
                this.setState({userAccount: data.data})
            });
    }

    render() {
        return (
            <div>
                <h1>Welcome,</h1>
                <p>Email: <b>{this.state.userAccount.email}</b></p>
            </div>
        );
    }

}

export default UserAccount