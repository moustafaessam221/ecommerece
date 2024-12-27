import React from "react";
import ReviewCard from "./ReviewCard";

function ReviewsList({ reviews }) {
  // Calculate average rating
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  // Count ratings distribution
  const ratingDistribution = Array(5).fill(0);
  reviews.forEach((review) => {
    ratingDistribution[review.rating - 1]++;
  });

  return (
    <div className="mt-16">
      <div className="border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Customer Reviews
        </h2>

        {/* Reviews Summary */}
        <div className="flex gap-8 mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex gap-1 justify-center mb-1">
              {[...Array(5)].map((_, index) => (
                <span key={index} className="text-xl text-yellow-400">
                  {index < Math.round(averageRating) ? "★" : "☆"}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-500">
              Based on {reviews.length} reviews
            </p>
          </div>

          {/* Rating Distribution */}
          <div className="flex-1">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-2 mb-2">
                <div className="text-sm text-gray-600 w-6">{rating}★</div>
                <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{
                      width: `${(ratingDistribution[rating - 1] / reviews.length) * 100}%`,
                    }}
                  />
                </div>
                <div className="text-sm text-gray-500 w-10">
                  {ratingDistribution[rating - 1]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews List */}
        <div className="grid gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ReviewsList;
