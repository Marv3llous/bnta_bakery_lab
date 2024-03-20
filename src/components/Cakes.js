const Cakes = ({ title, rating, ingredients, price }) => {
    return (
      <>
        <h3>{title} :</h3>
        <h4>Ingredients: {ingredients}</h4>
        <h5>Price: £{price}</h5>
        <h5>Current Rating: {rating}</h5>
      </>
    );
  }
  
  export default Cakes;
  