import React from "react";
import renderRatingStars from "../../../utils/renderRatingStars";

function ReviewCard({ review }) {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
      <div className="flex items-start justify-between">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
            {review.reviewerName.charAt(0)}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {review.reviewerName}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-1">
                {renderRatingStars(review.rating, "lg")}
              </div>
              <span className="text-sm text-gray-500">
                {formatDate(review.date)}
              </span>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-gray-600">{review.comment}</p>
    </div>
  );
}

export default ReviewCard;
