import React from 'react';
import Button from '../button';
import './_form.scss';

const Form = () =>
  (<form className="form">
      <ul className="form-list">
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
        <li>
          <Button link={"/"} className={"button-primary"} text={"Signup"} ></Button>
          <Button link={"/"} className={""} text={"Login"} ></Button>
        </li>
      </ul>
      
      
      
      
     
  </form>);

export default Form;
