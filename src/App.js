import React, { Component } from 'react';
import './public/css/main.min.css';
import './public/css/fontawesome-all.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="profile--image">
          <div className="center">
            <a href="https://www.dontsafe.com/"><img src="/public/images/logo.jpeg" alt=""/></a>
          </div>
        </div>
        <div className="profile--text">
          <div className="center">
            <p>Full Stack Developer at <a href="https://www.mysilo.com/">Mysilo</a>, Ads Manager | Bug Researcher | Founder <a className="logo--color" href="https://www.gecerrsiztik.com/">Gecersiztik.com</a> </p>
          </div>
        </div>
        <div className="profile--information">
            <div className="center">
            <ul>
              <li><a href="https://www.twitter.com/L4NETLY/"><span className="fab fa-twitter"></span></a></li>
              <li><a href="https://www.instagram.com/ibr4himfidan/"><span className="fab fa-instagram"></span></a></li>
              <li><a href="https://www.linkedin.com/in/ibrahim-fidan-4b173aab/"><span className="fab fa-linkedin"></span></a></li>
            </ul>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
