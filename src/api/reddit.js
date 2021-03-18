import http from 'api/http'
const domain = 'https://www.reddit.com'

export const fetchSubreddit = (topic='example') => {
  const url = `${domain}/r/${topic}.json`
  const res = http(url).then(json => {
    if(json) { return json.data }
    return null
  })
  return res
}
