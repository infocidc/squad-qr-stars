
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getPlayers, getTeams } from "@/services/playerService";
import { Player, Team } from "@/types";
import PlayerCard from "@/components/PlayerCard";
import { Loader2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

  const { 
    data: players = [], 
    isLoading: playersLoading 
  } = useQuery({
    queryKey: ["players"],
    queryFn: getPlayers
  });

  const { 
    data: teams = [], 
    isLoading: teamsLoading 
  } = useQuery({
    queryKey: ["teams"],
    queryFn: getTeams
  });

  useEffect(() => {
    if (players) {
      let result = [...players];
      
      // Filter by search term
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        result = result.filter(player => 
          player.name.toLowerCase().includes(term) || 
          player.club.toLowerCase().includes(term) || 
          player.position.toLowerCase().includes(term)
        );
      }
      
      // Filter by country
      if (selectedCountry && selectedCountry !== "all-countries") {
        result = result.filter(player => player.country === selectedCountry);
      }
      
      setFilteredPlayers(result);
    }
  }, [players, searchTerm, selectedCountry]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCountry("");
  };

  if (playersLoading || teamsLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="h-10 w-10 animate-spin text-sport-pink" />
        <p className="mt-4 text-sport-gray">Loading players...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-sport-navy text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            CIDC - X73 - <span className="text-sport-pink">Cloud Computing</span>
          </h1>
          <p className="text-center text-gray-300 mt-2">
            Complete guide to all players with individual QR codes
          </p>
        </div>
      </header>

      {/* Filters */}
      <div className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Search players by name, club, or position..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-300"
              />
            </div>
            
            <div className="w-full md:w-64">
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-countries">All Countries</SelectItem>
                  {teams.map((team) => (
                    <SelectItem key={team.id} value={team.name}>
                      {team.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              variant="outline" 
              onClick={handleReset}
              className="border-sport-navy text-sport-navy hover:bg-sport-navy hover:text-white"
            >
              Reset Filters
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-sport-navy">
            {filteredPlayers.length} Player{filteredPlayers.length !== 1 ? 's' : ''} Found
          </h2>
        </div>
        
        {filteredPlayers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredPlayers.map((player) => (
              <Link 
                to={`/player/${player.id}`} 
                key={player.id}
                className="block transform transition duration-300 hover:scale-105"
              >
                <PlayerCard player={player} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-500">No players found matching your filters.</p>
            <Button 
              onClick={handleReset} 
              className="mt-4 bg-sport-pink hover:bg-sport-navy"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-sport-navy text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-300">
            CIDC - X73 - Cloud Computing - Data referenced from The Guardian
          </p>
          <p className="text-xs text-gray-400 mt-2">
            &copy; {new Date().getFullYear()} Football Squad Cards
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
