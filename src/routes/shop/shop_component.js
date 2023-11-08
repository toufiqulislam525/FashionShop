import { Fragment, useContext } from 'react';
import { CategoriesContext } from '../../contexts/categories_context';
import CategoryPreview from '../../components/category-preview/category-preview_component';
import './shop_styles.scss';


const Shop = ()=>{
    const { categoriesMap } = useContext(CategoriesContext);

    return(
        
        <div className='shop-container'>
            {
                Object.keys(categoriesMap).map((title) =>{
                    const products = categoriesMap[title];
                    return(
                        <CategoryPreview key={title} title={title} products={products}/>
                    )
                    
                })

            }
            
        </div>  
        
    );
}

export default Shop;