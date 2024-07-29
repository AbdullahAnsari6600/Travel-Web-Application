import React,{useEffect}  from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import {FiSend} from "react-icons/fi"
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>
      <div className='secContent container'>
        <div className="contactDiv flex">
          <div  data-aos="fade-up"  className="text">
            <small>KEEP IN TOUCH</small>  
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input  data-aos="fade-up" type="text" placeholder='Enter Email Address'/>
            <button data-aos="fade-up"  className='btn flex' type='submit'>SEND
              <FiSend className='icon'/>
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'><MdOutlineTravelExplore className='icon'/> Travel.</a>
            </div>
            <div  data-aos="fade-up"  className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores perferendis omnis, doloribus iste obcaecati dolor. Veniam, atque dicta non assumenda, eligendi perferendis quia vero nisi provident consequatur nulla, molestiae eaque.
            </div>

            <div  data-aos="fade-up"  className="footerSocials">
            <FaTwitter className='icon'/> 
            <FaYoutube className='icon'/> 
            <FaInstagram className='icon'/> 

            </div>

          </div>
          <div className="footerLinks grid">
            <div className="linkGroup">
              <span className='groupTitle'>
                OUR AGENCY

              </span>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Services

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Insurance

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Agency

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Tourism

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Payment

              </li>
            </div>
            <div className="linkGroup">
              <span className='groupTitle'>
                PARTNERS

              </span>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Bookings

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Rentors

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Hotels

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Trivago

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              TripAdvisor

              </li>
            </div>
            <div className="linkGroup">
              <span className='groupTitle'>
                LAST MINUTE

              </span>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Switzerland

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Bali

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Iceland

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Turkey

              </li>
              <li className='footerList flex'>
              <FaChevronRight className='icon'/>
              Dubai

              </li>
            </div>

          </div>

          <div className='footerDiv flex'>
            <small data-aos="fade-up">BEST TRAVEL WEBSITE HERE</small>
            <small data-aos="fade-up">COPYRIGHTS RESERVED - ABD_ANSARI 2024</small>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Footer
