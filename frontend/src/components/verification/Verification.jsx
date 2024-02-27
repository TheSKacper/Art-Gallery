import React, { useEffect, useState } from 'react';
import './verification.css';
import axios from 'axios';

const Veryfication = () => {
  const [listPaints, setListPaints] = useState([]);

  useEffect(() => {
    getPaints();
  }, []);

  const getPaints = () => {
    try {
      axios.get('http://localhost:3001/api/shop/').then((response) => {
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
      img: findItem[0].img,
      desc: findItem[0].desc,
      owner: findItem[0].owner,
      veryfi: true,
    };
    try {
      axios
        .put('http://localhost:3001/api/shop/' + id, newItem)
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

  const deleteItem = (id) => {
    axios
      .delete('http://localhost:3001/api/shop/' + id)
      .then((response) => {
        console.log(response.data);
        getPaints();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='veryfication'>
      <div className='container'>
        <table id='customers' className='mt-5'>
          <tr>
            <th>Title</th>
            <th>Price</th>
            <th>Year</th>
            <th>Desc</th>
            <th>Img</th>
            <th>Owner</th>
            <th>Delete</th>
            <th>Veryfication</th>
          </tr>

          {listPaints.map((item) => (
            <tr key={item._id}>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>{item.year}</td>
              <td>{item.desc}</td>
              <td>{item.img}</td>
              <td>{item.owner}</td>
              <td>
                <button
                  onClick={() => deleteItem(item._id)}
                  className='btn btn-danger'
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className='btn btn-primary'
                  onClick={() => isVeryfication(item._id)}
                >
                  Veryfication
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Veryfication;
