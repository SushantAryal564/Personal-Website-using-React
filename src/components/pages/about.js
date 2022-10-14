import Layout from "../Layout/layout";
import "./about.css";
import image from "./../../assets/profile.webp";
const About = () => {
  return (
    <Layout>
      <section className="container">
        <section className="section-about">
          <div className="about-page-heading">
            <h1>About Me</h1>
          </div>
          <div className="about-content">
            <div className="circular--portrait">
              <img src={image} alt="Rashmi Photo" />
            </div>
            <div className="about-description">
              <p>
                Hi and welcome to my personal website. I'm Rashmi Dhungana. I am
                currently pursuing a degree in Bachlore in Information
                Technology from Heral Collage. I am from Syangja currently
                residing in Kathmandu, Nepal. I graduated my highschool from
                Aadarsha Secondary School Waling Syangja. My hobbies are
                painting, playing video games, and listening to music. I hope to
                meet more people in the near future.
              </p>
            </div>
          </div>
        </section>
      </section>
    </Layout>
  );
};
export default About;
