
import { Badge } from "lucide-react";

const PlayerBadge = () => {
  return (
    <div className="badge-container mb-3">
      <div className="bg-sport-navy text-white px-4 py-2 rounded-lg border-2 border-sport-pink relative">
        <Badge size={24} className="mb-1" />
        <div className="text-xs font-bold">BADGE</div>
      </div>
    </div>
  );
};

export default PlayerBadge;
