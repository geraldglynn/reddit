import React from 'react'

import { Link } from 'react-router-dom'

function Pagination(props) {
  
  const {
    baseUrl,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
  } = props

  const numberOfPages = Math.ceil(totalItemsCount/itemsCountPerPage)
  const pageLinks = []

  let i = 0
  while (i < numberOfPages) {
    i++
    pageLinks.push(
      <li className={`page-item ${activePage === i ? 'disabled' : ''}`}>
        <Link className="page-link" to={`${baseUrl}/${i}`}>{i}</Link>
      </li>
    )
  }

  return (
    <nav aria-label="Subreddit pagination">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
          <Link className="page-link" to={`${baseUrl}/${activePage - 1}`}>Previous</Link>
        </li>
        {pageLinks}
        <li className={`page-item ${activePage === numberOfPages ? 'disabled' : ''}`}>
          <Link className="page-link" to={`${baseUrl}/${activePage + 1}`}>Next</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination