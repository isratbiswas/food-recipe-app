import React from "react";

const Category = ({ meal }) => {
  return (
    <div>
      <div className=" shadow-md p-4 rounded">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="w-full h-48 object-cover rounded"
        />
        <h3 className="text-lg font-bold mt-2">Name:{meal.strMeal}</h3>
        <h4>Country:{meal.strArea} Cuisine</h4>
        <h4>Instruction:{meal.strInstructions.slice(0, 140)}</h4>
        {/* <video src={meal.strYoutube}>video </video> */}
        <button className="bg-green-600 text-white px-6 rounded-full hover:bg-green-800 hover:text-white py-2 m-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Category;
