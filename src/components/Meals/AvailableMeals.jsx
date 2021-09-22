import { useState } from "react";
//Dommy Data
import Data from "../../Meals.Data.js";
//Styles
import classes from "./AvailableMeals.module.css";
//Components
import Card from "../UI/Card.jsx";
import MealItem from "./MealItem/MealItem.jsx";

const AvailableMeals = () => {
  const [mealData, setMealData] = useState(Data);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealData.map((meal) => {
            return <MealItem key={meal.id} meal={meal} />;
          })}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
