import React from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'
import PostCard from './../../components/PostCard'
import PhostCard from './../../components/PhostCard'
import Profile from './../../components/Profile'

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from='/' to='/postcard' component={PostCard} />
      <Route path='/postcard' component={PostCard} />
      <Route path='/phostcard' component={PhostCard} />
      <Route path='/profile' component={Profile} />
    </Switch>
  </main>
)

export default Main