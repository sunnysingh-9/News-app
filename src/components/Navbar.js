import React, { Component } from "react";
import {Link} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <>
      <body>
          <header>
            

            <nav className="navbar">
              <div className="navbar1">
                <Link to="/"> NEWSFOX </Link>
              </div>
              <ul>
                <li>
                <Link to="/"> HOME </Link>
                </li>
               
                  <li> <Link to="/business">BUSINESS </Link> </li>

                <li>
                <Link to="/entertainment">ENTERTAINMENT</Link>
                </li>
                <li>
                <Link to="/sports">SPORTS</Link>
                </li>
                <li>
                <Link to="/health">HEALTH</Link>
                </li>
                <li>
                <Link to="/science">SCEINCE</Link>
                </li>
                <li>
                <Link  to="/technology">TECHNOLOGY</Link>
                </li>

                <div className="search">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search here"
                  />
                </div>

              
              </ul>
            </nav>
            
          </header>
        </body>


      </>
     
    );
  }
}

export default Navbar;
