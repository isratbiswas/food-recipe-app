import { createContext, useEffect, useState } from "react";

// create context
export const FoodContext = createContext();

export const FoodProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch all meals
  const fetchMeals = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );

      const data = await res.json();

      setMeals(data.meals || [setLoading(false)]);
    } catch (error) {
      console.log("fetch does not successfully", error);
      setLoading(false);
    }
  };

  // Fatch Categories ways
  const fetchCategories = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    const data = await res.json();
    setCategories(data.categories || []);
  };

  // search Meals by name
  const searchMealsByName = async (query) => {
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  // search meals by Categories
  const searchMealsByCategories = async (categories) => {
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };
  useEffect(() => {
    fetchMeals();
    fetchCategories();
  }, []);

  return (
    <FoodContext.Provider
      value={{
        meals,
        loading,
        categories,
        fetchMeals,
        searchMealsByName,
        searchMealsByCategories,
        fetchCategories,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};
