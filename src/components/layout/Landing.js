import React from "react";
import { Link } from "react-router-dom"
import instagram from '../../img/instagram.png';
import linkedin from '../../img/linkedin.png';
import github from '../../img/github.png';



const Landing = () => {
  return (
    <section className="landing-section">
      <div className="landing-content">
        <div className="textBox">
          <h2>
            Banking the way
            <br />
            <span>You Like</span>
          </h2>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            totam velit? Iure nemo labore inventore? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Labore, totam velit? Iure nemo labore
            inventore?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore, totam velit? Iure nemo labore inventore? */}
          </p>
          <Link to="/profile">Get Started</Link>
        </div>
        {/* <div className="imgBox">
                <img src="krzysztof-hepner-JYbVQzOt2Vk-unsplash.jpg" className="imageClass" />
            </div>  */}
      </div>
      <ul className="sci">
        <li>
          <a href="https://github.com/sv-shivansh" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="github"/>
          </a>
        </li>
        <li className="linkedin">
          <a href="https://www.linkedin.com/in/shivansh-vishwakarma-8a6a82205/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="Linkedin"/>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sv_shivansh/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="instagram"/>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Landing;
