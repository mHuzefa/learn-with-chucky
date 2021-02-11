import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import "./App.module.css";
import Form from "./components/Form/Form";
import Option from "./components/Option/Option";
import AddQuestion from "./components/Questions/AddQuestion";
import Login from "./components/User/Login";
import Registration from "./components/User/Registration";
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
          <Route path='/login' exact>
            <Login />
          </Route>
          <Route path='/subjects' exact>
            <Option />
          </Route>
          <Route path='/add_question' exact component={AddQuestion} />
        </Switch>
      </Router>
    );
  }
}
export default myHook(App);
