
import { Player } from "@/types";
import { Badge } from "lucide-react";
import QRCode from "./QRCode";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PlayerCardProps {
  player: Player;
  className?: string;
}

const PlayerCard = ({ player, className }: PlayerCardProps) => {
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

  // Generate stars based on player rating
  const renderRatingStars = () => {
    const rating = player.rating || 0;
    return (
      <div className="rating-stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>★</span>
        ))}
      </div>
    );
  };

  // Create a URL-friendly player name for QR code
  const playerUrlData = `https://worldcup.example/player/${player.id}/${encodeURIComponent(player.name)}`;
  
  // Generate a placeholder image URL based on player's name and position for consistent results
  const getPlayerImageUrl = () => {
    // Using a name hash to get consistent images for the same player
    const nameHash = player.name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return `https://source.unsplash.com/300x400/?football,player,${player.position.toLowerCase()}`;
  };

  return (
    <div 
      className={cn(
        "player-card relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg",
        className
      )}
    >
      {/* Top Header */}
      <div className="flex justify-between items-center bg-sport-navy text-white p-3">
        <div className="font-bold uppercase tracking-wider">
          {player.position}
        </div>
        <div className="squad-number text-sport-pink">
          {player.squad_number}
        </div>
      </div>
      
      {/* Diagonal line below header */}
      <div className="h-3 bg-sport-pink relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sport-navy transform skew-x-45"></div>
      </div>
      
      {/* Player Details Section */}
      <div className="flex p-4">
        {/* Left side - Info */}
        <div className="w-7/12 pr-2">
          <div className="space-y-2">
            <div className="flex items-center rounded-full bg-sport-pink text-white px-3 py-1 text-sm w-min whitespace-nowrap">
              <span className="font-bold mr-2">INFO</span>
              <span>{player.age} yrs</span>
            </div>
            
            <div className="flex items-center rounded-full bg-sport-pink text-white px-3 py-1 text-sm w-min whitespace-nowrap">
              <span className="font-bold mr-2">INFO</span>
              <span>{player.height} cm</span>
            </div>
            
            <div className="flex items-center rounded-full bg-sport-pink text-white px-3 py-1 text-sm w-min whitespace-nowrap">
              <span className="font-bold mr-2">INFO</span>
              <span>{player.caps} caps</span>
            </div>
            
            <div className="flex items-center rounded-full bg-sport-pink text-white px-3 py-1 text-sm w-min whitespace-nowrap">
              <span className="font-bold mr-2">INFO</span>
              <span>{player.goals} goals</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Badge & Flag */}
        <div className="w-5/12 flex flex-col items-center">
          <div className="badge-container mb-3">
            <div className="bg-sport-navy text-white px-4 py-2 rounded-lg border-2 border-sport-pink relative">
              <Badge size={24} className="mb-1" />
              <div className="text-xs font-bold">BADGE</div>
            </div>
          </div>
          
          <div className="flag-container text-center">
            <div className="flex justify-center space-x-1 mb-1">
              {player.flagCode === 'fr' && (
                <>
                  <div className="w-4 h-8 bg-blue-700"></div>
                  <div className="w-4 h-8 bg-white"></div>
                  <div className="w-4 h-8 bg-red-600"></div>
                </>
              )}
              {player.flagCode !== 'fr' && (
                <div className="w-12 h-8 bg-gray-200 flex items-center justify-center text-xs">
                  {player.flagCode?.toUpperCase()}
                </div>
              )}
            </div>
            <div className="text-xs font-bold uppercase">
              {player.country}
            </div>
          </div>
        </div>
      </div>
      
      {/* Player Image */}
      <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden">
        {imageError ? (
          <div className="text-gray-400 text-6xl">
            {getPositionAbbreviation(player.position)}
          </div>
        ) : (
          <img 
            src={getPlayerImageUrl()}
            alt={player.name}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        )}
      </div>
      
      {/* Player Name */}
      <div className="bg-sport-pink text-white py-2 px-4 font-bold text-xl">
        {player.name}
      </div>
      
      {/* Stats & QR Section */}
      <div className="p-4 bg-sport-navy text-white flex">
        {/* Left: Rating & Stats */}
        <div className="w-7/12">
          {renderRatingStars()}
          <div className="text-xs mt-2 mb-3 text-gray-300">
            {player.club} • {getPositionAbbreviation(player.position)}
          </div>
          
          {/* Stats bars */}
          <div className="space-y-2">
            <div className="text-xs">
              <div className="flex justify-between mb-1">
                <span>PACE</span>
                <span className="text-sport-pink">{70 + Math.floor(Math.random() * 30)}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-sport-pink rounded-full" style={{ width: `${70 + Math.floor(Math.random() * 30)}%` }}></div>
              </div>
            </div>
            
            <div className="text-xs">
              <div className="flex justify-between mb-1">
                <span>SHOOTING</span>
                <span className="text-sport-pink">{70 + Math.floor(Math.random() * 30)}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-sport-pink rounded-full" style={{ width: `${70 + Math.floor(Math.random() * 30)}%` }}></div>
              </div>
            </div>
            
            <div className="text-xs">
              <div className="flex justify-between mb-1">
                <span>PASSING</span>
                <span className="text-sport-pink">{70 + Math.floor(Math.random() * 30)}</span>
              </div>
              <div className="h-1.5 w-full bg-gray-700 rounded-full">
                <div className="h-full bg-sport-pink rounded-full" style={{ width: `${70 + Math.floor(Math.random() * 30)}%` }}></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right: QR Code */}
        <div className="w-5/12 flex justify-end items-center">
          <QRCode value={playerUrlData} size={80} className="bg-white p-1 rounded" />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
