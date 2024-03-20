const Cakes = ({ title, rating, ingredients, price }) => {
    return (
      <>
        <h3>{title} :</h3>
        <h4>Ingredients: {ingredients}</h4>
        <h4>Price: £{price}</h4>
        <h4>Current Rating: {rating}</h4>
      </>
    );
  }
  
  export default Cakes;
  