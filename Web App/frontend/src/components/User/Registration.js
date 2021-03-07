import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleInfo: {},
    };
  }
  onSuccess = (res) => {
    this.setState({
      googleInfo: res.profileObj,
      name: res.profileObj.name,
      email: res.profileObj.email,

      imageUrl: res.profileObj.imageUrl,
      password: "",
      googleID: res.profileObj.googleId,
    });
    console.log(res.profileObj);
    localStorage.clear();
    localStorage.setItem("teacherData", JSON.stringify(this.state.googleInfo));
    localStorage.setItem("googleId", JSON.stringify(this.state.googleID));
  };
  onFailure = () => {
    console.log("Error Ocurred while signing in");
  };
  onLogout = () => {
    console.log("Logout SUccessfully");
  };
  saveToDatabase = (e) => {
    e.preventDefault();
    let userData = {
      name: this.state.name,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      password: this.state.password,
      googleID: this.state.googleID,
    };
    fetch("http://localhost:5000/api/users/add_user", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        fetch(`http://localhost:5000/api/users/${this.state.googleID}`)
          .then((res) => {
            const data = res.json();
            return data;
          })
          .then((data) => {
            console.log(data);
          });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const clientID =
      "965946483323-ih6ds04jjckmd5ijt0s3ggavu2llsbnt.apps.googleusercontent.com";
    const LOCAL = "http://localhost:3000";

    return (
      <div>
        <div className='account'>
          <div className='account__setup'>
            <img className='account__img' src='/' alt='Decoration' />
            <h1 className='account__heading'>Sign in with Parent Account</h1>
            <p className='account__paragraph'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              excepturi dolorem ad, odit quo asperiores dolorum tempore. Quam
              nam asperiores in ipsa excepturi architecto recusandae. Qui
              ducimus veritatis aspernatur recusandae.
            </p>
            <GoogleLogin
              clientId={clientID}
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "100px" }}
              isSignedIn={true}
              render={(prop) => {
                return (
                  <button className='account__button' onClick={prop.onClick}>
                    Sign In
                  </button>
                );
              }}
            />
          </div>
          <GoogleLogout
            clientId={clientID}
            buttonText='Logout'
            onLogoutSuccess={this.onLogout}></GoogleLogout>
          {this.state.googleInfo?.email && (
            <div>
              <input
                className='account__password'
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type='password'
              />
              <button
                className='btn account__create'
                onClick={this.saveToDatabase}>
                Create Account
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Registration;
