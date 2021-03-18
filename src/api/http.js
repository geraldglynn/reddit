const CACHE = {};
const MAX_AGE = 600000;  // 10m

async function handleFetch(url){
  debugger
  await fetch(url).then(res => {
    debugger
    if (res.status >= 200 && res.status <= 299) {
      debugger
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    })
    .then((jsonResponse) => {
      return jsonResponse
    }).catch((error) => {
      // Handle the error
      console.log(error)
  })
}

export default (url) => {
  const cached = CACHE[url]

  if (cached && (Date.now() - cached.time < MAX_AGE)) {
    return cached
  }

  const response = fetch(url).then(res => {
    if (res.status >= 200 && res.status <= 299) {
      debugger
        return res.json()
      } else {
        throw Error(res.statusText)
      }
    }).then((jsonResponse) => {
      return jsonResponse
    }).catch((error) => {
      console.log(error)
      return Promise.resolve()
  })
  response.time = Date.now()
  CACHE[url] = response
  return response
}

