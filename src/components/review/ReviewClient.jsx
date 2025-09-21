import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewClient = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      comment:
        "This app made cooking so much easier! I love the step-by-step guides.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      name: "Michael Lee",
      comment:
        "Great recipes! The search by ingredients feature is super useful.",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Carter",
      comment: "I found so many new dishes to try. The UI is simple and clean.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl text-gray-600 font-bold mt-10 mb-10">
          What Our User Says
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-3"
                />
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold m-1 text-gray-700">
                  {review.name}
                </h2>
                {/* stars */}
                <div className="flex text-yellow-400 m-1">
                  {Array(review.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} />
                    ))}
                </div>
              </div>
              {/* review comment */}
              <p className="text-md text-gray-400 m-1">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewClient;
