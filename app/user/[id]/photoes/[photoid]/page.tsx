import React from 'react'
interface props{
    params:{id:number,photoid:number}
}
const photopage = ({params:{id,photoid}}) => {
  return (
    <div>user{id} photopage {photoid}</div>
  )
}

export default photopage