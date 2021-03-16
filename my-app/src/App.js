import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
      <Row>
        <Col xs={4}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <h2>Topics</h2>
          <ul>
            {topics.map(topic => 
              <li>
                <Link to={`/topics/${topic}`} disabled={true}>r/{topic}</Link>
              </li>
            )}
          </ul>
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

