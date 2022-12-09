import React from "react";
import  './style/Signin.css';

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
      <div className="sign-in-section">
        <form onSubmit={this.handleSubmit}>

          <h3>Sign In to<br />your account</h3>

          <p>Email</p>
          <input
            type="email"
            // className="form-control"
            onChange={(e) => this.setState({ email: e.target.value })}
          />

          <p>Password</p>
          <input
            type="password"
            // className="form-control"
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <div className="text-sm text-right">
            <a href="/" >Forgot password?</a>
          </div>

          <div className="">
            <button className="text-black" type="submit"> Sign In </button>
          </div>

        </form>
      </div>
    );
  }
}

export default Signin