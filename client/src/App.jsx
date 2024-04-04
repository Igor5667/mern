import { useState } from 'react'
import './App.css'
import MyForm from './components/MyForm'

function App() {
  const [usersList, setUsersList] = useState([])
  const [show, setShow] = useState(false)

  async function fetchData(){
    setShow(!show)
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

  const deleteUser = async (userId)=>{
    
    const confirmation = window.confirm("Czy na pewno chces skasować użytkownika?")
    if(!confirmation) return

    try{
      const res = await fetch(`http://localhost:8080/api/users/${userId}`, {method: "DELETE"})
      if(!res.ok) throw new Error("Error response is not ok")
      fetchData() //odswierzanie widoku
    }catch(err){
      console.log(`Deleting problem with user: ${err.message}`)
    }
  }

  
  let usersListToShow = usersList.map((user)=>{
      return (<li key={user._id} onClick={()=>deleteUser(user._id)}>
        Name: {user.name}<br/>  E-mail: {user.email}<br/> wiek: {user.age}
      </li>)
      })

  return (
    <>
    <h1>List of Users</h1>
    <MyForm/>
    <h2>Users:</h2>
    <button onClick={fetchData}>{show ? "Ukryj dane" : "Pokaż dane"}</button>
    <ul>
      {show && usersListToShow}
    </ul>
    </>
  )
}

export default App
