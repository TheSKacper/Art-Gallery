import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const context = useContext(MyContext);
  const navigation = useNavigate();
  const [selection,setSelection] = useState('home')

  const logOut = () => {
    context.setData({
      isLogin: false,
      name: "",
      role: "",
      shopping: [],
      isShop: false,
    });
    context.notify('GoodBye :D', {type:'success'})
    navigation("/");
  };

  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={() => setSelection('home')}>
        <i class="bi bi-easel-fill"></i>   KS art gallery
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={selection === 'home' ? "nav-link text-primary" : "nav-link"} aria-current="page" to="/" onClick={() => setSelection('home')}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className={selection === 'about' ? "nav-link text-primary" : "nav-link"} to="/about" onClick={() => setSelection('about')}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className={selection === 'shop' ? "nav-link text-primary" : "nav-link"} to="/shop" onClick={() => setSelection('shop')}>
                Shop
              </Link>
            </li>
            {context.data.role === "admin" ? (
              <li className="nav-item">
                <Link className={selection === 'verification' ? "nav-link text-primary" : "nav-link"} to="/verification" onClick={() => setSelection('verification')}>
                  Verification
                </Link>
              </li>
            ) : null}
            {context.data.isShop === true ? (
              <li className="nav-item">
                <Link className={selection === 'shopping card' ? "nav-link text-primary" : "nav-link"} to="/shoppingCard" onClick={() => setSelection('shopping card')}>
                  Shopping Card
                </Link>
              </li>
            ) : null}
            {context.data.role === "user" ? (
              <li className="nav-item">
                <Link className={selection === 'your items' ? "nav-link text-primary" : "nav-link"} to="/newProduct" onClick={() => setSelection('your items')}>
                  Your items
                </Link>
              </li>
            ) : null}
            {context.data.isLogin === false ? (
              <li className="nav-item">
                <Link className={selection === 'login' ? "nav-link text-primary" : "nav-link"} to="/login" onClick={() => setSelection('login')}>
                  Login
                </Link>
              </li>
            ) : (
              <li className="nav-item">
                <button onClick={logOut} className="nav-link">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
