const Cakes = ({ title, rating, ingredients, price }) => {
    return (
      <div className="cakes-design">
        <h3>{title} :</h3>
        <h4>Ingredients: {ingredients}</h4>
        <h5>Price: £{price}</h5>
        <h5>Current Rating: {rating}</h5>
        <button className="button">HUNGRY</button>
      </div>
    );
  }
  
  export default Cakes;
  