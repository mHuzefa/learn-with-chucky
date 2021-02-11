import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      response: {},
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/users/${this.state.username}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ response: data });
        localStorage.setItem("user", JSON.stringify(data));
      })
      .then(() => {
        if (this.state.response.password === this.state.password) {
          console.log("You are logged in");
        }
        this.setState({
          username: "",
          password: "",
        });
      })
      .catch((error) => {
        console.log("Error => ", error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <label htmlFor='login-user'>Username</label>
            <input
              type='text'
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
              id='login-user'
            />
            <label htmlFor='login-password'>Password</label>
            <input
              type='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
              id='login-password'
            />
            <input type='submit' value='Login' />
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
