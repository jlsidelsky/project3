import { useState } from "react";
import Button from "./Button";
import styles from "./ButtonGroup.module.css";

interface ButtonProps {
  img?: string;
  label: string;

  onClick: () => void;
}

interface ButtonGroupProps {
  multiSelect?: boolean;
  buttons: ButtonProps[];
  hide?: boolean;
}

const ButtonGroup = ({
  multiSelect = false,
  buttons,
  hide = false,
}: ButtonGroupProps) => {
  const [selected, setSelected] = useState(0);
  return (
    <div
      className={styles.wrapper}
      style={{ visibility: hide ? "hidden" : "visible" }}
    >
      <div className={styles.container}>
        {buttons.map((button, index) => (
          <Button
            key={index}
            {...button}
            selected={selected === index}
            onClick={() => {
              setSelected(index);
              button.onClick();
              if (!multiSelect) {
                setTimeout(() => setSelected(-1), 300);
              }
            }}
          />
        ))}
      </div>
      <div className={styles.labelsWrapper}>
        {buttons.map((button, index) => (
          <div key={index}>
            {multiSelect && (
              <div
                className={`${styles.indicator} ${
                  selected === index ? styles.active : styles.inactive
                }`}
              ></div>
            )}

            <p>{button.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;
