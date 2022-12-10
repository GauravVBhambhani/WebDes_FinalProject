import React from "react";
import './Signup.css';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { firstName, lastName, email, password } = this.state;
        console.log(firstName, lastName, email, password);

        fetch("http://localhost:3001/user/signup", {
            method: "POST",
            crossDomain: true,

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
            }),

        }).then((res) => res.json()).then((data) => {
            console.log(data, "userRegister");

            if (data.status === "success") {
                alert("Signup successful");
                window.localStorage.setItem("token", data.data);
                window.location.href = './dashboard';
                // window.location.href = <Account/>;
            }
        });
    }

    render() {
        return (
            <div>

                <div className="absolute top-0 right-0 flex px-5 pt-5"><p className="px-2 pt-3 text-sm">Already a user?</p><button className="text-black bg-gray-300 rounded font-semibold w-20 h-10 text-sm hover:bg-gray-400" type="submit"> Sign In</button></div>

                <div className="sign-up-section font-medium text-lg">

                    <form onSubmit={this.handleSubmit}>

                        <h1 className="font-semibold text-3xl">Create your<br />new account</h1>

                        <div className="name-inputs">
                            <div>
                                <p>First Name</p>
                                <input
                                    type="firstName"
                                    className="form-control-1 bg-gray-200"
                                    onChange={(e) => this.setState({ fname: e.target.value })}
                                />
                            </div>

                            <div className="last-name-div">
                                <p>Last Name</p>
                                <input
                                    type="lastName"
                                    className="form-control-1 bg-gray-200"
                                    onChange={(e) => this.setState({ lname: e.target.value })}
                                />
                            </div>
                        </div>

                        <p>Email</p>
                        <input
                            type="email"
                            className="form-control-2 bg-gray-200"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />

                        <p>Password</p>
                        <input
                            type="password"
                            className="form-control-2 bg-gray-200"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />

                        <div className="pt-5">
                            <button className="text-white bg-pink-500 w-60 h-10 rounded text-sm" type="submit"> Create Account </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signup