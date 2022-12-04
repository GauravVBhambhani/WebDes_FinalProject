import React from "react";
import './Signin.css';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const { email, password } = this.state;
        console.log(email, password);

        fetch("http://localhost:3001/user/signin", {
            method: "POST",
            crossDomain: true,

            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },

            body: JSON.stringify({
                email,
                password,
            }),

        }).then((res) => res.json()).then((data) => {
            console.log(data, "userRegister");

            if (data.status === "success") {
                alert("login successful");
                window.localStorage.setItem("token", data.data);
                window.location.href = './account';
                // window.location.href = <Account/>;
            }

        });
    }

    render() {
        return (
            <div>

                <div class="absolute top-0 right-0 flex px-5 pt-5"><p className="px-2 pt-3 text-sm"> New to Dear Diary? </p><button className="text-black bg-gray-300 rounded font-semibold w-20 h-10 text-sm hover:bg-gray-400" type="submit">Sign Up</button></div>

                <div className="sign-in-section font-medium">

                    <form onSubmit={this.handleSubmit}>

                        <h3>Sign in to<br />your account</h3>

                        <p>Email</p>
                        <input
                            type="email"
                            className="form-control-2"
                            onChange={(e) => this.setState({ email: e.target.value })}
                        />

                        <p>Password</p>
                        <input
                            type="password"
                            className="form-control-2"
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />

                        <div className="text-sm text-right">
                        <a href="/" >Forgot password?</a>
                    </div>

                        <div className="pt-5">
                            <button className="text-white bg-pink-500 w-40 h-10 rounded text-sm" type="submit"> Sign in </button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default Signin