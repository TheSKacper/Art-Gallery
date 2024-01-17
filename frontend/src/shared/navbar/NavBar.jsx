import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const context = useContext(MyContext);
  const navigation = useNavigate();

  const logOut = () => {
    context.setData({ isLogin: false, name: "", role: "",shopping:[], isShop:false });
    navigation("/");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          KS
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            {context.data.role === "admin" ? (
              <li className="nav-item">
                <Link className="nav-link" to="/verification">
                  Verification
                </Link>
              </li>
            ) : null}
            {context.data.isShop === true ? (
              <li className="nav-item">
                <Link className="nav-link" to="/shoppingCard">
                  Shopping Card
                </Link>
              </li>
            ) : null}
            {context.data.role === 'user' ? <li className="nav-item">
              <Link className="nav-link" to='/newProduct'>Your items</Link>
            </li> : null}
            {context.data.isLogin === false ? (
              <li className="nav-item">
                <Link className="nav-link" to="/login">
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
