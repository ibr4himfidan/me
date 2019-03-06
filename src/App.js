import React, { Component } from 'react';
import logo from './public/images/logo.jpeg';
import './public/css/main.min.css';
import './public/css/fontawesome-all.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile--image">
          <div className="center">
            <a href="https://www.dontsafe.com/"><img src={logo} alt="Profile Photo"/></a>
          </div>
        </div>
        <div className="profile--text">
          <div className="center">
            <p>Full Stack Developer at <a href="https://www.mysilo.com/">Mysilo</a>, Ads Manager | Bug Researcher | Founder <a className="logo--color" href="#">Gecersiztik.com</a> </p>
          </div>
        </div>
        <div className="profile--information">
            <div className="center">
            <ul>
              <li><a href="#"><span className="fab fa-twitter"></span></a></li>
              <li><a href="#"><span className="fab fa-instagram"></span></a></li>
              <li><a href="#"><span className="fab fa-linkedin"></span></a></li>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
