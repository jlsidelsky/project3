import styles from "./Button.module.css";

export interface ButtonProps {
  img?: string;

  selected: boolean;
  onClick: () => void;
}

const Button = ({ img, selected, onClick }: ButtonProps) => {
  return (
    <div
      onClick={() => onClick()}
      className={`${styles.container} ${selected ? "" : styles.inActive} bg`}
    >
      <div className={`${styles.inner} bg`}></div>
      {img && <img className={styles.img} src={img}></img>}
    </div>
  );
};
export default Button;
