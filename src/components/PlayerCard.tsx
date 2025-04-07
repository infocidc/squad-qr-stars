
import { Player } from "@/types";
import { cn } from "@/lib/utils";
import PlayerHeader from "./player-card/PlayerHeader";
import PlayerDetails from "./player-card/PlayerDetails";
import PlayerImage from "./player-card/PlayerImage";
import PlayerFooter from "./player-card/PlayerFooter";

interface PlayerCardProps {
  player: Player;
  className?: string;
}

const PlayerCard = ({ player, className }: PlayerCardProps) => {
  return (
    <div 
      className={cn(
        "player-card relative w-full max-w-xs bg-white rounded-lg overflow-hidden shadow-lg",
        className
      )}
    >
      <PlayerHeader position={player.position} squadNumber={player.squad_number} />
      
      <PlayerDetails 
        age={player.age}
        height={player.height}
        caps={player.caps}
        goals={player.goals}
        flagCode={player.flagCode}
        country={player.country}
      />
      
      <PlayerImage name={player.name} position={player.position} />
      
      <div className="bg-sport-pink text-white py-2 px-4 font-bold text-xl">
        {player.name}
      </div>
      
      <PlayerFooter 
        club={player.club}
        position={player.position}
        rating={player.rating}
        id={player.id}
        name={player.name}
      />
    </div>
  );
};

export default PlayerCard;
