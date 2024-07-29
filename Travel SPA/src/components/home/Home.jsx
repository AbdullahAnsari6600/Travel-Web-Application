import React,{useEffect} from 'react'
import './home.css'
import video from '../../assets/home.mp4'
import {GrLocation} from 'react-icons/gr'
import { HiFilter } from "react-icons/hi"
import {FiFacebook} from "react-icons/fi"
import {FaInstagram} from "react-icons/fa"
import {SiTripadvisor} from "react-icons/si"
import {FaList} from "react-icons/fa"
import {TbApps} from "react-icons/tb"

import Aos from 'aos'
import 'aos/dist/aos.css'



const Home = () => {

useEffect(()=>{
  Aos.init({duration:2000})
},[])


  return (
    <section className='home'>
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="home/mp4"></video>
    
    <div className="homeContent container">
      <div className='textDiv'>
        <span data-aos="fade-up" className='smallText'>
          Our Packages
        </span>
        <h1 data-aos="fade-up"  className='homeTitle'>
          Search yout Holiday
        </h1>
      </div>
      <div data-aos="fade-up"  className="cardDiv">
        <div className='destinationInput'>
          <label htmlFor="city">Search Your destination: </label>
          <div className='input flex'>
            <input type='text' placeholder='Enter name here...'/>
            <GrLocation className='icon'/>
          </div>
        </div>
        <div className='destinationInput'>
          <label htmlFor="date">Select your date: </label>
          <div className='input flex'>
            <input type='date'/>
          </div>
        </div>
        <div className='priceInput'>
          
          <div className='label_total flex'>
            <label htmlFor="price">Max price:</label>
            <h3 className='total'>$5000</h3>
            </div>
            <div className='input flex'>
            <input type='range' max="5000" min="1000"/>
          </div>
        </div>

        <div className='searchOptions flex'>
      	<HiFilter className='icon'/>
        <span>MORE FILTERS</span>
        </div>
      </div>

      <div data-aos="fade-up"  className="homeFooterIcons flex">
        <div className='rightIcons'>
        <SiTripadvisor className='icon'/>
        <FiFacebook className='icon'/>
        <FaInstagram className='icon'/>

        </div>
        <div className="leftIcons">
        <FaList className='icon'/>
        <TbApps className='icon'/>

        </div>
      </div>

    </div>

    </section>
  )
}

export default Home
