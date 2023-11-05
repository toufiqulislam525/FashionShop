import { Link, Outlet } from "react-router-dom"
import { Fragment, useContext } from "react";
import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import './navigation_styles.scss';
import { UserContext } from "../../contexts/user_context";
import { CartContext } from "../../contexts/cart_context";
import { signOutUser } from "../../utils/firebase/firebase_utils";
import  CartIcon from "../../components/cart-icon/cart-icon_component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown_component";

const Navigation =() =>
{
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  const signOutHandler = async ()=>{
    await signOutUser();
    

  }

  return(
    <Fragment>
      <div className="navigation">

        <Link className="logo-container" to='/'>
            <CrwnLogo className='logo'/>
        </Link>
        
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            {
              currentUser ? 
              (
              <span className="nav-link" onClick={signOutHandler}> 
                Sign Out
              </span>
              ):
              (
              <Link className="nav-link" to='/auth'>
                  Sign In
              </Link>
               )
            }

            <Link className='nav-link'>
               <CartIcon />
            </Link>
            
            
        </div>

        {isCartOpen && <CartDropDown/>}
      </div>
      
      <Outlet/>
    </Fragment>
  )
}

export default Navigation;