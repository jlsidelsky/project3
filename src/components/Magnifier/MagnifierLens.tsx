import { useEffect, useRef } from "react";
import styles from "./Magnifier.module.css";
import { LENS_SIZE, drawMagnifier } from "./drawMagnifier";

const LENS_PADDING = 16;
const LENS_CONTAINER_SIZE = LENS_SIZE + 2 * LENS_PADDING;

interface MagnifierLensProps {
  position: { x: number; y: number };
  imageRef: React.RefObject<HTMLImageElement | null>;
  magnification: number;
}

const MagnifierLens: React.FC<MagnifierLensProps> = ({
  position,
  imageRef,
  magnification,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = imageRef.current;

    if (!canvas || !img) return;

    drawMagnifier(canvas, img, position.x, position.y, magnification);
  }, [position, magnification, imageRef]);

  return (
    <div
      className={styles.magnifier}
      style={{
        top: `${position.y - LENS_CONTAINER_SIZE / 2}px`,
        left: `${position.x - LENS_CONTAINER_SIZE / 2}px`,
      }}
    >
      <div className={styles.lensContainer}>
        <canvas ref={canvasRef} className={styles.lensCanvas} />
        <svg
          className={styles.glare}
          xmlns="http://www.w3.org/2000/svg"
          width="94"
          height="80"
          viewBox="0 0 94 80"
          fill="none"
        >
          <path
            d="M69.4521 71.8678C64.0962 55.1015 36.0906 37.8972 24.9153 34.3501C23.8348 33.6318 16.5501 30.8615 9.68014 29.8158C1.09271 28.5088 14.8331 6.78428 34.3596 4.77156C53.8861 2.75885 85.138 31.0941 87.6062 39.184C92.0444 53.7307 76.1469 92.8256 69.4521 71.8678Z"
            fill="url(#paint0_linear_65_373)"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient
              id="paint0_linear_65_373"
              x1="67.9902"
              y1="20.1366"
              x2="33.4178"
              y2="53.9575"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.0001" stopColor="#CDCDCD" stopOpacity="0.83" />
              <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className={styles.handle}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default MagnifierLens;
