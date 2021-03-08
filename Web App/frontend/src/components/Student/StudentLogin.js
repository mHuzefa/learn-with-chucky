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
class SVG extends Component {
  shouldComponentUpdate = () => false
  render() {
    return (
        <div className="img-container">  
          {Object.keys(this.props.imageArray).map(key =>{
            return <img key={key} style={{overflow:"hidden",width:"6rem", position:"absolute", transform:`translate(${Math.random() *1360}px, ${Math.random()* 720}px)` }} src={this.props.imageArray[key]} />
          })}
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
      error: "0px",
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
  errorTimeout = () =>{
    setTimeout(()=>{
      this.setState({error:"-200px"})
    },2000)

  }
  render() {
    return (

      <div className='container'>
        <SVG imageArray={this.state.imageArray} />
        <h1 className="std__login">Student Login</h1>
        <form className='form' action='' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Username'
            className="form__std--username"
            
            value={this.state.username}
            required
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input
            type='password'
            placeholder='Password'
            className="form__std--password"
            value={this.state.password}
            required
            onChange={(e) => this.setState({ password: e.target.value })}
          />

          <input type='submit'
                 value='Login'
                 className="form__std--submit"
                 id='login' />
          <p className="teacher__contact">If you don't have account already. Contact your teacher</p>

        </form>
        {this.state.userData.length === 0 ? (
          <p style={{transform: `translateY${this.state.error}`}}  className="std__validate">Username or Password is Incorrect</p>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default StudentLogin;
