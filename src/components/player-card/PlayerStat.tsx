
interface PlayerStatProps {
  label: string;
  value: number;
}

const PlayerStat = ({ label, value }: PlayerStatProps) => {
  return (
    <div className="text-xs">
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span className="text-sport-pink">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-700 rounded-full">
        <div className="h-full bg-sport-pink rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  );
};

export default PlayerStat;
