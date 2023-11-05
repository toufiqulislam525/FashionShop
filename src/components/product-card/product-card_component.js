import { useContext } from 'react';
import { CartContext } from '../../contexts/cart_context';



import './product-card_styles.scss';
import Button from '../button/button_component';

const ProductCard = ({product})=>{
    const {name,imageUrl,price} = product;
    const {addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);
    
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}$</span>

            </div>
            <Button onClick={addProductToCart} >Add to cart</Button>
        </div>

    );

}

export default ProductCard;