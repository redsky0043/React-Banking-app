import React, {Component} from 'react';
import { withRouter } from "react-router-dom";

import './authorization.scss';
import Button from '../components/getStarter_button';

class Authorization extends Component {

  constructor() {
    super();

    this.state = {
      userName: '',
      password: '',
    }
  }

  validate = () => {
    const userName = this.state.userName;
    const userPassword = this.state.password;
  
    if ( userName === 'Boiko' && userPassword === '123') {
      this.props.history.push('/account');
    } else {
      alert('Please, check your information')
    }
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="secondPage">
        <div className="container">
          <div className="wrapper">
            <h1 className="secondPage__header">
              Ulix
            </h1>
            <form>
              <div className="authorization">
                <h2 className="authorization__title">
                  Login 
                </h2>
                <input className="authorization__input"
                  name='userName'
                  value={this.state.userName}
                  onChange={this.handleInputChange} 
                  type="text"  
                  placeholder="User Name"/>
                <input className="authorization__input"
                  name='password' 
                  value={this.state.password}
                  onChange={(e) => this.handleInputChange(e)} 
                  type="password"  
                  placeholder="Password"/>
              </div>
              <div onClick={this.validate}>
                <Button name='Go' />
              </div>
            </form>  
          </div>
        </div>
      </div>
    )
  }
}
 
export default withRouter(Authorization)

