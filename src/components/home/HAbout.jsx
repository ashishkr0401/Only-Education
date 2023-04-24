import React from "react"
import OnlineCourses from "../allcourses/OnlineCourses"
import Heading from "../common/heading/Heading"
import "../allcourses/courses.css"
import { coursesCard } from "../../dummydata"

const HAbout = () => {
  return (
    <>
      <section className='homeAbout'>
        <div className='container'>
          <Heading subtitle='our services' title='explore our popular service' />

          <div className='coursesCard'>
            {/* copy code form  coursesCard */}
            <div className='grid2'>
              {coursesCard.slice(0, 3).map((val) => (
                <div className='items'>
                  <div className='box'>
                    <div className='content flex'>
                      <div className='down'>
                        <div className='img'>
                          <img src={val.cover} alt='' />
                        </div>
                        <h1>{val.coursesName}</h1>
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan libero vitae neque accumsan, at bibendum tellus ornare. Ut iaculis auctor risus, at scelerisque elit luctus vitae.</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <OnlineCourses />
      </section>
    </>
  )
}

export default HAbout
