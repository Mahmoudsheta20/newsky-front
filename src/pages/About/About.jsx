import React from "react";
import { AboutCard, Contact, Service } from "../../components";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <div className="about__main">
        <h3>About Us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quas
          tempora quisquam repellat maxime vero doloribus, similique
          voluptatibus vel, unde impedit alias blanditiis deleniti itaque nisi
          dolorem facilis! Nisi reiciendis dolorem tempora veritatis nostrum
          asperiores doloribus nulla ex voluptatem minus quam voluptas dolorum,
          tempore vero delectus itaque, aspernatur tenetur nobis explicabo.
          Provident excepturi iste odio in molestias veniam illo voluptatem
          dicta quod, soluta voluptate facere et commodi cumque reiciendis modi
          incidunt corrupti ut, quos placeat ratione temporibus accusantium.
          Sapiente, saepe natus. Quia iusto cum explicabo veritatis saepe amet
          quaerat ex, doloribus optio expedita? Possimus voluptate natus soluta
          ab libero at.
        </p>
      </div>

      <div className="why__us">
        <h3>Why Us</h3>

        <Service />
      </div>

      <div className="card__offices">
        <h3>Our Offices</h3>
        <AboutCard />
      </div>

      <div className="contact">
        <h3>Contact Us</h3>
        <Contact />
      </div>
    </div>
  );
};

export default About;
