import React, {Component} from "react"
import {Link} from "react-router-dom"
import "./choice.css"
import { ArrowRightAlt } from "@material-ui/icons";
import LearnSvg from "./Learn.svg";
import QuizSvg from "./quiz.svg";

class Choice extends Component {
    constructor(props) {
        super(props);
        this.state = {
        quizCheck: false,
        learnCheck: false,
        };
    }
    
    render() {
        return (
        <div>
            <form className='options'>
            <h1>What do you want to do?</h1>
            <div className='buttons'>
                <div className='quiz'>
                <label className='choicee' htmlFor='learn'>
                    <input
                    value='quiz'
                    name='choicee'
                    type='radio'
                    id='quiz'
                    onChange={() =>
                        this.setState({ quizCheck: true, learnCheck: false })
                    }
                    checked={this.state.quizCheck}
                    tabIndex='1'
                    className='choicee quiz'
                    />
                    <img src={QuizSvg} alt='Quiz Icon' />
                    <p>Quiz</p>
                </label>
                </div>
                <div className='learn'>
                <label className='choicee' htmlFor='learn'>
                    <input
                    value='learn'
                    name='choicee'
                    type='radio'
                    id='learn'
                    onChange={() =>
                        this.setState({ quizCheck: false, learnCheck: true })
                    }
                    checked={this.state.learnCheck}
                    tabIndex='2'
                    className='choicee learn'
                    />
                    <img src={LearnSvg} alt='Learn Icon' />
                    <p>Learn</p>
                </label>
                </div>
            </div>
            <div className='call-to-action'>
                <Link to='/'>
                <button className='next' type='button' title='Back'>
                    <ArrowRightAlt
                    style={{ fontSize: 30, transform: "rotate(-180deg)" }}
                    />
                </button>
                </Link>
                <Link
                to={
                    this.state.quizCheck
                    ? "/choice/quiz"
                    : this.state.learnCheck
                    ? "/choice/learn"
                    : "/choice"
                }>
                <button className='next' type='button' title='Next'>
                    <ArrowRightAlt style={{ fontSize: 30 }} />
                </button>
                </Link>
            </div>
            </form>
        </div>
        );
    }
}
export default Choice