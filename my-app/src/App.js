import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

import 'style/main.scss'

import Subreddit from 'components/subreddit'

const topics = [
  'reactjs',
  'FreeCodeCamp',
  'webdev',
]

function App() {
  return (
    <Router>
      <div className="logo"></div>
      <Container>
        <Row>
          <Col xs={4}>
            <h2>Topics</h2>
            <Nav className="flex-column">
              {topics.map(topic => 
                <li>
                  <Nav.Link href={`/topics/${topic}`}>r/{topic}</Nav.Link>
                </li>
              )}
          </Nav>
          </Col>
          <Col xs={8}>
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

