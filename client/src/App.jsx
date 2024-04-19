import { useState } from 'react'
import './App.css'
import UserList from './components/UserList'
import {Routes, Route, Link, useNavigate, Router} from 'react-router-dom'
import MyForm from './components/MyForm'

function App() {
  const navigate = useNavigate()

  return (
    <>
    <h1>List of Users</h1>
      <nav>
        <ul>
          <li>
            <Link to="/users">Show Users List</Link>
          </li>
          <li>
            <button onClick={(()=>navigate("/add-user"))}>Add new user</button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/users' element={<UserList/>} />
        <Route path='/add-user' element={<MyForm/>} />
        <Route path='/' element={<div><h1>Welcome to Prison Manager</h1></div>} />
      </Routes>
    </>
  )
}

export default App
