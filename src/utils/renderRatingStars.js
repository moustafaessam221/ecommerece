function renderRatingStars(rating, size = "sm") {
  return [...Array(5)].map((_, i) => (
    <span
      key={i}
      className={`text-${size} ${
        i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
      }`}
    >
      ★
    </span>
  ));
}

export default renderRatingStars;
