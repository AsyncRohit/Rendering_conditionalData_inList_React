import React from 'react'

const App = () => {
  let profile=[
    {name:"rohit",
      age:12
  },
  {
    name:"mrbooom",
    age:22
  }
  ]
  let users=profile.map((e)=> <h1>{e.name}</h1>)
  return (
    <div>{users}</div>
  )
}

export default App