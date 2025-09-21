import React from "react";
import Services from "../components/services/Services";
import ReviewClient from "../components/review/ReviewClient";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Contact from "../components/contact/Contact";
import BlogSection from "../components/blog/BlogSection";

const Home = () => {
  return (
    <div>
      <Services />
      <ReviewClient />
      <NewsLetter />
      <BlogSection />
      <Contact />
    </div>
  );
};

export default Home;
