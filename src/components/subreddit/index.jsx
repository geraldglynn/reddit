import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Pagination from 'components/ui/pagination'

import { useParams } from 'react-router-dom'



import { fetchSubreddit, fetchSubredditPosts } from 'api/reddit'

import Item from 'components/item'

const itemsCountPerPage = 10

function Subreddit(props) {
  const { handleResponseError } = props
  const topic = useParams().topic || 'reactjs'
  const page = parseInt(useParams().page) || 1
  let topicNotFound = false

  const [ posts, setPosts ] = useState([])
  const [ postCount, setPostCount ] = useState(0)
  const [ activePage, setActivePage ] = useState(1)

  const getSubreddit = () => fetchSubreddit(topic).then(subreddit => {
    if(subreddit.isError) {
      console.log('hasError...')
      handleResponseError(true)
      // topicNotFound = true
    }
    else {
      setPostCount(subreddit.data.dist)
      setPosts(subreddit.data.children)
    }
  })

  useEffect(getSubreddit, [topic])

  const handlePageChange = pageNumber => setActivePage(pageNumber)

  const sortedPosts = posts.sort( (a, b) => a.created_utc - b.created_utc )

  const displayPostsStart = (page - 1) * itemsCountPerPage
  const displayPostsEnd = displayPostsStart + itemsCountPerPage
  const displayPosts = sortedPosts.slice(displayPostsStart, displayPostsEnd)

  return(
      <>
      <h1>r/{topic}{topicNotFound ? 'Not found!' : ''}</h1>
      { displayPosts && displayPosts.length > 0 && displayPosts.map(
        post => {
          // console.log(post)
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
            thumbnail,
            ups,
            upvote_ratio,
            url,
            wls,
            title,
          } = data

          // console.log(id)

          return(
            <Row>
              <Item
                key={id}
                created_utc={created_utc}
                title={title}
                text={selftext}
                thumbnail={thumbnail}
              />
              <hr />
            </Row>
          )
        }
      )}
      <Pagination
        key={'pagination'}
        baseUrl={`/topics/${topic}`}
        activePage={page}
        itemsCountPerPage={itemsCountPerPage}
        totalItemsCount={postCount}
      />
      </>
    )
}

export default Subreddit
