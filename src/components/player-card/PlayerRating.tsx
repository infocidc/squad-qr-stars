
import { Star } from "lucide-react";

interface PlayerRatingProps {
  rating?: number;
}

const PlayerRating = ({ rating = 0 }: PlayerRatingProps) => {
  return (
    <div className="rating-stars flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
        />
      ))}
    </div>
  );
};

export default PlayerRating;
