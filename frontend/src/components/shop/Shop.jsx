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
    <div className="containerShop">
      {listOfPaints.map((item) => (
        <div key={item._id} className="card">
          <div className="card-body">
            <h5 className="card-title">Title: {item.title}</h5>
            <hr />
            <h5 className="card-title">Owner:  {item.owner}</h5>
            <hr />
            <h5 className="card-title">Year:  {item.year}</h5>
            <hr />
            <h5 className="card-title">Price:  {item.price}</h5>
            <hr />
            <p className="card-text">Desc:  {item.desc}</p>
            {context.data.isLogin === true ? (
              <button className="btn" onClick={(e) => addPaint(e, item._id)}>Add</button>
            ) : null}
            {context.data.role === "admin" ? (
              <button className="btn" onClick={() => deletePaint(item._id)}>Delete</button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
