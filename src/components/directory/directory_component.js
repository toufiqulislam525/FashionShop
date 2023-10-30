import './categories.styles.scss'
import CategoryItem from '../category-item/category-item_component' 


const Directory = ({categories})=>{

    return(
        <div className = "categories-container outerdiv">
          {
            categories.map( 
              (category) => 
              (
                <CategoryItem key={category.id}  category={category} />
                  
              ))
          }
      </div>

    );
}

export default Directory;