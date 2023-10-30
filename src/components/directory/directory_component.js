import './directory_styles.scss'
import CategoryItem from '../category-item/category-item_component' 


const Directory = ({categories})=>{

    return(
        <div className = "directory-container outerdiv">
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