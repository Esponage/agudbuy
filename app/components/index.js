import React from 'react';

var Index = React.createClass({
  render() {
    return (
<div className="main">
      <div className="nav-container">
        <nav id="primary_nav_wrap">
          <ul>
            <li className="current-menu-item"><a className="menus" href="#">Home</a></li>
              <li><a className="menus" href="#">About</a>
              </li>
              <li><a className="menus" href="#">Services</a>
                <ul>
                  <li className=""><a href="#">Request an Appointment</a></li>
                  <li className="border"><a href="#">What We Do</a></li>
                </ul>
              </li>
              <li><a className="menus" href="#">Reviews</a>
            </li>
              <li><a className="menus" href="#">Contact</a></li>
            </ul>
          </nav>
          </div>



          <div className="photo-container">
            <div className="photo-one"></div>
            <div className="photo-two"></div>
            <div className="photo-three"></div>
            <div className="photo-four"></div>
            <div className="photo-five"></div>
            <div className="photo-six"></div>
            <div className="photo-seven"></div>

          </div>

          <div className="container">

          <div className="general-info">

          </div>

          <div className="quick-info">

          </div>

          <div className="footer-zone">

          </div>

      </div>
      </div>
    );
  }

});

export default Index;
