import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { fetchSubreddit, fetchSubredditPosts } from '../api/reddit'

function decode(str){
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
}

function Item(props) {
  const {
    title,
    text,
  } = props

  return (
    <>
      <h1>{title}</h1>
      <ReactMarkdown>{text}</ReactMarkdown>


    </>
  )
}

function Subreddit() {
  const [ postCount, setPostCount ] = useState([])
  const [ posts, setPosts ] = useState([])
  const topic = 'reactjs'

  const getSubreddit = () => fetchSubreddit(topic).then(subreddit => setPosts(subreddit.children))

  useEffect(getSubreddit, [])

    return(
      <>
      { posts && posts.length > 0 && posts.map(
        post => {
          console.log(post)
          const data = post.data || {}
          const {
            id,
            archived,
            author,
            author_fullname,
            category,
            created_utc,
            downs,
            domain,
            name,
            num_comments,
            over_18,
            permalink,
            pinned,
            score,
            selftext,
            selftext_html,
            subreddit,
            subreddit_id,
            subreddit_name_prefixed,
            subreddit_subscribers,
            subreddit_type,
            ups,
            upvote_ratio,
            url,
            wls,
            title,
          } = data

          return(
            <Item
              key={id}
              title={title}
              text={selftext}
            />
          )
        }
      )}
      </>
    )
}

export default Subreddit

