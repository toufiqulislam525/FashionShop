import { useContext } from 'react';

import { CartContext } from '../../contexts/cart_context';

import Button from '../button/button_component';
import './cart-dropdown_styles.scss';
import CartItem from '../cart-item/cart-item_component';

const CartDropDown =()=>{
    const {cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) =>(
                    <CartItem key={item.id} cartItem={item}/>

                ))}
                
            </div>
            <Button> Go to Checkout </Button>
        </div>
    );
};

export default CartDropDown;