import React, { Component } from "react";

class StudentAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      teacher: JSON.parse(localStorage.getItem("googleId")),
      gender: "male",
      GradeID: "",
      grades: {},
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const stdData = {
      username: this.state.username,
      password: this.state.password,
      teacher: this.state.teacher,
      gender: this.state.gender,
      GradeID: this.state.GradeID,
      
    };
    fetch("http://localhost:5000/api/students/create_student_account", {
      method: "POST",
      body: JSON.stringify(stdData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.error(err));
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/grades")
      .then((res) => {
        const data = res.json();
        return data;
      })
      .then((data) => {
        this.setState({
          grades: data,
        });
      });
    fetch(`http://localhost:5000/api/users/${this.state.teacher}`)
      .then((res) => {
        const teacher = res.json();
        return teacher;
      })
      .then((data) => {
        console.log(data);
        this.setState({ teacher: data._id });
      });
  }
  render() {
    return (
      <div>
        <form className='form' action='' onSubmit={this.onSubmit}>
          <div>
            <label htmlFor='teacherID'>Teacher ID</label>
            <input
              type='text'
              id='teacherID'
              value={this.state.teacher}
              onChange={(e) => this.setState({ teacher: e.target.value })}
              disabled
            />
          </div>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              name=''
              id='username'
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name=''
              id='password'
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor='GradeID'>Grade ID</label>
            <select
              name=''
              id='GradeID'
              onChange={(e) => {
                e.target.value !== "..." &&
                  this.setState({ GradeID: e.target.value });
              }}>
              <option>...</option>
              {Object.keys(this.state.grades).map((key) => {
                return (
                  <option
                    key={this.state.grades[key].GradeID}
                    value={`${this.state.grades[key].gradeName}-${this.state.grades[key].GradeID}`}>
                    {this.state.grades[key].gradeName} -
                    {this.state.grades[key].GradeID}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label htmlFor='gender'>Gender</label>
            <select
              value={this.state.gender}
              name=''
              id='gender'
              onChange={(e) => {
                this.setState({ gender: e.target.value });
              }}>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>
          <div>
            <input type='submit' value='Create Account' id='' />
          </div>
        </form>
      </div>
    );
  }
}
export default StudentAccount;
