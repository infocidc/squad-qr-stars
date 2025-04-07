
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getPlayers, getTeams, seedPlayersToSupabase } from "@/services";
import { toast } from "@/hooks/use-toast";
import usePlayerFilters from "@/hooks/usePlayerFilters";
import LoadingSpinner from "@/components/LoadingSpinner";
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
import PlayerFilters from "@/components/PlayerFilters";
import PlayerList from "@/components/PlayerList";

const PLAYERS_PER_PAGE = 20;

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Run the seed function on first load
  useEffect(() => {
    const initializeData = async () => {
      try {
        await seedPlayersToSupabase();
      } catch (error) {
        console.error("Failed to seed player data:", error);
        toast({
          title: "Data Loading Issue",
          description: "There was a problem loading player data. Some features may be limited.",
          variant: "destructive",
        });
      }
    };

    initializeData();
  }, []);

  const { 
    data: players = [], 
    isLoading: playersLoading,
    error: playersError
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

  // Handle errors with player data
  useEffect(() => {
    if (playersError) {
      console.error("Error loading players:", playersError);
      toast({
        title: "Error",
        description: "Failed to load player data. Please try again later.",
        variant: "destructive",
      });
    }
  }, [playersError]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filteredPlayers.length]);

  const {
    searchTerm,
    setSearchTerm,
    selectedCountry,
    setSelectedCountry,
    selectedPosition,
    setSelectedPosition,
    filteredPlayers,
    handleReset
  } = usePlayerFilters(players);

  if (playersLoading || teamsLoading) {
    return <LoadingSpinner message="Loading players..." />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <PageHeader 
        title="CIDC - X73 - Cloud Computing" 
        subtitle="Complete guide to all players with individual QR codes"
      />

      {/* Filters */}
      <PlayerFilters 
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedPosition={selectedPosition}
        setSelectedPosition={setSelectedPosition}
        handleReset={handleReset}
        teams={teams}
      />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-sport-navy">
            {filteredPlayers.length} Player{filteredPlayers.length !== 1 ? 's' : ''} Found
            {filteredPlayers.length > 0 && (
              <span className="text-sm font-normal ml-2 text-gray-500">
                (Showing {Math.min(PLAYERS_PER_PAGE, filteredPlayers.length)} per page)
              </span>
            )}
          </h2>
        </div>
        
        <PlayerList 
          players={filteredPlayers} 
          resetFilters={handleReset} 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageSize={PLAYERS_PER_PAGE}
        />
      </main>

      {/* Footer */}
      <PageFooter />
    </div>
  );
};

export default Index;
