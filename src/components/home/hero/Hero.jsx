import React from "react";
import Heading from "../../common/heading/Heading";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ONLY Education"
              title="Begin your study abroad journey, with us."
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fa fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSE <i className="fa fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="newletter heroAdd">
        <div className="container flexSB">
          <div className="left">
            <h1>Why study abroad?</h1>
          </div>
          <div className="right ">
            <div className = " rightele ">
              <h2>Get upto</h2>
              <div className = "subText">
                <h2>75% &nbsp;</h2>
                <span>scholarships</span>
              </div>
            </div>
            <div className = "vl"></div>
            <div className = "rightele ">
              <h2>Stay & Work</h2>
              <div className = "subText">
                <h2>2-3yrs &nbsp;</h2>
                <span>after graduation</span>
              </div>
            </div>
            <div className = "vl"></div>
            <div className = "rightele">
              <h2>Work part-time</h2>
              <div className = "subText">
                <h2>Min 20hrs &nbsp;</h2>
                <span>per week</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
