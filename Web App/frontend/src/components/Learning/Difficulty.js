import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./difficulty.css"
class Difficulty extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        return(
            <div className="difficulty-container">
                <div className="difficulty">
                <Link to="/easy"><p>Easy</p></Link>
                <Link to="/medium"><p>medium</p></Link>
                <Link to="/hard"><p>Hard</p></Link>
            </div>
        </div>
            
        )
    }
}
export default Difficulty