import React, { useEffect, useState } from "react";
import "./verification.css";
import axios from "axios";

const Veryfication = () => {
  const [listPaints, setListPaints] = useState([]);

  useEffect(() => {
    getPaints();
  }, []);

  const getPaints = () => {
    try {
      axios.get("http://localhost:3001/api/shop/").then((response) => {
        setListPaints(response.data.filter((item) => item.veryfi === false));
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isVeryfication = (id) => {
    const findItem = listPaints.filter((item) => item._id === id);
    const newItem = {
      title: findItem[0].title,
      price: findItem[0].price,
      year: findItem[0].year,
      img:findItem[0].img,
      desc: findItem[0].desc,
      owner: findItem[0].owner,
      veryfi: true,
    };
    try {
      axios
        .put("http://localhost:3001/api/shop/" + id, newItem)
        .then((response) => {
          console.log(response);
          getPaints();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = (id) =>
  {
      axios.delete('http://localhost:3001/api/shop/' + id).then((response) =>
      {
          console.log(response.data)
          getPaints()
      }).catch((error) =>
      {
        console.log(error)
      })
  }

  return (
    <div className="container">
      {listPaints.map((item) => (
        <div key={item._id}>
          {item.title}
          <button onClick={() => isVeryfication(item._id)} className="btn btn-primary">Veryfication</button>
          <button onClick={() => deleteItem(item._id)} className="btn btn-danger">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Veryfication;
