
import { useState, useEffect } from "react";
import { Player } from "@/types";

const usePlayerFilters = (players: Player[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedPosition, setSelectedPosition] = useState<string>("");
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
      
      // Filter by position
      if (selectedPosition && selectedPosition !== "all-positions") {
        result = result.filter(player => player.position === selectedPosition);
      }
      
      setFilteredPlayers(result);
    }
  }, [players, searchTerm, selectedCountry, selectedPosition]);

  const handleReset = () => {
    setSearchTerm("");
    setSelectedCountry("");
    setSelectedPosition("");
  };

  return {
    searchTerm,
    setSearchTerm,
    selectedCountry,
    setSelectedCountry,
    selectedPosition,
    setSelectedPosition,
    filteredPlayers,
    handleReset
  };
};

export default usePlayerFilters;
