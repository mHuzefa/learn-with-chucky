import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.module.css";
import Form from "./components/Form/Form";
import GoogleAuth from "./components/GoogleAuth/GoogleAuth";
import Option from "./components/Option/Option";
import AddQuestion from "./components/Questions/AddQuestion";
import StudentAccount from "./components/Student/StudentAccount";
import StudentLogin from "./components/Student/StudentLogin";
import Registration from "./components/User/Registration";
import YouTube from "./components/Youtube/YouTube";
import Difficulty from "./components/Learning/Difficulty"
import Choice from "./components/Choice/choice"
function myHook(Component) {
  return function Form(props) {
    const speechRecognitionHook = useSpeechRecognition();
    return (
      <Component {...props} speechRecognitionHook={speechRecognitionHook} />
    );
  };
}
class App extends Component {
  render() {
    const SRHook = this.props.speechRecognitionHook;
    const { transcript } = SRHook;
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      return null;
    }

    return (
      <Router>
        <Switch>
          <Route path='/' exact>
            <Form transcript={transcript} />
          </Route>
          <Route path='/register' exact>
            <Registration />
          </Route>

          <Route path='/teacher/login' exact>
            <GoogleAuth />
          </Route>
          <Route path='/subjects' exact>
            <Option />
          </Route>
          <Route path='/add_question' exact component={AddQuestion} />
          <Route path='/student/register'>
            <StudentAccount />
          </Route>
          <Route path='/learn'>
            <YouTube />
          </Route>
          <Route path='/login'>
            <StudentLogin />
          </Route>
          <Route path="/subjects/mathematics">
            <Difficulty />
          </Route>
          <Route path="/subjects/english">
            <Difficulty />
          </Route>
          <Route path="/choice">
            <Choice />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default myHook(App);
