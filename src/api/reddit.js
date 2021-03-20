import http from 'api/http'
const domain = 'https://www.reddit.com'

export const fetchSubreddit = async (topic='example') => {
  const url = `${domain}/r/${topic}.json`
  const res = await http(url)
  return res
}
