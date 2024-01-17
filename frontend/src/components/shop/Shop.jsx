import React, { useContext, useEffect, useState } from "react";
import "./shop.css";
import axios from "axios";
import { MyContext } from "../../context/Context";

const Shop = () => {
  const [listOfPaints, setListOfPaints] = useState([]);
  const context = useContext(MyContext);
  console.log(context.data);
  useEffect(() => {
    getAllPictures();
  }, []);

  const getAllPictures = () => {
    try {
      axios
        .get("http://localhost:3001/api/shop/")
        .then((resposnse) => {
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
    const updatedShop = Array.isArray(context.data.shop)
      ? [...context.data.shop, id]
      : [id];
    context.setData({ ...context.data, isShop: true, shop: updatedShop });
  };

  return (
    <div className="container">
      {listOfPaints.map((item) => (
        <div key={item._id} className="card">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <h5 className="card-title">{item.owner}</h5>
            <h5 className="card-title">{item.year}</h5>
            <h5 className="card-title">{item.price}</h5>
            <p className="card-text">{item.desc}</p>
            {context.data.isLogin === true ? (
              <button onClick={(e) => addPaint(e, item._id)}>Add</button>
            ) : null}
            {context.data.role === "admin" ? (
              <button onClick={() => deletePaint(item._id)}>Delete</button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
