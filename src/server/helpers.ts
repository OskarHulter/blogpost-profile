/* eslint-disable @typescript-eslint/prefer-for-of */
import { ITERATION_TOTAL } from 'src/server/constants'
import { api } from 'src/server/handlers'
import type { Comments, BlogPostComment } from 'src/server/schema'


const iterations = ITERATION_TOTAL
const mocks = Array.from(Array(iterations).keys())

export const defaultComment: BlogPostComment = {
  id: 0,
  name: "Default Name",
  title: "Default Title",
  content: "Default Content",
  relevancy: 0,
  rating: 0,
  postId: "x",
  ownerId: "y"
}

export function getInitialComments() {
  let total = 0;
  const comments = [];

  const start = performance.now()
  
  for (let i = 0; i < mocks.length; i++) {
    total += mocks[i] ?? 0;
    comments.push({
      ...defaultComment,
      id: i,
      name: `Name ${i}`,
      title: `Title ${i}`,
      content: `Content ${i}`,
      relevancy: Math.abs(Math.floor(Math.random() * 100)),
      rating: Math.abs(Math.floor(Math.random() * 5)),
      postId: `Post ${i}`,
      ownerId: `Owner ${i}`
     });
  }

  const end = performance.now()
  console.log(`Created ${total} comments in ${end - start} ms.`);

  return comments
}

export const initialComments = getInitialComments();

export async function getComments() {
  return await api<Comments>('comments');
}

export async function getAsyncComments() {
  return await new Promise(() => initialComments);
}
