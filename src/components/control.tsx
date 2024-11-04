import styles from "./index.module.css";

export default function Control({ children }: { children: React.ReactNode }) {  
  return (
    <>
      <div className={styles.cardRow}>
        <p> control </p>
          {children}
          </div>
    </>
  );
}
