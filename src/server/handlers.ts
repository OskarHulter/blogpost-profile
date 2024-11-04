import { BASE_URL } from 'src/server/constants'

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
