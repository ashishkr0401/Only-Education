import React from "react"
import { testimonal } from "../../../dummydata"
import Heading from "../../common/heading/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal'>
        <div className='container'>
          <Heading subtitle='Scopes and Avenues' title='MBBS Abroad' />
          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src="https://www.affinityeducation.in/newassets/redesign/Kharkiv-National-Medical-University.webp" alt='' />
                  </div>
                  <div className='name'>
                    <h2>College Name</h2>
                  </div>
                </div>
                <button className='outline-btn'>APPLY NOW</button>
              </div>
            ))}
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src="https://www.affinityeducation.in/newassets/redesign/Kharkiv-National-Medical-University.webp" alt='' />
                  </div>
                  <div className='name'>
                    <h2>College Name</h2>
                  </div>
                </div>
                <button className='outline-btn'>APPLY NOW</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='testimonal'>
        <div className='container'>
          <Heading subtitle='TESTIMONIAL' title='Our success reflects in the form of a happy and satisfied clientele' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa fa-quote-left icon'></i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
                <div className='rate'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <label htmlFor=''>(5.0)</label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
