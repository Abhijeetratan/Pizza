import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {addToCart} from '../actions/cartAction'
import { deleteFromCart } from '../actions/cartAction'  
export default function Cartscreen() {

    const cartstate = useSelector(state=>state.cartReducer)
    const cartItems = cartstate.cartItems
    var subtotal = cartItems.reduce((x,items)=>x+items.price, 0)
    const dispatch = useDispatch()
    
    
  return (
    <div>
      <div className="row justify-content-center">

        <div className="col-md-6">
            <h2 style={{fontSize: '40px'}}>My Cart</h2>

            {cartItems.map(items=>{
                return <div className='flex container'>

    <div className='d-flex justify-content-between align-items-center' style={{ margin: '10px' }}>
        <div>
            <h1>{items.name} [{items.varient}]</h1>
            <h1>Price: {items.quantity} *{items.prices[0][items.varient]} = {items.price}</h1>

            <h1 style={{ display: 'inline' }}>Quantity:</h1>
            <i className="fa fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(items , items.quantity+1 , items.varient))}}></i>
            <b>{items.quantity}</b>
            <i className="fa fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(items , items.quantity-1 , items.varient))}}> </i>
            <hr/>
        </div>
        <div className='m-1 '>
            <img src={items.image} style={{ height: '80px', width: '80px' }} alt='nm'/>
        </div>
        <div className='m-1 '>
            <i className="fa fa-trash mt-2" aria-hidden="true" onClick={()=>{dispatch(deleteFromCart(items))}}></i>
        </div>
    </div>

</div>  
 })}
        </div>
        <div className="col-md-4 text-right">
            <h2 style={{fontSize: '45px'}}>Subtotal :{subtotal}</h2>
            <button className='btn'></button>
        </div>

      </div>
    </div>
  )
}

