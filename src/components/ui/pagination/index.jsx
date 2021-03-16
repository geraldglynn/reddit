import React, { useState, useEffect } from 'react'

function Pagination(props) {
  
  const {
    baseUrl,
    activePage,
    itemsCountPerPage,
    totalItemsCount,
  } = props

  const numberOfPages = Math.ceil(totalItemsCount/itemsCountPerPage)
  const pageLinks = []

  let i = 1
  for (; i < numberOfPages + 1;) {
    pageLinks.push(
      <li className={`page-item ${activePage === i ? 'disabled' : ''}`}>
      <a className="page-link" href={`${baseUrl}/${i}`}>{i}</a>
    </li>
    )
    i++
  }

  return (
    <nav aria-label="Subreddit pagination">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${activePage === 1 ? 'disabled' : ''}`}>
          <a className="page-link" href={`${baseUrl}/${activePage - 1}`}>Previous</a>
        </li>
        {pageLinks}
        <li className={`page-item ${activePage === numberOfPages ? 'disabled' : ''}`}>
          <a className="page-link" href={`${baseUrl}/${activePage + 1}`}>Next</a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination