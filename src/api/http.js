const CACHE = {};
const MAX_AGE = 600000;  // 10m

export default (url) => {
  const cached = CACHE[url]

  if (cached && (Date.now() - cached.time < MAX_AGE)) {
    return cached
  }

  const response = fetch(url).then( res => res.json() )
  response.time = Date.now()
  CACHE[url] = response
  
  return response
}