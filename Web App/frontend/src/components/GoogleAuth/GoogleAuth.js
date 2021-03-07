import React, { Component } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
class GoogleAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleInfo: "",
    };
  }
  onSuccess = (res) => {
    console.log(res.profileObj);
    this.setState({
      googleInfo: res.profileObj,
    });
  };
  onFailure = () => {
    console.log("Error Ocurred while signing in");
  };
  onLogout = () => {
    console.log("Logout SUccessfully");
  };
  render() {
    const clientID =
      "965946483323-ih6ds04jjckmd5ijt0s3ggavu2llsbnt.apps.googleusercontent.com";
    return (
      <div>
        <GoogleLogin
          clientId={clientID}
          buttonText='Login'
          onSuccess={this.onSuccess}
          onFailure={this.onFailure}
          cookiePolicy={"single_host_origin"}
          style={{ marginTop: "100px" }}
          isSignedIn={true}
        />
        <GoogleLogout
          clientId={clientID}
          buttonText='Logout'
          onLogoutSuccess={this.onLogout}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}
export default GoogleAuth;
