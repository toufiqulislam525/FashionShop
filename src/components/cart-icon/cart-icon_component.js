import './cart-icon_styles.scss';
import {ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart_context';
const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return(

        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>10</span>

        </div>
    );
};

export default CartIcon;