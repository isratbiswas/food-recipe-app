import { motion } from "framer-motion";

// Example blog data (replace with real API later)
const blogPosts = [
  {
    id: 1,
    title: "10 Quick & Healthy Breakfast Recipes",
    description:
      "Start your day with these delicious and nutritious breakfast ideas...",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "5 Easy Desserts You Can Make at Home",
    description:
      "Indulge in these simple dessert recipes without going to the bakery...",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "Top 7 Healthy Snacks for Work",
    description:
      "Stay energized during your workday with these tasty and easy snacks...",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80",
    link: "#",
  },
];

const BlogSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-600 text-center mb-4">
          Our Blog
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Explore our latest recipes, tips, and cooking inspiration.
        </p>

        {/* Blog Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white shadow-lg p-6 rounded-lg"
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <a
                  href={post.link}
                  className="inline-block text-green-500 font-medium hover:underline"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
