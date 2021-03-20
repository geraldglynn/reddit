import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

function TopicInput(props) {

  const { updateTopics, hasError } = props

  const [ topic, setTopic ] = useState('')
  const [ hasError2, setHasError ] = useState(hasError)

  const handleOnChange = event => {
    setTopic(event.target.value)
  }

  const history = useHistory()
  const handleOnSubmit = event => {
    event.preventDefault()
    updateTopics(topic)
    history.push(`/topics/${topic}`)
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="subreddit-topic">r/</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Subreddit"
          aria-label="Subreddit Topic"
          aria-describedby="subreddit-topic"
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
          invalid={hasError2}
        />
        {/* <FormControl type="submit">Sign in</FormControl> */}
      </InputGroup>
    </Form>
  )
}


export default TopicInput