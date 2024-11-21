import { BASE_URL } from 'src/server/constants'
import { type Comments } from 'src/server/schema'

export async function api<T>(path: string): Promise<T> {
  const response = await fetch(`${BASE_URL}/api/${path}`);
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  //    And can also be used here ↴
  return await response.json() as T;
}
// Elsewhere
// async function main() {
//   const config = await getConfig();

  // At this point we can confidently say config has a .version
  // of type number because we threaded the shape of config into
  // api()
//   console.log(config.version); 
// }

export const fetcher = (path: string) => fetch(path).then(res => res.json())
export const commentFetcher = () => fetch('api/comments').then(res => res.json())

export async function fetchComments() {
  const res = await api<Comments>('comments');
  return res
}
export async function getComments() {
  const res = await api<Comments>('comments');
  return res
}
