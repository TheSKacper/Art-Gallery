import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import axios from "axios";
import { MyContext } from "../../context/Context";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const [listOfPaints, setListOfPaints] = useState([]);
  const context = useContext(MyContext);
  const navigate = useNavigate();
  console.log(context.data);
  useEffect(() => {
    getAllPictures();
  }, []);

  const getAllPictures = () => {
    try {
      axios
        .get("http://localhost:3001/api/shop/")
        .then((resposnse) => {
          console.log(resposnse.data);
          setListOfPaints(
            resposnse.data.filter((item) => item.veryfi === true)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deletePaint = (id) => {
    try {
      axios
        .delete("http://localhost:3001/api/shop/" + id)
        .then((response) => {
          console.log("deleted");
          getAllPictures();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const addPaint = (e, id) => {
    e.preventDefault();

    if (context.data.isLogin === false) {
      alert('To buy anything you have to have your account')
      navigate("/login");
    } else if (context.data.isLogin === true) {
      const updatedShop = Array.isArray(context.data.shop)
        ? [...context.data.shop, id]
        : [id];
      context.setData({ ...context.data, isShop: true, shop: updatedShop });
    }
  };

  return (
    <div className="containerShop">
      {listOfPaints.map((item) => (
        <div key={item._id} className="card">
          <div className="card-body">
            <img src={item.img} alt={item.img} />
            <h1> {item.title} </h1>
            <hr />
            <p>{item.owner}</p>
            <button className="btn" onClick={(e) => addPaint(e, item._id)}>
              Add
            </button>
            {context.data.role === "admin" ? (
              <button
                className="btn mt-2"
                onClick={() => deletePaint(item._id)}
              >
                Delete
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
