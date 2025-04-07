import { Link } from "react-router-dom";
import { Player } from "@/types";
import PlayerCard from "@/components/PlayerCard";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PlayerListProps {
  players: Player[];
  resetFilters: () => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  pageSize: number;
}

const PlayerList = ({ 
  players, 
  resetFilters, 
  currentPage, 
  setCurrentPage, 
  pageSize 
}: PlayerListProps) => {
  // Calculate total pages
  const totalPages = Math.ceil(players.length / pageSize);
  
  // Get current players for this page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentPlayers = players.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentPlayers.map((player) => (
          <Link 
            to={`/player/${player.id}`} 
            key={player.id}
            className="block transform transition duration-300 hover:scale-105"
          >
            <PlayerCard player={player} />
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="mt-8">
          <PaginationContent>
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationPrevious 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                  }} 
                />
              </PaginationItem>
            )}

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show first 3 pages, current page, and last page if many pages
              let pageNumber;
              
              if (totalPages <= 5) {
                // If 5 or fewer pages, show all page numbers
                pageNumber = i + 1;
              } else if (currentPage <= 3) {
                // If on first 3 pages, show pages 1-5
                pageNumber = i + 1;
              } else if (currentPage >= totalPages - 2) {
                // If on last 3 pages, show last 5 pages
                pageNumber = totalPages - 4 + i;
              } else {
                // Otherwise show 2 before current, current, and 2 after current
                pageNumber = currentPage - 2 + i;
              }
              
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationLink 
                    href="#" 
                    isActive={currentPage === pageNumber}
                    onClick={(e) => {
                      e.preventDefault();
                      handlePageChange(pageNumber);
                    }}
                  >
                    {pageNumber}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationNext 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                  }} 
                />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
};

export default PlayerList;
