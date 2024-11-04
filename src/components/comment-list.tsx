import Link from "next/link";
import styles from "./index.module.css";
import type { Comments } from 'src/server/schema'

export function CommentList({ comments }: { comments: Comments }) {
  return (
    <>
    {comments.map((comment) => (
      <Link
      className={styles.card}
      href="https://create.t3.gg/en/usage/first-steps"
      target="_blank"
      key={comment?.id}
      >
      <h3 className={styles.cardTitle}>{comment?.title}</h3>
      <div className={styles.cardText}>
            <p>{comment?.content}</p>
      </div>
    </Link>
        ))}
        </>
  );
}
