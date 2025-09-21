import { FaUtensils, FaSearch, FaHeart, FaBook } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaUtensils className="text-green-500 text-3xl  mb-3" />,
      title: "Explore Recipes",
      desc: "Discover delicious recipes from around the world.",
    },
    {
      icon: <FaSearch className="text-green-500 text-3xl mb-3" />,
      title: "Search by Ingredients",
      desc: "Find meals with the ingredients you already have.",
    },
    {
      icon: <FaHeart className="text-green-500 text-4xl mb-3" />,
      title: "Save Favorites",
      desc: "Bookmark your favorite recipes for quick access.",
    },
    {
      icon: <FaBook className="text-green-500 text-4xl mb-3" />,
      title: "Easy Cooking Guides",
      desc: "Step-by-step instructions for every meal.",
    },
  ];
  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-6xl  mx-auto text-center mt-6 ">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
