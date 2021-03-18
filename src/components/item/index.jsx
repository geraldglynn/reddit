import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import htmlEntity from 'he'
import Modal from 'react-bootstrap/Modal'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { format } from 'fecha';

function isUrl(str){
  return str.match(/^http/)
}

function Item(props) {
  const {
    created_utc,
    title,
    text,
    thumbnail,
  } = props

  const timestamp = new Date(created_utc * 1000)
  const formattedTimeDate = format(timestamp, 'h.mma [on] dddd MMMM Do, YYYY')

  const hasThumbnail = isUrl(thumbnail)

  return (
    <Col>
      <h2>{htmlEntity.decode(title)}</h2>
      {formattedTimeDate}
      <Row>
        { hasThumbnail &&
        <Col xs={3}>
          { <img src={thumbnail} /> }
        </Col>
        }
        <Col xs={hasThumbnail ? 9 : 12}>
          <ReactMarkdown>{htmlEntity.decode(text)}</ReactMarkdown>
        </Col>
      </Row>
    </Col>
  )
}

export default Item