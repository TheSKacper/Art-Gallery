import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/Context";
import axios from "axios";
import './shopping.css'

const ShoppingCart = () => {
  const context = useContext(MyContext);

  useEffect(() => {
    getItems([]);
  }, []);
  
  const getItems = () => {
    axios
      .get("http://localhost:3001/api/shop/")
      .then((response) => {
        const itemArray = [];

        for (let i = 0; i < context.data.shop.length; i++) {
          const currentItem = context.data.shop[i];

          if (typeof currentItem === "object") {
            itemArray.push(currentItem);
          } else if (typeof currentItem === "string") {
            const filteredItems = response.data.filter(
              (item) => item._id === currentItem
            );
            itemArray.push(...filteredItems);
          }
        }

        console.log(itemArray);
        context.setData({ ...context.data, shop: itemArray });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteItem = (id) => {
    const updateArray = context.data.shop;
    updateArray.splice(id, 1);
    context.setData({ ...context.data, shop: updateArray });
    console.log(context.data.shop);
  };

  return (
    <div className="containerShopping">
      {context.data.shop.map((item, index) => (
        <div key={index} className="card">
          <div className="card-body">
            <h5 className="card-title">Title: {item.title}</h5>
            <p className="card-text">Desc: {item.desc}</p>
            <p>Price: {item.price}</p>
            <button className="btn btn-danger" onClick={() => deleteItem(index)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCart;
