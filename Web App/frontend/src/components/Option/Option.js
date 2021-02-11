import { ArrowRightAlt } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import EnglishSvg from "./english.svg";
import MathSvg from "./maths.svg";
import "./Option.css";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mathCheck: false,
      englishCheck: false,
    };
  }

  render() {
    return (
      <div>
        <form className='options'>
          <h1>Start Learning Now!</h1>
          <div className='buttons'>
            <div className='math'>
              <label className='subject' htmlFor='math'>
                <input
                  value='math'
                  name='subject'
                  type='radio'
                  id='math'
                  onChange={() =>
                    this.setState({ mathCheck: true, englishCheck: false })
                  }
                  checked={this.state.mathCheck}
                  tabIndex='1'
                  className='subject math'
                />
                <img src={MathSvg} alt='Math Icon' />
                <p>Mathematics</p>
              </label>
            </div>
            <div className='english'>
              <label className='subject' htmlFor='english'>
                <input
                  value='english'
                  name='subject'
                  type='radio'
                  id='english'
                  onChange={() =>
                    this.setState({ mathCheck: false, englishCheck: true })
                  }
                  checked={this.state.englishCheck}
                  tabIndex='2'
                  className='subject english'
                />
                <img src={EnglishSvg} alt='English Icon' />
                <p>English</p>
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
                this.state.mathCheck
                  ? "/subjects/mathematics"
                  : this.state.englishCheck
                  ? "/subjects/english"
                  : "/subjects"
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
export default Option;
