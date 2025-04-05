
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getPlayerById } from "@/services/playerService";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import PlayerCard from "@/components/PlayerCard";

const PlayerDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  const { data: player, isLoading, error } = useQuery({
    queryKey: ["player", id],
    queryFn: () => getPlayerById(id || ""),
    enabled: !!id,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-sport-pink" />
        <p className="mt-4 text-sport-gray">Loading player details...</p>
      </div>
    );
  }

  if (error || !player) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-sport-navy">Player Not Found</h1>
        <p className="mt-2 text-sport-gray">We couldn't find the player you're looking for.</p>
        <Button asChild className="mt-6 bg-sport-navy hover:bg-sport-pink">
          <Link to="/">Back to Players</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto px-4 py-8">
      <Button 
        asChild 
        variant="outline" 
        className="mb-8 border-sport-navy text-sport-navy hover:bg-sport-navy hover:text-white"
      >
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to All Players
        </Link>
      </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 max-w-sm mx-auto">
          <PlayerCard player={player} />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-sport-navy mb-2">{player.name}</h1>
          <h2 className="text-xl text-sport-pink mb-6">{player.country} - #{player.squad_number}</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-sm uppercase font-semibold text-sport-gray">Position</h3>
              <p className="text-lg">{player.position}</p>
            </div>
            
            <div>
              <h3 className="text-sm uppercase font-semibold text-sport-gray">Club</h3>
              <p className="text-lg">{player.club}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-sm uppercase font-semibold text-sport-gray">Age</h3>
                <p className="text-lg">{player.age} years</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase font-semibold text-sport-gray">Height</h3>
                <p className="text-lg">{player.height} cm</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase font-semibold text-sport-gray">Caps</h3>
                <p className="text-lg">{player.caps}</p>
              </div>
              
              <div>
                <h3 className="text-sm uppercase font-semibold text-sport-gray">Goals</h3>
                <p className="text-lg">{player.goals}</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm uppercase font-semibold text-sport-gray">About</h3>
              <p className="text-base mt-1">
                {player.name} is an international footballer representing {player.country} at the 2018 FIFA World Cup. 
                They currently play for {player.club} and have made {player.caps} appearances for their national team, 
                scoring {player.goals} goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
