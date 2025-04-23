import { forwardRef } from "react";
import styles from "./Magnifier.module.css";

interface MagnifierImageProps {
  src: string;
  onLoad: () => void;
}

const MagnifierImage = forwardRef<HTMLImageElement, MagnifierImageProps>(
  ({ src, onLoad }, ref) => (
    <img
      ref={ref}
      src={src}
      alt="image"
      className={styles.img}
      onLoad={onLoad}
    />
  )
);

export default MagnifierImage;
