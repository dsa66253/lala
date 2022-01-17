import React from "react";
import "./Footer.css";
import {MailOutlined} from '@ant-design/icons';
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column2 */}
          <div className="col">
            <h4>Contact us</h4>
            <ul className="list-unstyled">
              <li>
                <a href="#"><MailOutlined />  lalalee1219@gmail.com</a>
              </li>

            </ul>
          </div>
          {/* Column3 */}
          
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Mary | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="=col">
            <h4>THICCMEMES INC</h4>
            <ul className="list-unstyled">
              <li>342+42</li>
              <li>MOSCOW</li>
              <li>street</li>
            </ul>
          </div>
          <div className="=col">
            <h4>SECONDE</h4>
            <ul className="list-unstyled">
              <li>SECOND 2</li>
              <li>SECOND 4</li>
              <li>SECOND 6</li>
            </ul>
          </div>
          <div className="=col">
            <h4>THIRD</h4>
            <ul className="list-unstyled">
              <li>THIRD 2</li>
              <li>THIRD 4</li>
              <li>THIRD 6</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
