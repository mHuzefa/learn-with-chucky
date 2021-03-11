import React, { Component } from "react";
import "./registration.css"
import Teacher from './teacher.svg'
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
          <div className='account__setup'>
            <img  style={{width:"6rem"}} className='account__img' src={Teacher} alt="Teacher Svg" />
            <h1 className='account__heading'>Register as Teacher</h1>
            <GoogleLogin
              clientId={clientID}
              onSuccess={this.onSuccess}
              onFailure={this.onFailure}
              cookiePolicy={"single_host_origin"}
              style={{ marginTop: "-00px" }}
              isSignedIn={true}
              render={(prop) => {
                return (
                  <form className='form'>
                       <button className='account__button' onClick={prop.onClick}>
                    Sign In with Google
                  </button>

                  </form>
                 
                  
                );
              }}
            />
          </div>
          {/* <GoogleLogout
            clientId={clientID}
            buttonText='Logout'
            onLogoutSuccess={this.onLogout}></GoogleLogout> */}
          {this.state.googleInfo?.email && (
            <div>
            <form className="form-x">
              <p>
              write a password and create your account <br />
              </p>
              <label className="pass">Password: </label>
              <input
                className='account__password'
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
                type='password'
              />
              <br />
              
              <button
                className='account__button1'
                onClick={this.saveToDatabase}>
                Create Account
              </button>
              <br />
            </form>
            </div>
          )}
        </div>
    );
  }
}
export default Registration;
