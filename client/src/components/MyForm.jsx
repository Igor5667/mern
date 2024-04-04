import { useState } from 'react'


function MyForm() {
  const [newUser, setNewUser] = useState({name:"", email:"", age:0})

  async function submitHandler(e){
    e.preventDefault()
    console.log("hejka")
    try{
      const response = await fetch("http://localhost:8080/api/users",{
        method: "POST",
        headers: {'content-type':'application/json'},
      })
    } catch(err){
      console.error(`Some problem with yr message: ${err.message}`)
    }
  }


  return (
    <>
    <h5>Dodaj nowego użytkownika</h5>
    <form onSubmit={submitHandler}>
      <input type="text" placeholder='Imie'  value={newUser.name} onChange={(e)=>setNewUser({...newUser, name: e.target.value})}/><br/>
      <input type="text" placeholder='Email' value={newUser.name} onChange={(e)=>setNewUser({...newUser, email: e.target.value})}/><br/>
      <input type="text" placeholder='Wiek'  value={newUser.name} onChange={(e)=>setNewUser({...newUser, age: e.target.value})}/><br/>
      <button type="submit">Dodaj</button>
    </form>
    </>
  )
}

export default MyForm
