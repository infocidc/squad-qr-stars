
interface PlayerRatingProps {
  rating?: number;
}

const PlayerRating = ({ rating = 0 }: PlayerRatingProps) => {
  return (
    <div className="rating-stars">
      {[...Array(5)].map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
      ))}
    </div>
  );
};

export default PlayerRating;
