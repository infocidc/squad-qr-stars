
interface PlayerFlagProps {
  flagCode?: string;
  country: string;
}

const PlayerFlag = ({ flagCode, country }: PlayerFlagProps) => {
  return (
    <div className="flag-container text-center">
      <div className="flex justify-center space-x-1 mb-1">
        {flagCode === 'fr' && (
          <>
            <div className="w-4 h-8 bg-blue-700"></div>
            <div className="w-4 h-8 bg-white"></div>
            <div className="w-4 h-8 bg-red-600"></div>
          </>
        )}
        {flagCode !== 'fr' && (
          <div className="w-12 h-8 bg-gray-200 flex items-center justify-center text-xs">
            {flagCode?.toUpperCase()}
          </div>
        )}
      </div>
      <div className="text-xs font-bold uppercase">
        {country}
      </div>
    </div>
  );
};

export default PlayerFlag;
