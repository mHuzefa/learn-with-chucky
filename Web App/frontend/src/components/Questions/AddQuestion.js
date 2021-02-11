import React, { Component } from "react";
import "./question.css";

class AddQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      answer: [],
      image: "",
      learn: "",
      subject: "",
      difficulty: "",
      user: localStorage.getItem("user"),
    };
  }
  onSubmit = (e) => {
    e.preventDefault();
    const user = JSON.parse(this.state.user);
    const userID = user._id;
    const questionData = {
      question: this.state.question,
      answer: this.state.answer,
      image: this.state.image,
      learn: this.state.learn,
      subject: this.state.subject,
      difficulty: this.state.difficulty,
      user: userID,
    };
    fetch("http://localhost:5000/api/questions/add_question", {
      method: "POST",
      body: JSON.stringify(questionData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
    this.setState({
      question: "",
      answer: "",
      image: "",
      learn: "",
      subject: "",
      difficulty: "",
      user: "",
    });
  };
  render() {
    return (
      <div className='container'>
        <h1>Qustions Form</h1>
        <form onSubmit={this.onSubmit} className='question-form'>
          <div>
            <div>
              <label htmlFor='question'>Write Your Question</label>
              <input
                type='text'
                id='question'
                required
                value={this.state.question}
                onChange={(e) => this.setState({ question: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='email'></label>
              <input
                type='email'
                value={this.state.email}
                id='email'
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='learn'>Correct Answer</label>
              <input
                type='text'
                value={this.state.learn}
                id='learn'
                required
                onChange={(e) => this.setState({ learn: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor='subject'>Subject of Question</label>
              <input
                type='text'
                value={this.state.subject}
                id='subject'
                onChange={(e) => this.setState({ subject: e.target.value })}
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor='difficulty'>Difficulty Level</label>
              <input
                type='text'
                value={this.state.difficulty}
                id='difficulty'
                onChange={(e) => this.setState({ difficulty: e.target.value })}
              />
            </div>
          </div>

          <input type='submit' value='Add Question' />
        </form>
      </div>
    );
  }
}
export default AddQuestion;
