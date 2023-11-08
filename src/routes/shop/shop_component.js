
import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview_component';

import './shop_styles.scss';


const Shop = ()=>{
    

    return(
        
        <Routes>
            <Route index element={<CategoriesPreview/>} >

            </Route>
        </Routes>
        
    );
}

export default Shop;