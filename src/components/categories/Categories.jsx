import React, { useContext } from "react";
import { FoodContext } from "../../context/FoodContext";
import Category from "./Category";

const Categories = ({ children }) => {
  const { meals, loading } = useContext(FoodContext);
  console.log(meals, "ali");

  return (
    <div className="">
      <h3 className="text-2xl font-semibold mt-10 text-gray-800 mt-24">
        Categories
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {meals.map((meal) => (
          <Category key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
