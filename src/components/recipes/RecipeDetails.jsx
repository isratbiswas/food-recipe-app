import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";

const RecipeDetails = () => {
  const { idMeal } = useParams();
  const meals = useContext(FoodContext);
  const meal = meals?.meals?.find((meal) => meal.idMeal === idMeal);
  if (!meal) {
    return <div>Loading...</div>; // or a spinner
  }
  return (
    <div className="max-w-5xl mx-auto mt-24 p-4">
      <div className="flex flex-col lg:flex-row shadow-lg rounded-2xl overflow-hidden bg-white">
        {/* // image section */}
        <div className="lg:w-1/2">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-80 lg:h-full object-cover"
          />
        </div>
        {/* content section */}
        <div className="lg:w-1/2 flex flex-col justify-center p-6 ">
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            {meal.strMeal}
          </h3>
          <h4 className="text-lg text-gray-600 mb-2">
            <span className="text-1xl font-semibold"> Country : </span>
            <span className="font-medium">{meal.strArea}</span> Cuisine
          </h4>
          <p className="text-gray-500 font-base leading-relaxed mb-4 text-left ml-4">
            <span className="text-1xl font-bold ">Description : </span>
            {meal.strInstructions}
          </p>
          {/* YouTube Video Embed */}
          {meal.strYoutube && (
            <div className="mt-4 aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 lg:h-72 rounded-lg shadow-md"
                src={meal.strYoutube.replace("watch?v=", "embed/")}
                title="recipe-video"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
