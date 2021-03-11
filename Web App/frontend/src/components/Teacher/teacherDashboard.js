import React, { Component } from "react";
import TeacherSvg from './teacher.svg'
import "./teacher.css"
import { Link } from "react-router-dom";

class teacherDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        inputvalue: "",
        };
    }
    
    render() {
        return (
        <div className="setup">
            <div className="header">
            <img className="teacherIMG" style={{width:"7rem"}} src={TeacherSvg} alt='Teacher Icon' /> 
            <a>Teacher's dashboard</a>
            <div className="header-right">
                <button className="button-a">Logout</button>
            </div>
            </div>
            <div className="body">
                <h1 className="head">Welcome back!</h1>

                <form className="form">
                    <Link to="/student/register"><button className="button-a">Add Student</button></Link>
                    <Link to="/add_question"><button className="button-a">Add Question</button></Link>
                    <Link to="/add_grade"><button className="button-a">Add Grade</button></Link>
                    <Link to="/students"><button className="button-b">Edit/Delete Student</button></Link>
                    <Link to="/generateReport"><button className="button-a">Generate Report</button></Link>
                </form>
            </div>
           
           <div>

           </div>
        </div>
        );
    }
}
export default teacherDashboard