import { CartContext } from '../../contexts/cart_context';
import './checkout_styles.scss';
import { useContext } from 'react';

const CheckOut = ()=>{
    const {cartItems, addItemToCart,removeItemFromCart} = useContext(CartContext);
    
    
    return (
        <div>
            <h1>I am the checkout page</h1>
            <div>
            {
                
                cartItems.map((cartItem)=>{
                    const {id,name,price,quantity} = cartItem
                    return(
                        <div key={id}>
                            <h2>{name}</h2>
                            <span>{quantity} x {price}</span>
                            <br/>
                            <span onClick={()=>removeItemFromCart(cartItem)}>Decrement</span>
                            <span onClick={()=>addItemToCart(cartItem)}>Increment</span>
                        </div>
                        )
                        
                })              
            }
            </div>
        </div>
    );
};

export default CheckOut;