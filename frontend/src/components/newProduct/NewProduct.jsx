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

  const deleteItem = (id) => {
    console.log(id);
    try {
      axios
        .delete("http://localhost:3001/api/shop/" + id)
        .then((response) => {
          context.notify('Deleted',{ type: 'success'})
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
      <div className="containerNewProduct">
        <div className="addButton">
          <button
            type="button"
            class="btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            ADD PRODUCT
          </button>
        </div>
        <table>
          <tr>
            <th>title</th>
            <th>price</th>
            <th>Img</th>
            <th>Year</th>
            <th>Desc</th>
            <th>Veryfi</th>
            <th>Delete</th>
          </tr>
          {list.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td><img className="imgNewProduct" src={item.img} alt={item.title} /></td>
              <td>{item.year}</td>
              <td>{item.desc}</td>
              <td>{item.veryfi ? "true" : "false"}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteItem(item._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                ADD PRODUCT
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
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
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={addNewItem}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
