
import { useState } from "react";

interface PlayerImageProps {
  name: string;
  position: string;
}

const PlayerImage = ({ name, position }: PlayerImageProps) => {
  const [imageError, setImageError] = useState(false);
  
  const getPositionAbbreviation = (position: string) => {
    const posMap: Record<string, string> = {
      "Forward": "FW",
      "Midfielder": "MF",
      "Defender": "DF",
      "Goalkeeper": "GK",
    };
    return posMap[position] || position;
  };
  
  // Generate a placeholder image URL based on player's name and position for consistent results
  const getPlayerImageUrl = () => {
    return `https://source.unsplash.com/300x400/?football,player,${position.toLowerCase()}`;
  };

  return (
    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
      {imageError ? (
        <div className="text-gray-400 text-6xl">
          {getPositionAbbreviation(position)}
        </div>
      ) : (
        <img 
          src={getPlayerImageUrl()}
          alt={name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
          loading="lazy"
        />
      )}
    </div>
  );
};

export default PlayerImage;
