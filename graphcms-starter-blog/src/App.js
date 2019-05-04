import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './Header'
import Post from './Post'
import About from './About'
import Home from './Home'

import './App.css';

export const App = () => {
  return (
  <Router>
    <div>
      <Header />
      <main>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/post/:slug' component={Post} />
      </main>
    </div>
  </Router>
  )
}

export default App
