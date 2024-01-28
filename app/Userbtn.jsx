'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Userbtn = () => {
    let router=useRouter()
  return (
    <div>
        <button  className='h-12 w-[200px] bg-blue-200'onClick={()=>{
            router.push('/user')
        }}>user list</button>
    </div>
  )
}

export default Userbtn