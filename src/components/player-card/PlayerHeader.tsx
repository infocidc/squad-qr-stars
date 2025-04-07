
interface PlayerHeaderProps {
  position: string;
  squadNumber?: number;
}

const PlayerHeader = ({ position, squadNumber }: PlayerHeaderProps) => {
  return (
    <>
      {/* Top Header */}
      <div className="flex justify-between items-center bg-sport-navy text-white p-3">
        <div className="font-bold uppercase tracking-wider">
          {position}
        </div>
        <div className="squad-number text-sport-pink">
          {squadNumber}
        </div>
      </div>
      
      {/* Diagonal line below header */}
      <div className="h-3 bg-sport-pink relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sport-navy transform skew-x-45"></div>
      </div>
    </>
  );
};

export default PlayerHeader;
