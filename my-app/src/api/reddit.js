import http from './http'

export const fetchSubreddit = (topic) => {
  return http(topic).then(json => json?.data)
}

export const fetchSubredditPosts = (topic) => {
  return fetchSubreddit(topic).then(data => data?.children)
}