const App =() =>{

  const categories = [
    {
      id : 1,
      title : 'Hats'
    },
    {
      id : 2,
      title : 'Jackets'
    },
    {
      id : 3,
      title : 'Sneakers'
    },
    {
      id : 4,
      title : 'Men'
    },
    {
      id : 5,
      title : 'Women'
    }
  ]

  return (
      <div className = "categories-container outerdiv">
          {
            categories.map( 
              ({id,title}) => 
              (
                  <div key = {id} className='category-container'>
                    <div className='background-image'></div>
                    <div className='category-body-container'>
                      <h2>{title}</h2>
                      <p>shop Now</p>
                    </div>
                  </div>
              ))
          }
      </div>
  );
}

export default App;
