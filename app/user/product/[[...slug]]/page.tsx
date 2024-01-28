import React from 'react'
interface props{
    params:{slug:string[]}
    searchParams:{sortorder:string}
}
const page = ({params:{slug},searchParams:{sortorder}}:props) => {
  return (
    <>
    <div> url you enterted query: {sortorder}
      <h1>{slug}</h1>
    </div>
    </>
  )
}

export default page