import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Overview,Tickets,Agents,Articles,Contacts,Ideas,Settings,Subscription,NotFoundPage, Users, AddUsers, SingleUser } from '../pages'
import Header from '../components/Header'
// import NotFoundPage from '../pages/NotFoundPage'

function Routers() {
  return (
    <div className="w-[80%] p-[30px] overflow-y-auto h-[100vh]">
      <Header/>
      <Routes>
      <Route path='/' element={<Overview/>} />
      <Route path='/users' element={<Users/>} />
      <Route path='/users/add' element={<AddUsers/>} />
      <Route path='/users/:id' element={<SingleUser/>} />
      <Route path='/tickets' element={<Tickets/>} />
      <Route path='/agents' element={<Agents/>} />
      <Route path='/articles' element={<Articles/>} />
      <Route path='/contacts' element={<Contacts/>} />
      <Route path='/ideas' element={<Ideas/>} />
      <Route path='/settings' element={<Settings/>} />
      <Route path='/subscription' element={<Subscription/>} />
      <Route path='*' element={<NotFoundPage/>} />

    </Routes>
    </div>
  )
}

export default Routers
