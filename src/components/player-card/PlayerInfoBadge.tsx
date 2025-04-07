
interface PlayerInfoBadgeProps {
  label: string;
  value: string | number;
}

const PlayerInfoBadge = ({ label, value }: PlayerInfoBadgeProps) => {
  return (
    <div className="flex items-center rounded-full bg-sport-pink text-white px-3 py-1 text-sm w-min whitespace-nowrap">
      <span className="font-bold mr-2">{label}</span>
      <span>{value}</span>
    </div>
  );
};

export default PlayerInfoBadge;
