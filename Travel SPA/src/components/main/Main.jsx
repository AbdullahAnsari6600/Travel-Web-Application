import React,{useEffect}  from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {FaClipboardList} from 'react-icons/fa'
import img from '../../assets/newzealand.jpg'
import img2 from '../../assets/malaysia.jpg'
import img3 from '../../assets/australia.jpg'
import img4 from '../../assets/switzerland.jpg'
import img5 from '../../assets/himalay.jpg'
import img6 from '../../assets/hong kong.jpg'
import img7 from '../../assets/iceland.jpg'
import img8 from '../../assets/bali.jpg'
import img9 from '../../assets/ireland.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data=[
  {
  id:1,
  imgSrc:img,
  dostTitle:'Bora Bora',
  location:'New Zealand',
  grade:'Cultural Relax',
  fees:'$700',
  description:'jaajbvhahbvjfbhadbhadhbvahdbfvajbv. '
  },
  {
    id:2,
    imgSrc:img2,
    dostTitle:'Jumera',
    location:'Switzerland',
    grade:'Relaxing',
    fees:'$1600',
    description:'ajbvhahbvjfbhadbhadhbvahdbfvajbv. '
    },
    {
      id:3,
      imgSrc:img3,
      dostTitle:'Refreshing',
      location:'Hong-Kong',
      grade:'Refreshing',
      fees:'$1700',
      description:'bvhahbvjfbhadbhadhbvahdbfvajbv. '
      },
      {
        id:4,
        imgSrc:img4,
        dostTitle:'Falaknuma',
        location:'Himalayan',
        grade:'Coolest',
        fees:'$3700',
        description:'sfvsvdffbhadbhadhbvahdbfvajbv. '
        },
        {
          id:5,
          imgSrc:img5,
          dostTitle:'Natural',
          location:'Istanbul',
          grade:'Warming',
          fees:'$2700',
          description:'jaajbvhahbvjfbhadbhadhbvahdbfvajbv. '
          },
          {
            id:6,
            imgSrc:img6,
            dostTitle:'Water',
            location:'Bali',
            grade:'Cultural Relax',
            fees:'$1700',
            description:'hfnhgnffbhadbhadhbvahdbfvajbv. '
            },
            {
              id:7,
              imgSrc:img7,
              dostTitle:'Action',
              location:'Ireland',
              grade:'Exploring',
              fees:'$1300',
              description:'lorem sdf dsf sadf afdadfa '
              },
              {
                id:8,
                imgSrc:img8,
                dostTitle:'Relaxing',
                location:'India',
                grade:'Relax',
                fees:'$700',
                description:'jaajbvhahbvjfbhadbhadhbvahdbfvajbv. '
                },
                {
                  id:9,
                  imgSrc:img9,
                  dostTitle:'Cool',
                  location:'New Zealand',
                  grade:'Cultural Relax',
                  fees:'$2700',
                  description:'jdvadhadbhadhbvahdbfvajbv. '
                  },
]

const Main=()=>{

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return(
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destination
        </h3>

      </div>
      <div className='secContent grid'>
        {
          /*so guys */
        }
        {
          Data.map(({id,imgSrc,dostTitle,location,grade,fees,description})=>{
            return(
              <div key={id} data-aos="fade-up"   className="singleDestination">
                {
                  /*here */
                }
                <div className="imageDiv">
                  <img src={imgSrc} alt={dostTitle} />

                </div>
                <div className="cardInfo">
                  <h4 className='dostTitle'>
                    {dostTitle}
                  </h4>
                  <span className='continent flex'>
                  <HiOutlineLocationMarker className='icon'/>
                  <span className='name'>{location}</span>
                  </span>
                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{grade}<small>+1</small></span>

                    </div>
                    <div className='price'>
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className='desc'>
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <FaClipboardList className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main