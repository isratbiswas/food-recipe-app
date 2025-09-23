import React from "react";
import { Link } from "react-router-dom";

const Category = ({ meal }) => {
  return (
    <div>
      <div className=" shadow-md p-4 rounded">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-lg font-bold mt-2">Name:{meal.strMeal}</h2>
        <h4 className="m-2">Country:{meal.strArea} Cuisine</h4>
        <p className="text-gray-600">
          <span className="text-1xl font-semibold">Instruction : </span>
          {meal.strInstructions.slice(0, 140)} ...
        </p>
        {/* <video src={meal.strYoutube}>video </video> */}
        <Link to={`/recipeDetail/${meal.idMeal}`}>
          <button className="bg-green-600 text-white px-6 rounded-full hover:bg-green-800 hover:text-white py-2 m-4">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Category;
