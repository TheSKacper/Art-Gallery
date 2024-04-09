import React, { useContext, useEffect, useState } from 'react';
import './shop.css';
import axios from 'axios';
import { MyContext } from '../../context/Context';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const [listOfPaints, setListOfPaints] = useState([]);
  const context = useContext(MyContext);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    getAllPictures();
  }, []);

  const getAllPictures = () => {
    try {
      axios
        .get('http://localhost:3001/api/shop/')
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
        .delete('http://localhost:3001/api/shop/' + id)
        .then((response) => {
          console.log('deleted');
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
      context.notify('To buy anything you have to have your account', {
        type: 'error',
      });
      navigate('/login');
    } else if (context.data.isLogin === true) {
      context.notify('Added', { type: 'success' });
      const updatedShop = Array.isArray(context.data.shop)
        ? [...context.data.shop, id]
        : [id];
      let priceArray = listOfPaints
        .filter((shop) => shop._id === id)
        .map((shop) => parseFloat(shop.price));

      let price = priceArray.length > 0 ? priceArray[0] : 0;
      console.log(price)

      setCount((prevCount) => prevCount + price);
      console.log(count)

      context.setData({
        ...context.data,
        isShop: true,
        shop: updatedShop,
        count: count,
      });
      console.log(context.data)
    }
  };

  return (
    <div className='containerShop'>
      <div className='container box-shop'>
        <div className='row text-center'>
          {listOfPaints.map((item) => (
            <div key={item._id} className='col-md-4'>
              <div className='card'>
                <img src={item.img} className='card-img-top' alt={item.title} />
                <div className='card-body'>
                  <h5 className='card-title'>{item.title}</h5>
                  <p className='card-owner'>Mr/Ms {item.owner}</p>
                  <p className='card-price'>{item.price}$</p>
                  <button
                    onClick={(e) => addPaint(e, item._id)}
                    className='btn btnShop'
                  >
                    Buy
                  </button>
                </div>

                {context.data.role === 'admin' ? (
                  <button
                    className='btn btnShopDelete'
                    data-bs-toggle='modal'
                    data-bs-target='#exampleModal'
                  >
                    X
                  </button>
                ) : null}
              </div>
              <div
                className='modal fade'
                id='exampleModal'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'
              >
                <div className='modal-dialog text-uppercase'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h1
                        className='modal-title fs-5 text-uppercase title-modal'
                        id='exampleModalLabel'
                      >
                        Delete
                      </h1>
                      <button
                        type='button'
                        className='btn-close'
                        data-bs-dismiss='modal'
                        aria-label='Close'
                      ></button>
                    </div>
                    <div className='modal-body'>
                      Are you sure to delete this item ?
                    </div>
                    <div className='modal-footer'>
                      <button
                        type='button'
                        className='btn btn-secondary'
                        data-bs-dismiss='modal'
                      >
                        No
                      </button>
                      <button
                        type='button'
                        className='btn btn-danger'
                        onClick={() => deletePaint(item._id)}
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
