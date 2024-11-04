import styles from "./index.module.css";

export default function Variant({ children }: { children: React.ReactNode }) {  
  return (
    <>
          <div className={styles.cardRow}>
          {children}
          </div>
    </>
  );
}
