import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import "./Home.css";
import image1 from "./../../assets/MyLittleSister.jpg";
import image2 from "./../../assets/hehe.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from "../Layout/layout";
const Home = () => {
  return (
    <Layout>
      <div className="section-hero">
        <div className="hero">
          <div class="hero-text-box">
            <div class="hero-primary">
              <span class="wave">✋🏼</span>
              <span class="heading-greet">Hello</span>
            </div>
            <p class="hero-description">
              I'm{" "}
              <span class="name">
                {" "}
                Sushant
                <br />
                Aryal{" "}
              </span>
            </p>
            <a href="#" class="btn btn--full">
              Download CV
            </a>
          </div>
          <Carousel
            showArrows={true}
            autoPlay={true}
            width={500}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            stopOnHover={true}
            className="imageSlider"
          >
            <div>
              <img className="imgs" src={image1} alt="Rashmi wearing topi" />
            </div>
            <div>
              <img src={image2} alt="Rashmi and her brother" />
            </div>
          </Carousel>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
