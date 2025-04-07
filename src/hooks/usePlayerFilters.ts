
import { useState, useEffect } from "react";
import { Player } from "@/types";

const usePlayerFilters = (players: Player[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [filteredPlayers, setFilteredPlayers] = useState<Player[]>([]);

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

  return {
    searchTerm,
    setSearchTerm,
    selectedCountry,
    setSelectedCountry,
    filteredPlayers,
    handleReset
  };
};

export default usePlayerFilters;
