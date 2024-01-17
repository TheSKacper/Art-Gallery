import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import "./home.css";

const Home = () => {
  const context = useContext(MyContext);
  console.log(context.data);
  return (
    <div className="homeContainer">
      <div className="leftHome">
        <h1 className="h1Home">KS art galery</h1>
        <p className="m-5">
          Welcome to KS art galery – where art meets passion! <br /><br /> Awaken your
          creativity and discover unique works of art that speak to the soul. At
          KS art galery, we provide artists and creators with the opportunity to
          share their exceptional talents with the world. <br /> <br /> What sets us apart: <br /> <br /> 🎨
          Creative Diversity: Explore one-of-a-kind paintings, sculptures,
          figurines, and much more. Our community of artists offers a wide range
          of artworks to suit every taste. <br /> <br /> 🌍 Global Exhibition: Browse and
          purchase artworks created by artists from around the globe. KS art
          galery is where boundaries disappear, and art transcends all barriers.
          <br /> <br /> 🛒 Your Own Gallery: You can be a creator too! Register and showcase
          your artworks on our platform. Let the world see the unique universe
          you've created. <br /> <br /> 🤝 Support for Artists: KS art galery is not just a
          place for selling; it's also about supporting the artistic community.
          We ensure fair compensation for creators and promote their works
          across various platforms. <br /> <br /> Join our community and immerse yourself in
          an endless journey of art. Explore, collect, and share your passion on
          KS art galery!
        </p>
        <div className="homeButtons">
          <Link to="/about" className="btn ">
            About
          </Link>
          <Link to="/shop" className="btn">
            Shop
          </Link>
        </div>
      </div>
      <div className="rightHome"></div>
    </div>
  );
};

export default Home;
