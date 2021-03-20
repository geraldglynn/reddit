import React from "react";
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'

function HistoryNav(props) {
  const { topics } = props

  return (
    <Nav className="flex-column">
      {topics.map(topic =>
        <li>
          <Link to={`/topics/${topic}`}>r/{topic}</Link>
          </li>
      )}
    </Nav>
  )
}


export default HistoryNav