import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import 'style/main.scss'

import Subreddit from 'components/subreddit'
import TopicInput from 'components/topic-input'
import HistoryNav from 'components/history-nav'

const defaultTopics = [
  'reactjs',
  'FreeCodeCamp',
  'webdev',
]

function App() {

  const [ topics, setTopics ] = useState(defaultTopics)
  const [ responseError, setResponseError ] = useState(false)

  const updateTopics = topic => setTopics([topic, ...topics])

  const handleResponseError = hasError => {
    console.log('hasError...', hasError)
    return setResponseError(hasError)
  }

  return (
    <Router>
      <div className="logo"></div>
      <Container>
        <Row>
          <Col md={4}>
            <h2>Topics</h2>
            <TopicInput updateTopics={updateTopics} hasError={responseError} />
            <HistoryNav topics={topics} />
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/topics">
                <Topics handleResponseError={handleResponseError}/>
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            </Col>
        </Row>
      </Container>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function Topics(props) {
  const { handleResponseError } = props
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topic/:page?`}>
          <Subreddit handleResponseError={handleResponseError}/>
        </Route>
        <Route path={match.path}>
          <p>Please select a topic.</p>
        </Route>
      </Switch>
    </div>
  )
}

export default App

