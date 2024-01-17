import React from "react";
import "./about.css";
import picture from "../../assets/background.jpg";

const About = () => {
  return (
    <div className="aboutContainer">
      <div className="upAbout">
        <h1 className="h1About">About KS gallery</h1>
        <p className="pAbout">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          veniam, voluptates quisquam blanditiis commodi temporibus alias eaque
          dicta rerum inventore? Totam exercitationem mollitia reprehenderit
          similique beatae! Sit, voluptatibus nihil. Ullam! Lorem ipsum dolor
          sit amet consectetur, adipisicing elit. Illum alias odit consequatur?
          Eos dolorem ad molestiae dolores perspiciatis! Distinctio laboriosam
          consequatur sit neque officia perferendis itaque fuga quo animi unde.
        </p>
      </div>
      <div className="middleAbout">
        <h1 className="h1About">Our gallery</h1>
        <img className="imgAbout" src={picture} alt="" />
        <p className="pAbout">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          cumque perspiciatis consequuntur libero amet pariatur quasi numquam
          molestias, quisquam voluptas praesentium iure dolorum laborum iste
          minima expedita alias a eligendi? Alias magni doloremque recusandae
          at? A odit recusandae laborum earum amet nobis iusto, quam dicta
          consequuntur repellat voluptatem. Itaque obcaecati ratione nesciunt
          architecto laboriosam quo! Ad nesciunt exercitationem ipsum eum? Ipsam
          itaque dolorum velit, magnam, explicabo temporibus enim debitis eum ut
          aut harum porro. Voluptas nihil sit consequuntur maiores numquam ut
          omnis? Voluptates quisquam omnis enim! Ad sequi fugiat necessitatibus?
          Autem, non nisi cupiditate maiores ea explicabo nobis ex quos magni
          illo, alias magnam asperiores odio nam vel! Eaque consequatur corrupti
          ad optio animi! Repellat quaerat itaque magnam eveniet repellendus?
        </p>
      </div>
      <div className="downAbout">
        <h1 className="h1About">Owner</h1>
        <img className="imgAbout" src={picture} alt="" />
        <p className="pAbout">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi illo,
          ullam consectetur et quasi dolore ex earum! In nisi, voluptas, impedit
          blanditiis ab, debitis eum sit exercitationem temporibus libero
          obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Est porro distinctio, asperiores ut animi, necessitatibus repudiandae
          dolore voluptates consequatur ea excepturi debitis perferendis
          repellat tenetur. Aliquid quam harum maxime. At! Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Autem ipsa, eum molestiae
          architecto natus quam commodi, iure sunt deleniti dolore, est quas
          sapiente dicta incidunt. Quas debitis fuga officiis dolorum.
        </p>
      </div>
    </div>
  );
};

export default About;
