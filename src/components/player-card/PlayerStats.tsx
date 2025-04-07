
import PlayerRating from "./PlayerRating";
import PlayerStat from "./PlayerStat";

interface PlayerStatsProps {
  club: string;
  position: string;
  rating?: number;
}

const PlayerStats = ({ club, position, rating }: PlayerStatsProps) => {
  const getPositionAbbreviation = (position: string) => {
    const posMap: Record<string, string> = {
      "Forward": "FW",
      "Midfielder": "MF",
      "Defender": "DF",
      "Goalkeeper": "GK",
    };
    return posMap[position] || position;
  };

  // Generate random but consistent stat values
  const getPaceValue = () => 70 + Math.floor(Math.random() * 30);
  const getShootingValue = () => 70 + Math.floor(Math.random() * 30);
  const getPassingValue = () => 70 + Math.floor(Math.random() * 30);

  return (
    <div className="w-7/12">
      <PlayerRating rating={rating} />
      <div className="text-xs mt-2 mb-3 text-gray-300">
        {club} • {getPositionAbbreviation(position)}
      </div>
      
      {/* Stats bars */}
      <div className="space-y-2">
        <PlayerStat label="PACE" value={getPaceValue()} />
        <PlayerStat label="SHOOTING" value={getShootingValue()} />
        <PlayerStat label="PASSING" value={getPassingValue()} />
      </div>
    </div>
  );
};

export default PlayerStats;
