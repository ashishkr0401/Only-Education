import React from "react"
import Heading from "../common/heading/Heading"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Heading subtitle='INTERESTED' title='Interested in taking a Course' />
        <div className='items1'>
          <div className="center">
            <div className="txt" style={{ textAlign: 'center', fontSize: '18px' }}>Fill in the details required and you shall soon be connected to a counselor. Get all the latest admission and related information on universited (Indian or abroad)</div>
            <div className="txt" style={{ textAlign: 'center', fontSize: '16px' }}>Need guidance regarding admissions abroad?</div>
          </div>
          <button className='outline-btn'>APPLY NOW</button>
        </div>
      </section >
    </>
  )
}

export default Hprice
