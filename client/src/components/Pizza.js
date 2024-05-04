import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartAction';

export default function Pizza({ pizza }) {
  const [quantity, setQuantity] = useState(1);
  const [variants, setVariant] = useState('small');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addtocart = () => {
    if (variants && quantity > 0) {
      dispatch(addToCart(pizza, quantity, variants));
      console.log(pizza, quantity, variants);
    } else {
      alert('Please select variants and quantity');
    }
  };

  return (
    <div className='shadow-lg p-3 mb-5 bg-white rounded'>
      <div onClick={handleShow}>
        <h1>{pizza.name}</h1>
        <img src={pizza.image} className='img-fluid' style={{ height: '200px', width: '200px' }} alt={pizza.name} />
      </div>

      <div className='flex-container'>
        <div className='w-100 m-1'>
          <p>Variants</p>
          <select className='form-control' value={variants} onChange={(e) => setVariant(e.target.value)}>
            {pizza.varients.map((variant, index) => (
              <option key={index} value={variant}>
                {variant}
              </option>
            ))}
          </select>
        </div>
        <div className='w-100 m-1'>
          <p>Quantity</p>
          <select className='form-control' value={quantity} onChange={(e) => setQuantity(e.target.value)}>
            {[...Array(10).keys()].map((index) => (
              <option key={index + 1} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex-container'>
        <div className='m-1 w-100'>
          <h1 className='mt-1'>Price: {pizza.price[0][variants] * quantity} Rs/-</h1>
        </div>
        <div className='m-1 w-100'>
          <button className='btn' onClick={addtocart}>
            ADD TO CART
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={pizza.image} className='img-fluid' style={{ height: '400px' }} alt={pizza.name} />
          <p>{pizza.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <button className='btn' onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
