import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiSend } from "react-icons/fi";
function Footer() {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contact flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inoutDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
