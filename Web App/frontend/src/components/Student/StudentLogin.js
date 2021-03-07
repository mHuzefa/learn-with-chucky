import React, { Component } from "react";
import "./css/studentLogin.css";
import a0 from "./svg/boat.svg";
import a1 from "./svg/bunny.svg";
import a2 from "./svg/car.svg";
import a3 from "./svg/castle.svg";
import a4 from "./svg/cloud.svg";
import a5 from "./svg/curiosity.svg";
import a6 from "./svg/dice.svg";
import a7 from "./svg/family.svg";
import a8 from "./svg/firework.svg";
import a9 from "./svg/hand.svg";
import a10 from "./svg/heart.svg";
import a11 from "./svg/imagination.svg";
import a12 from "./svg/joyful.svg";
import a13 from "./svg/lolipop.svg";
import a14 from "./svg/notebook.svg";
import a15 from "./svg/paint.svg";
import a16 from "./svg/puzzle.svg";
import a17 from "./svg/questionMark.svg";
import a18 from "./svg/rocket.svg";
import a19 from "./svg/saturn.svg";
import a20 from "./svg/stationary.svg";
import a21 from "./svg/sun.svg";
import a22 from "./svg/zigzag.svg";
import a23 from "./svg/0.svg";


class Svgs extends Component {
  render() {
    return (
      <div>
        <div>
          {Object.keys(this.state.imageArray).map((key, i) => {
            return (
              <img
                style={{
                  width: "6rem",
                  position: "absolute",
                  transform: `translate(${this.state.x * (i * 50)}px, ${
                    this.state.y * (i * 20)
                  }px) rotate(${this.state.rotate * 25}deg)`,
                }}
                src={this.state.imageArray[key]}
              />
            );
          })}
        </div>
      </div>
    )
  }
}

class StudentLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userData: [null],
      x: 0,
      y: 0,
      rotate: 0,
      imageArray: {
        0: a0,
        1: a1,
        2: a2,
        3: a3,
        4: a4,
        5: a5,
        6: a6,
        7: a7,
        8: a8,
        9: a9,
        10: a10,
        11: a11,
        12: a12,
        13: a13,
        14: a14,
        15: a15,
        16: a16,
        17: a17,
        18: a18,
        19: a19,
        20: a20,
        21: a21,
        22: a22,
        23: a23,
      },
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/students")
      .then((res) => {
        const users = res.json();
        return users;
      })
      .then((users) => {
        const user = users.filter(
          (user) =>
            user.username === this.state.username &&
            user.password === this.state.password
        );
        this.setState({ userData: user });
      });
  };
  componentDidMount() {
    this.setState({
      x: Math.round(Math.random() + 1),
      y: Math.round(Math.random() + 1),
      rotate: Math.random(),
    });
  }
  render() {
    console.log(this.state.x, this.state.y);
    return (
      <div className='container'>
        <
        <form className='form' action='' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Username'
            value={this.state.username}
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type='password'
            placeholder='Password'
            value={this.state.password}
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input type='submit' value='Login' id='login' />
        </form>
        {this.state.userData.length === 0 ? (
          <p>Username or Password is Incorrect</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default StudentLogin;
