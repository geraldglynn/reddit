import React, {useState} from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


import 'style/main.scss'

import Subreddit from 'components/subreddit'
import TopicInput from 'components/topic-input'

const defaultTopics = [
  'reactjs',
  'FreeCodeCamp',
  'webdev',
]

function App() {

  const [ topics, setTopics ] = useState(defaultTopics)

  const updateTopics = topic => {
    setTopics([topic, ...topics])
  }

  return (
    <Router>
      <div className="logo"></div>
      <Container>
        <Row>
          <Col md={4}>
            <h2>Topics</h2>
            <TopicInput updateTopics={updateTopics}/>
            <Nav className="flex-column">
              {topics.map(topic =>
                <li>
                  <Link to={`/topics/${topic}`}>r/{topic}</Link>
                </li>
              )}
          </Nav>
          </Col>
          <Col md={8}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <Topics />
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

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch()

  return (
    <div>
      <Switch>
        <Route path={`${match.path}/:topic/:page?`}>
          <Subreddit />
        </Route>
        <Route path={match.path}>
          <p>Please select a topic.</p>
        </Route>
      </Switch>
    </div>
  )
}

export default App

