import React, { useContext, useEffect, useState } from "react";
import "./newProduct.css";
import { MyContext } from "../../context/Context.jsx";
import axios from "axios";

const NewProduct = () => {
  const context = useContext(MyContext);
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    price: 0,
    img: "",
    year: 0,
    desc: "",
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    axios
      .get("http://localhost:3001/api/shop/")
      .then((response) => {
        setList(
          response.data.filter((item) => item.owner === context.data.name)
        );
        console.log(
          response.data.filter((item) => item.owner === context.data.name)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerItem = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const addNewItem = () => {
    const jsonItem = {
      ...newItem,
      owner: context.data.name,
    };
    try {
      axios
        .post("http://localhost:3001/api/shop/", jsonItem)
        .then((response) => {
          console.log(response.data);
          setNewItem({ title: "", price: 0, img: "", year: 0, desc: "" });
          getList();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Title
        </span>
        <input
          type="text"
          value={newItem.title}
          onChange={handlerItem}
          name="title"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Price
        </span>
        <input
          type="text"
          name="price"
          value={newItem.price}
          onChange={handlerItem}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Img
        </span>
        <input
          type="text"
          value={newItem.img}
          onChange={handlerItem}
          name="img"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Year
        </span>
        <input
          type="text"
          name="year"
          value={newItem.year}
          onChange={handlerItem}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>
      <div className="input-group input-group-sm mb-3">
        <span className="input-group-text" id="inputGroup-sizing-sm">
          Desc
        </span>
        <input
          type="text"
          name="desc"
          value={newItem.desc}
          onChange={handlerItem}
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-sm"
        />
      </div>

      <button className="btn btn-primary" onClick={addNewItem}>
        Add
      </button>

      {list.map((item) => (
        <div key={item._id}>
          {item.title} || {item.desc} || {item.price} || {item.year}
        </div>
      ))}
    </>
  );
};

export default NewProduct;
