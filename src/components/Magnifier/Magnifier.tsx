import { useRef, useState, useCallback } from "react";
import MagnifierImage from "./MagnifierImage";
import MagnifierLens from "./MagnifierLens";
import styles from "./Magnifier.module.css";

const DEFAULT_WIDTH = "800px";
const DEFAULT_MAGNIFICATION = 1;

interface MagnifierProps {
  src: string;
  imgWidth?: number | string;
  imgHeight?: number | string;
  magnification?: number;
}

const Magnifier: React.FC<MagnifierProps> = ({
  src,
  imgWidth = DEFAULT_WIDTH,
  imgHeight = "auto",
  magnification = DEFAULT_MAGNIFICATION,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [loaded, setLoaded] = useState(false);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { top, left, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const margin = 75;

    if (x < margin || y < margin || x > width - margin || y > height - margin) {
      setShowMagnifier(false);
      return;
    }

    setPosition({ x, y });
    setShowMagnifier(true);
  }, []);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div
      className={styles.container}
      style={{ width: imgWidth, height: imgHeight }}
    >
      <div
        className={styles.imgContainer}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setShowMagnifier(true)}
        onMouseLeave={() => setShowMagnifier(false)}
      >
        <MagnifierImage src={src} onLoad={handleImageLoad} ref={imageRef} />
        {showMagnifier && loaded && (
          <MagnifierLens
            position={position}
            imageRef={imageRef}
            magnification={magnification}
          />
        )}
      </div>
    </div>
  );
};

export default Magnifier;
