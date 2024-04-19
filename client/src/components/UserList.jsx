import { useEffect, useState } from 'react'
import axios from 'axios'
import MyForm from './MyForm'

function UserList(){
    const [usersList, setUsersList] = useState([])
    const [show, setShow] = useState(false)

    async function fetchData(){
        setShow(!show)
        try{
            
            const response = await axios.get("http://localhost:8080/api/users")
            setUsersList(response.data)
            
            // const res = await fetch("http://localhost:8080/api/users", {method: "GET"})
            // if(!res.ok){
            //     throw new Error(`network response was not ok: ${res.status}`)
            // }
            // const data = await res.json()
            // setUsersList(data)
        }catch(err){
            console.log("Error:", err)
        }
    }
    
    const deleteUser = async (userId)=>{
        const confirmation = window.confirm("Czy na pewno chces skasować użytkownika?")
        if(!confirmation) return
        try{
            const response = await axios.get(`http://localhost:8080/api/users/${userId}`)
            setUsersList(response.data)

            // const res = await fetch(`http://localhost:8080/api/users/${userId}`, {method: "DELETE"})
            
            if(!res.ok) throw new Error("Error response is not ok")
            fetchData() //odswierzanie widoku
        }catch(err){
            console.log(`Deleting problem with user: ${err.message}`)
        }
    }

    useEffect(()=>{
        fetchData
    })

    let usersListToShow = usersList.map((user, index)=>{return(
        <li key={user._id} onClick={()=>deleteUser(user._id)}>
            {user.name}<br/>{user.email}<br/>{user.age} lat<br/>
            <img src={`http://localhost:8080/images/bandyta${index+1}.webp`} alt={`bandyta${index+1}`} width={100}/>
        </li>
    )})

    return(
        <>
        <h2>Users:</h2>
        <button onClick={fetchData}>{show ? "Ukryj dane" : "Pokaż dane"}</button>
        <ul>{show && usersListToShow}</ul>
        </>
    )
}

export default UserList