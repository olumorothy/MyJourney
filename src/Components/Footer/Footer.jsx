import React from "react";
import "./footer.css";
import video2 from "../../Assets/video2.mp4";
import { FiChevronRight, FiSend } from "react-icons/fi";
import { FaTripadvisor } from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
function Footer() {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted typeof="video/mp4"></video>
      </div>
      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="Enter Email Address" />
            <button className="btn flex" type="submit">
              SEND <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className="icon" />
                Travel
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              pariatur odio qui ea nesciunt! Voluptatibus sunt at necessitatibus
              excepturi quod pariatur saepe ipsa! Architecto voluptatem non vel
              dolorem laboriosam. Unde?
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiFillYoutube className="icon" />
              <AiFillInstagram className="icon" />
              <FaTripadvisor className="icon" />
            </div>
          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Services
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Insurance
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Agency
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Tourism
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Payment
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Bookings
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Rentals
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                HostelWorld
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Trivago
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                TripAdvisor
              </li>
            </div>

            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                London
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                California
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Indonesia
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Europe
              </li>

              <li className="footerList ">
                <FiChevronRight className="icon" />
                Oceania
              </li>
            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE </small>
            <small>COPYRIGHTS RESERVED - Moroti 2023</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
