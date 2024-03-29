import { useState } from "react";
import Cakes from "../components/Cakes";

const CakeContainer = ({}) => {

    const [cakes, setCakes] = useState([
        { title: "Victoria Cake", rating: 3, ingredients: "eggs, butter, sugar, self-raising flour, baking powder, milk", price: 10 },
        { title: "Tea Loaf", rating: 4, ingredients: "eggs, oil, dried fruit, sugar, self-raising flour, strong tea", price: 2 },
        { title: "Carrot Cake", rating: 5, ingredients: "carrots, walnuts, oil, cream cheese, flour, sugar", price: 3 }
    ]);



    const average = () => {
        const totalAverage = cakes.reduce ((acc, cake) => 
        acc + cake.rating, 0);
        return totalAverage / cakes.length;
    }
    return (
        <>
            <h2>Cakes:</h2>
            {cakes.map((cake, index) => (
                <Cakes
                    title={cake.title}
                    rating={cake.rating}
                    ingredients={cake.ingredients}
                    price={cake.price}
                />
            ))}
            <h3 className="averagerating">Average Rating: {average()}</h3>
        </>
    );
    
}
export default CakeContainer;