import React from 'react'
import ToDoList from './components/ToDoList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Showcase from './components/Showcase'
import Destinations from './components/Destinations'
import Footer from './components/Footer'
import Login from './components/Login.js'
import SignUp from './components/SignUp'
import Error from './components/Error'
import Header1 from './components/index'
import Article from './components/Article'



function App() {
  return (
    <Router>
        
      <Header1 />
      <Switch>
        <Route exact path='/'>
          <Showcase />
          <ToDoList />
               <Destinations />
               {/* <Article /> */}
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/signup'>
          <SignUp />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
