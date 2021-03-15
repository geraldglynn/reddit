const domain = 'https://www.reddit.com'

export default (topic='') => {
  const url = `${domain}/r/${topic}.json`
  let response

  try {
    response = fetch(url)
  } catch (error) {
    console.error(error)
  }

  return response.then( res => res.json() )
}