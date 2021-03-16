import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import { format } from 'fecha';

function Item(props) {
  const {
    title,
    text,
    created_utc,
  } = props

  const timestamp = new Date(created_utc * 1000)
  const formattedTimeDate = format(timestamp, 'h.mma [on] dddd MMMM Do, YYYY')

  return (
    <>
      <h1>{title}</h1>
      {formattedTimeDate}
      <ReactMarkdown>{text}</ReactMarkdown>
    </>
  )
}

export default Item