import './directory_styles.scss'
import DirectoryItem from '../category-item/directory-item_component'; 


const Directory = ({categories})=>{

    return(
        <div className = "directory-container outerdiv">
          {
            categories.map( 
              (category) => 
              (
                <DirectoryItem key={category.id}  category={category} />
                  
              ))
          }
      </div>

    );
}

export default Directory;