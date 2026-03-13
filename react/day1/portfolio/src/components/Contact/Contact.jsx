import React, { Component } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

export class Contact extends Component {
  render() {
    return (
      <section className="contact" id="contact">
        <div className="container">
          <div className="row">
            {/* Left — info */}
            <div className="col-lg-4 mb-5 mb-lg-0">
              <h2 className="contact__heading mb-2">Contact Me</h2>
              <p className="contact__sub mb-4">
                Have a project in mind? Fill out the form and I'll get back to
                you.
              </p>
              <div className="contact__detail mb-3">
                <FaEnvelope />
                <span>kr13@hotmail.com</span>
              </div>
              <div className="contact__detail mb-4">
                <FaPhone />
                <span>717-555-1234</span>
              </div>
              <div className="contact__social">
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="GitHub">
                  <FaGithub />
                </a>
              </div>
            </div>

            {/* Right — form */}
            <div className="col-lg-8">
              <form className="contact__form">
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      className="contact__input"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="contact__input"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      className="contact__input"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      className="contact__input contact__textarea"
                      placeholder="Your Message"
                      rows={5}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="contact__btn">
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
