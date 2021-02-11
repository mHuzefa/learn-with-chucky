import React, { Component } from "react";
import "./registration.css";

class UserAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      isTeacher: false,
      childName: "",
      gender: "",
      gradeID: "",
      confirmPassword: "",
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const UserData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      isTeacher: this.state.isTeacher,
      childName: this.state.childName,
      gender: this.state.gender,
      gradeID: this.state.gradeID,
    };
    fetch("http://localhost:5000/api/users/add_user", {
      method: "POST",
      body: JSON.stringify(UserData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.setState({
      name: "",
      email: "",
      childName: "",
      password: "",
      isTeacher: false,
      gradeID: "",
      gender: "",
    });
  };
  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        <form onSubmit={this.onSubmit} className='registration'>
          <div>
            <div>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                id='username'
                required
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='email'>Email</label>
              <input
                type='email'
                value={this.state.email}
                id='email'
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='child'>Child Name</label>
              <input
                type='text'
                value={this.state.childName}
                required
                onChange={(e) => this.setState({ childName: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='gender'>Child Gender</label>
              <input
                type='text'
                value={this.state.gender}
                id='gender'
                onChange={(e) => this.setState({ gender: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor='grade'>In which grade child is</label>
              <input
                type='text'
                value={this.state.gradeID}
                id='grade'
                onChange={(e) => this.setState({ gradeID: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='teacher'>Are you Guardian?</label>
              <input
                type='checkbox'
                checked={this.state.isTeacher}
                id='teacher'
                onChange={(e) => {
                  if (e.target.checked) {
                    this.setState({ isTeacher: true });
                  } else {
                    this.setState({ isTeacher: false });
                  }
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                value={this.state.password}
                id='password'
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='cpassword'>Confirm Password</label>
              <input
                type='password'
                value={this.state.confirmPassword}
                id='password'
                required
                onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })
                }
              />
            </div>
          </div>

          <input type='submit' value='Register' />
        </form>
      </div>
    );
  }
}
export default UserAdd;
