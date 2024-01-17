import React, { useContext, useEffect, useState } from "react";
import "./newProduct.css";
import { MyContext } from "../../context/Context.jsx";
import axios from "axios";

const NewProduct = () => {
  const context = useContext(MyContext);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [img,setImg] = useState("")
  const [year, setYear] = useState("");
  const [desc, setDesc] = useState("");

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

  const addNewItem = () => {
    const newItem = {
      title: title,
      price: price,
      img:img,
      year: year,
      desc: desc,
      owner: context.data.name,
    };
    try {
      axios
        .post("http://localhost:3001/api/shop/", newItem)
        .then((response) => {
          console.log(response.data);
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
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
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
          value={price}
          type="text"
          onChange={(e) => setPrice(e.target.value)}
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
          value={img}
          type="text"
          onChange={(e) => setImg(e.target.value)}
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
          value={year}
          type="text"
          onChange={(e) => setYear(e.target.value)}
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
          value={desc}
          type="text"
          onChange={(e) => setDesc(e.target.value)}
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
