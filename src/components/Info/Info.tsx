import styles from "./Info.module.css";

export interface InfoProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  artist: string;
  children: React.ReactNode;
}

export const Info = ({ title, artist, children }: InfoProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <h3>{artist}</h3>
      <div className={styles.text}>{children}</div>
    </div>
  );
};
