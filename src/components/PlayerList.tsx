
import { Link } from "react-router-dom";
import { Player } from "@/types";
import PlayerCard from "@/components/PlayerCard";
import { Button } from "@/components/ui/button";

interface PlayerListProps {
  players: Player[];
  resetFilters: () => void;
}

const PlayerList = ({ players, resetFilters }: PlayerListProps) => {
  if (players.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">No players found matching your filters.</p>
        <Button 
          onClick={resetFilters} 
          className="mt-4 bg-sport-pink hover:bg-sport-navy"
        >
          Clear Filters
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {players.map((player) => (
        <Link 
          to={`/player/${player.id}`} 
          key={player.id}
          className="block transform transition duration-300 hover:scale-105"
        >
          <PlayerCard player={player} />
        </Link>
      ))}
    </div>
  );
};

export default PlayerList;
