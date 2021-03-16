import http from 'api/http'
const domain = 'https://www.reddit.com'

export const fetchSubreddit = (topic='example') => {
  const url = `${domain}/r/${topic}.json`
  return http(url).then(json => json.data)
}
