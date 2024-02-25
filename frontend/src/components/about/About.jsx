import React from 'react';
import './about.css';
import picture1 from '../../assets/gallery-3114279_1280.jpg';
import picture2 from '../../assets/istanbul-168774_1280.jpg';

const About = () => {
  return (
    <div className='about bg-black h-100'>
      <div className='container py-5'>
        <h2
          className='text-white text-uppercase fw-bold'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          About KS art gallery
        </h2>
        <p className='text-white mt-3' data-aos='fade-up' data-aos-delay='300'>
          Welcome to our art gallery, a captivating space where creativity and
          expression converge to form a rich tapestry of visual experiences. Our
          gallery is a haven for art enthusiasts and connoisseurs alike,
          showcasing a diverse collection of works that span various genres,
          styles, and periods. <br />
          <br /> Step into a world where each brushstroke tells a unique story,
          and every canvas becomes a portal to the artist's imagination. Our
          curated exhibitions feature both established and emerging talents,
          creating a dynamic dialogue between tradition and innovation. From
          traditional paintings and sculptures to contemporary multimedia
          installations, our gallery strives to present a kaleidoscope of
          artistic expressions. <br />
          <br /> We believe in the power of art to inspire, provoke thought, and
          evoke emotions. As you navigate through the carefully arranged
          exhibits, you'll find yourself immersed in a sensory journey that
          transcends boundaries and connects you with the essence of human
          creativity. <br />
          <br /> Our commitment to fostering a vibrant art community extends
          beyond the gallery walls. We host events, workshops, and discussions
          that encourage dialogue between artists and art enthusiasts, fostering
          a supportive environment for the exchange of ideas. Whether you are a
          seasoned art collector or a first-time visitor, our gallery invites
          you to explore, engage, and experience the transformative power of
          art. <br />
          <br /> Join us in celebrating the beauty of human expression, and let
          the walls of our gallery serve as a canvas for the boundless
          possibilities that art offers.
        </p>

        <div class='row' data-aos='fade-up' data-aos-delay='300'>
          <div class='col-sm-6 mb-3 mb-sm-0'>
            <div class='card'>
              <div class='card-body'>
                <img src={picture1} class='card-img-top' alt='galeria' />
              </div>
            </div>
          </div>
          <div class='col-sm-6'>
            <div class='card'>
              <div class='card-body'>
                <img src={picture2} class='card-img-top' alt='galeria' />
              </div>
            </div>
          </div>
        </div>
        <h2
          className='text-white text-uppercase fw-bold mt-5'
          data-aos='fade-up'
          data-aos-delay='200'
        >
          About Owner
        </h2>
        <p className='text-white mt-3' data-aos='fade-up' data-aos-delay='300'>
          As the driving force and creative visionary behind our gallery, Kacper
          brings a passion for art and a keen eye for talent to the forefront.
          With a deep appreciation for diverse artistic expressions, Kacper
          Szweda has curated a space where creativity flourishes and artists are
          given a platform to showcase their brilliance. <br />
          <br /> A dedicated art enthusiast, Kacper has cultivated an
          environment that fosters artistic dialogue and encourages the
          exploration of various mediums. Their commitment to supporting both
          established and emerging artists is evident in the carefully selected
          exhibitions that grace our walls. <br />
          <br />
          Beyond the gallery space, Kacper is an advocate for the transformative
          power of art in the community. Through engaging events, workshops, and
          collaborations, Kacper strives to create a dynamic cultural hub that
          resonates with art lovers and creators alike. <br />
          <br /> With a belief in the ability of art to transcend boundaries and
          inspire, Kacper invites you to experience the passion and dedication
          that drives "Our Gallery." Join Kacper on a journey of artistic
          discovery, where every stroke, every image, and every creation tells a
          story waiting to be shared.
        </p>
      </div>
    </div>
  );
};

export default About;
