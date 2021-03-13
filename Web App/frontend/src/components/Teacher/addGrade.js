import React, { Component } from "react";

class addGrade extends Component{
    constructor(props) {
        super(props);
        this.state = {
          GradeID: "",
          gradeName: "",
          
        };
      }
      onSubmit = (e) => {
        e.preventDefault();
        const stdData = {
            gradeName: this.state.gradeName,
            GradeID: this.state.GradeID,
        };
        fetch("http://localhost:5000/api/grades/add_grade", {
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
      render() {
        return (
          <div>
            <form className='form' action='' onSubmit={this.onSubmit}>
              <div>
                <label htmlFor='GradeID'>Grade ID</label>
                <input
                  type='text'
                  id='GradeID'
                  value={this.state.GradeID}
                  onChange={(e) => this.setState({ GradeID: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor='gradeName'>Grade Name</label>
                <input
                  type='text'
                  name=''
                  id='gradeName'
                  value={this.state.gradeName}
                  onChange={(e) => this.setState({ gradeName: e.target.value })}
                />
                  </div>
                  <div>
            <input type='submit' value='Create Grade' id='' />
          </div>
        </form>
      </div>
    );
  }
}

export default addGrade