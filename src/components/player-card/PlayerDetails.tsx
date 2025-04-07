
import PlayerInfoBadge from "./PlayerInfoBadge";
import PlayerBadge from "./PlayerBadge";
import PlayerFlag from "./PlayerFlag";

interface PlayerDetailsProps {
  age?: number;
  height?: number;
  caps?: number;
  goals?: number;
  flagCode?: string;
  country: string;
}

const PlayerDetails = ({ 
  age, 
  height, 
  caps, 
  goals, 
  flagCode, 
  country 
}: PlayerDetailsProps) => {
  return (
    <div className="flex p-4">
      {/* Left side - Info */}
      <div className="w-7/12 pr-2">
        <div className="space-y-2">
          {age && <PlayerInfoBadge label="INFO" value={`${age} yrs`} />}
          {height && <PlayerInfoBadge label="INFO" value={`${height} cm`} />}
          {caps && <PlayerInfoBadge label="INFO" value={`${caps} caps`} />}
          {goals && <PlayerInfoBadge label="INFO" value={`${goals} goals`} />}
        </div>
      </div>
      
      {/* Right side - Badge & Flag */}
      <div className="w-5/12 flex flex-col items-center">
        <PlayerBadge />
        <PlayerFlag flagCode={flagCode} country={country} />
      </div>
    </div>
  );
};

export default PlayerDetails;
