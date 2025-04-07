
import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  message?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
}

const LoadingSpinner = ({ 
  message = "Loading...", 
  size = 'medium',
  color = "text-sport-pink" 
}: LoadingSpinnerProps) => {
  
  // Size mapping
  const sizeMap = {
    small: {
      height: "h-6",
      width: "w-6",
      textSize: "text-sm"
    },
    medium: {
      height: "h-10",
      width: "w-10",
      textSize: "text-base"
    },
    large: {
      height: "h-14",
      width: "w-14",
      textSize: "text-lg"
    }
  };
  
  const selectedSize = sizeMap[size];
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className={`${selectedSize.height} ${selectedSize.width} animate-spin ${color}`} />
      <p className={`mt-4 text-sport-gray ${selectedSize.textSize}`}>{message}</p>
    </div>
  );
};

export default LoadingSpinner;
