import React from 'react'

const Nav = () => {
 let data="data from the server"
 let subject=["maths", "science", "accounts"];
 let profile={
    name:"kallukaliya",
    age:23,
    email:"kallu@kaliya.com"
 }
    return (

    <div>
        <h1>{data
        }</h1>
        <h1>{subject[0]}</h1>
        <h1>{profile.name}</h1>
        <h1>{profile.age}</h1>
        <h1>{profile.email}</h1>
    </div>
  )
}

export default Nav;
