import React, { useState } from "react";
import "./Home.css";
import image1 from "./../../assets/MyLittleSister.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../Layout/layout";
import Typewriter from "typewriter-effect";
const Home = () => {
  return (
    <Layout>
      <section className="container">
        <section className="section-hero">
          <div className="hero">
            <div className="hero-text-box">
              <div className="hero-primary">
                <span className="heading-greet">Hello,</span>
              </div>
              <p className="hero-description">
                I'm <br />
                <span className="name-home">
                  <Typewriter
                    options={{
                      strings: ["Rashmi Dhungana", "a Student"],
                      autoStart: true,
                      loop: true,
                      pauseFor: 5000,
                    }}
                  />
                </span>
              </p>
            </div>
            <figure className="hero-img-box">
              <Carousel
                showArrows={false}
                autoPlay={true}
                showThumbs={false}
                infiniteLoop={true}
                stopOnHover={true}
                className="imageSlider"
              >
                <div>
                  <img
                    className="imgs"
                    src={image1}
                    alt="Rashmi wearing topi"
                  />
                </div>
              </Carousel>
            </figure>
          </div>
        </section>
      </section>
    </Layout>
  );
};
export default Home;
