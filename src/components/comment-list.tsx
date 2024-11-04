import Link from "next/link";
import styles from "./index.module.css";
import type { Comments } from 'src/server/schema'
import { fetchComments } from 'src/server/handlers'
import useSWR from 'swr'
import { useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function CommentList() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  console.log("🚀 ~ file: comment-list.tsx:20 ~ createPageURL ~ createPageURL:", createPageURL)


  const [pageIndex, setPageIndex] = useState(currentPage);
  const { data, error, isLoading } = useSWR<Comments, Error>(`/api/comments?page=${pageIndex}`, fetchComments)

  console.log("🚀 ~ file: comment-list.tsx:10 ~ CommentList ~ data:", data)

  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Failed to load comments</div>
  if (!data) return null;

  return (
    <>
      <button onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
      <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
      {/* <div style={{ display: 'none' }}><Page index={pageIndex + 1}/></div> */}
    {data.length > 0 ? data.map((comment) => (
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
    )) : null}
    </>
  );
}
