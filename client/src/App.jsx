import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [usersList, setUsersList] = useState([])

  async function fetchData(){
    console.log("Im fething")
    try{
      const res = await fetch("http://localhost:8080/api/users", {method: "GET"})
      if(!res.ok){
        throw new Error(`network response was not ok: ${res.status}`)
      }
      const data = await res.json()
      setUsersList(data)
    }catch(err){
      console.log("Error:", err)
    }
  }

  return (
    <>
    <h1>List of Users</h1>
    <h2>Users:</h2>
    <button onClick={fetchData}>Pobierz dane</button>
    <ul>
      {usersList.map((user)=>{
      return (<li key={user._id}>
        name: {user.name}; email: {user.email}; wiek: {user.age}
      </li>)
      })}
    </ul>
    </>
  )
}

export default App
