import './directory-item_styles.scss'

const DirectoryItem = ({ category }) =>{

    const {title, imageUrl} = category;
    
    return(

            
            <div className='directory-item-container'>
              <div className='background-image' style={{
                backgroundImage: `url(${imageUrl})`
              }}></div>
              <div className='directory-item-body'>
                <h2>{title}</h2>
                <p>shop Now</p>
              </div>
            </div>
        


    );
}

export default DirectoryItem;