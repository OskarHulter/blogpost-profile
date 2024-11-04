import styles from "./index.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {  
  return (
    <>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Create <span className={styles.pinkSpan}>T3</span> App
          </h1>
          <div className={styles.cardRow}>
          {children}
          </div>
        </div>
      </main>
    </>
  );
}
