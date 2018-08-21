import React from 'react';
import Button from '../button';
import './_form.scss';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.state = {isLogin: true};
  }

  handleLoginClick() {
    this.setState({isLogin: true});
  }

  handleSignupClick() {
    this.setState({isLogin: false});
  }

  render() {

    const isLogin = this.state.isLogin;
    let form;

    if (isLogin) {
      form = (<ul className="form-list form-login"><li>
          <label htmlFor="firstName">User Name:</label>
          <input type="text" className="input-text" name="user" id="user" />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input type="text" className="input-text" name="password" id="password" />
        </li>
        <li className="button-container">
          <Button className={"button-primary"} onClick={this.handleLoginClick} text={"Login"} ></Button>
          <Button className={"button-text"} onClick={this.handleSignupClick} text={"Signup"} ></Button>
          
        </li></ul>);
    } else {
      form = (<ul className="form-list form-signup">
        <li>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" className="input-text" name="firstName" id="firstName" />
        </li>
        <li>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" className="input-text" name="lastName" id="lastName" />
        </li>
        <li>
          <label htmlFor="email">Email:</label>
          <input type="text" className="input-text" name="email" id="email" />
        </li>
        <li>
          <label htmlFor="password">Password:</label>
          <input type="text" className="input-text" name="password" id="password" />
        </li>
        <li>
          <label htmlFor="confirm">Confirm Password:</label>
          <input type="text" className="input-text" name="confirm" id="confirm" />
        </li>
        <li className="button-container">
          <Button className={"button-primary"} onClick={this.handleSignupClick} text={"Signup"} ></Button>
          <Button className={"button-text"} onClick={this.handleLoginClick} text={"Login"} ></Button>
        </li></ul>)
    }
    return (<form className="form">
        {form}
    </form>)
  }
}

export default Form;
