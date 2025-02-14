import React from "react";
import ReviewCard from "../components/reviewCard.js";

const Review = () => {
  // Hardcoded reviews for Bose headphones
  const reviews = [
    {
      id: 1,
      review: "The sound quality is amazing! Bose never disappoints.",
      rating: 5,
      author: "John Doe",
    },
    {
      id: 2,
      review: "Comfortable to wear for long hours. Great noise cancellation!",
      rating: 4,
      author: "Jane Smith",
    },
    {
      id: 3,
      review: "Best headphones I've ever owned. Worth every penny.",
      rating: 5,
      author: "Alice Johnson",
    },
    {
      id: 4,
      review: "The bass is incredible. Perfect for music lovers.",
      rating: 5,
      author: "Bob Brown",
    },
    {
      id: 5,
      review: "Sleek design and excellent build quality.",
      rating: 4,
      author: "Charlie Davis",
    },
    {
      id: 6,
      review: "The battery life is impressive. Lasts all day!",
      rating: 5,
      author: "Eve Wilson",
    },
  ];

  return (
    <div className="p-8 w-[100vw] overflow-hidden">
      <h1 className="text-3xl font-pressStart text-4xl text-yellow mb-6 text-center">
        Customer Reviews
      </h1>
      <div className="flex space-x-4 animate-infinite-scroll">
        {/* Duplicate reviews for infinite scroll effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <div key={`${review.id}-${index}`} className="flex-shrink-0 w-80">
            <ReviewCard review={review.review} rating={review.rating} author={review.author} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;