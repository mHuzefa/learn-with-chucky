import React, { Component } from "react";
import TeacherSvg from './teacher.svg'
import "./teacher.css"
import { Link } from "react-router-dom";


class generateReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            userData: [null],
            resp: [null],
        };
    }
    onSubmit = (e) => {
        e.preventDefault();
    fetch(`http://localhost:5000/api/students/${this.state.username}`)
      .then((res) => {
        const users = res.json();
        return users;
      })
      .then((users) => {
        const user = users.filter(
          (user) =>
            user.username === this.state.username
        );
        this.setState({ userData: user });
      });

        //fetch data of student from given username and then send this data to API and output the response accordingly
        fetch("https://logisticapi.herokuapp.com/predict", {
            method:"POST",
            body:JSON.stringify(this.state.userData),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*"
              },      
        })
        .then(response => response.json()) 
        .then(json => console.log(json));
        
    }
    render() {
        return(
            <div>
                <div className="header">
            <img className="teacherIMG" style={{width:"7rem"}} src={TeacherSvg} alt='Teacher Icon' /> 
            <a>Teacher's dashboard</a>
            <div className="header-right">
                <button className="button-a">Logout</button>
            </div>
                </div>
            
            <form className='form' action='' onSubmit={this.onSubmit}>
          <input
            type='text'
            placeholder='Username'
            className="form__std--username"
            value={this.state.username}
            required
            onChange={(e) => this.setState({ username: e.target.value })}
          />
          <input type='submit'
                 value='Generate'
                 className="form__std--submit"
                 id='generate' />
          </form>
            </div>
        );
    }
}

export default generateReport