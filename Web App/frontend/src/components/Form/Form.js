import { ArrowRightAlt, Mic } from "@material-ui/icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import SpeechRecognition from "react-speech-recognition";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      stopper: true,
      paraHidder: true,
      subjectLink: "/subjects",
    };
  }

  onInputChange = (e) => {
    return this.setState({ inputValue: e.target.value });
  };
  onParagraphClicked = (e) => {
    this.setState({ inputValue: e.target.textContent, paraHidder: false });
  };
  subjectPage = (e) => {};

  render() {
    return (
      <div>
        <form className='form'>
          <h1>What is your Name?</h1>
          <input
            type='text'
            name='name'
            className='name'
            value={this.state.inputValue}
            onChange={(e) => {
              return this.setState({ inputValue: e.target.value });
            }}
            placeholder='Enter Your Name...'
          />
          <div className='buttons'>
            <button
              onClick={(e) => {
                if (this.state.stopper) {
                  SpeechRecognition.startListening();
                  this.setState({ stopper: false });
                } else {
                  SpeechRecognition.abortListening();
                  this.setState({ stopper: true });
                }
              }}
              className='speak'
              type='button'
              title='Speak'>
              <Mic style={{ fontSize: 30 }} />
            </button>

            <Link
              to={this.state.inputValue !== "" ? this.state.subjectLink : "/"}>
              <button
                onClick={this.subjectPage}
                className='next'
                type='button'
                title='Next'>
                <ArrowRightAlt style={{ fontSize: 30 }} />
              </button>
            </Link>
          </div>
          {this.state.paraHidder ? (
            <div className='spoken-words'>
              {this.props.transcript ? <span>Did You mean? </span> : ""}
              <p onClick={this.onParagraphClicked}>{this.props.transcript}</p>
            </div>
          ) : (
            ""
          )}
        </form>
      </div>
    );
  }
}
export default Form;
