import React, { Suspense } from 'react'

const UserTable = async() => {
    const res =await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

  return (
    <div><h1>names of users</h1>
    <Suspense fallback={<p> loading..</p>}>    <ul>
      {users.map(user =><li key={user.id}>{user.name}</li>)}
    </ul>
    </Suspense>
        </div>

  )
}

export default UserTable