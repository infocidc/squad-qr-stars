
import { useEffect, useRef } from 'react';
import { QrCode } from 'lucide-react';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
}

const QRCode = ({ value, size = 100, className = "" }: QRCodeProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Import QRCode.js dynamically to avoid SSR issues
    const generateQR = async () => {
      try {
        const QRCodeLib = await import('qrcode');
        if (canvasRef.current) {
          await QRCodeLib.toCanvas(canvasRef.current, value, {
            width: size,
            margin: 1,
            color: {
              dark: '#1a2550', // Sport navy color
              light: '#FFFFFF'
            }
          });
        }
      } catch (err) {
        console.error("Error generating QR code:", err);
      }
    };

    generateQR();
  }, [value, size]);

  return (
    <div className={`relative ${className}`}>
      {/* Fallback icon in case QR generation fails */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0">
        <QrCode size={size * 0.8} />
      </div>
      <canvas 
        ref={canvasRef} 
        className="rounded-md"
        width={size}
        height={size}
      />
    </div>
  );
};

export default QRCode;
