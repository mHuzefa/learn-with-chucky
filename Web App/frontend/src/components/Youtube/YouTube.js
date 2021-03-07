import React, { Component } from "react";

export default class YouTube extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  authenticate = () => {
    return gapi.auth2
      .getAuthInstance()
      .signIn({ scope: "https://www.googleapis.com/auth/youtube.readonly" })
      .then(
        function () {
          console.log("Sign-in successful");
        },
        function (err) {
          console.error("Error signing in", err);
        }
      )
      .then(() => {
        gapi.client.setApiKey("AIzaSyA6d79aK9BKs_2pyOQxWpU_qrDvpg3CVBU");
        return gapi.client
          .load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
          .then(
            function () {
              console.log("GAPI client loaded for API");
            },
            function (err) {
              console.error("Error loading GAPI client for API", err);
            }
          );
      });
  };
  loadClient = () => {};
  // Make sure the client is loaded and sign-in is complete before calling this method.
  execute = () => {
    return gapi.client.youtube.playlists
      .list({
        part: ["snippet,contentDetails"],
        channelId: "UCBqUbOUyAsTB7Xc7xQAHWZA",
        maxResults: 25,
      })
      .then(
        function (response) {
          // Handle the results here (response.result has the parsed body).
          console.log("Response", response);
        },
        function (err) {
          console.error("Execute error", err);
        }
      );
  };
  componentDidMount() {
    gapi.load("client:auth2", () => {
      gapi.auth2.init({
        client_id:
          "965946483323-ih6ds04jjckmd5ijt0s3ggavu2llsbnt.apps.googleusercontent.com",
      });
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.authenticate}>Load</button>
        <button onClick={this.execute}>Execute</button>
      </div>
    );
  }
}
