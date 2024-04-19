import { useState } from 'react'


function MyForm() {
  const [newUser, setNewUser] = useState({name:"", email:"", age:0})

  async function submitHandler(e){
    e.preventDefault()
    
    const formData = new FormData()
    formData.append("name", newUser.name)
    formData.append("age", newUser.age)
    formData.append("email", newUser.email)

    console.log("FormData value")
    for(let [key, values] of formData.entries){
      console.log(`${key}: ${values}`)
    }

    try{
      const response = await axios.post("http://localhost:8080/api/users", formData)
      // const response = await fetch("http://localhost:8080/api/users",{
      //   method: "POST",
      //   headers: {'content-type':'application/json'},
      //   body: JSON.stringify(newUser)
      // })

      if(!response.ok){
        throw new Error(`Network response was not ok ${response.status}`)
      }

      const data = await response.json()
      console.log(`użytkownik dodany ${data}`)
      setNewUser({name:"", email:"", age:0})
      //updateUsersList()
    } catch(err){
      console.error(`Jakiś problem z twoja wiadomoscia: ${err.message}`)
    }
  }


  return (
    <>
    <h5>Dodaj nowego użytkownika</h5>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Imie'  value={newUser.name} onChange={(e)=>setNewUser({...newUser, name: e.target.value})}/><br/>
      <input type="email" placeholder='Email' value={newUser.email} onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/><br/>
      <input type="number" placeholder='Wiek'  value={newUser.age} onChange={(e)=>setNewUser({...newUser, age: e.target.value})}/><br/>
      <button type="submit">Dodaj</button>
    </form>
    </>
  )
}

export default MyForm
