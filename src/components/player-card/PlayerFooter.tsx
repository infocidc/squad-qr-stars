
import QRCode from "../QRCode";
import PlayerStats from "./PlayerStats";

interface PlayerFooterProps {
  club: string;
  position: string;
  rating?: number;
  id: string;
  name: string;
}

const PlayerFooter = ({ club, position, rating, id, name }: PlayerFooterProps) => {
  // Create a URL-friendly player name for QR code
  const playerUrlData = `https://worldcup.example/player/${id}/${encodeURIComponent(name)}`;
  
  return (
    <div className="p-4 bg-sport-navy text-white flex">
      {/* Left: Rating & Stats */}
      <PlayerStats club={club} position={position} rating={rating} />
      
      {/* Right: QR Code */}
      <div className="w-5/12 flex justify-end items-center">
        <QRCode value={playerUrlData} size={80} className="bg-white p-1 rounded" />
      </div>
    </div>
  );
};

export default PlayerFooter;
