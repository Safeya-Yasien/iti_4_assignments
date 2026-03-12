import React, { Component } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="footer__content">
          <div className="footer__text">
            <p className="">Get in touch</p>
            <ul>
              <li>
                <MdEmail />
                <a href="#">katiereed@gmail.com</a>
              </li>
              <li>
                <FaPhoneAlt />
                <a href="#">+91 987654321</a>
              </li>
            </ul>
          </div>

          <button className="contact__btn">Contact me</button>

          <div className="social__media">
            <ul>
              <li>
                <FaFacebookF />
              </li>
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaTwitter />
              </li>
            </ul>

            <p>Copyright © 2022 KR</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
