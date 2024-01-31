'use client'
import React from 'react'

const Resorder = () => {
  return (
    <div>
          <div className=' 2xl:h-[100vh] 2xl:w-[100vw] 2xl:bg-slate-300 flex justify-evenly p-11 xs:bg-slate-300 xs:h-[800px] xs:w-[370px] '>
      <div className='bg-white rounded-sm w-[54%] h-[65%] 
      2xl:w-[54%] 2xl:h-[65%]
      xs:w-[95%] xs:h-[80%] '>
        <h1 className='m-5 text-xl font-semibold'>Select a delivery option</h1>
        <div className='border-gray-100 rounded-md border-2 h-[80%] w-[95%]  m-4 
        2xl:h-[80%]  2xl:w-[95%] 
        xs:w-[90%] xs:h-[80%]'>
        <div className='flex p-5 ml-5 mt-10'>
          <div className='w-[3vw] h-[8vh] rounded-md border-gray-200 border-2 mr-3
          2xl:w-[3vw] 2xl:h-[8vh]
          xs:w-[25%] xs:h-[40%]'>
            <img src='https://www.bigbasket.com/media/uploads/p/s/10000097_19-fresho-coriander-leaves.jpg?tr=w-256,q=80'
            className='h-[7vh] w-[3vw] 
            2xl:h-[7vh] 2xl:w-[3vw]'></img></div>
          <div className='w-[3vw] h-[8vh] rounded-md  2xl:h-[8vh] 2xl:w-[3vw] border-gray-200 border-dotted border-2'><p className='text-center'>View 1 item</p></div>
        </div>
        <div className='w-[43vw] h-[10vh] rounded-md border-gray-300 border-2 mr-10 ml-10 flex
        2xl:w-[43vw] 2xl:h-[10vh]'>
          <h3 className='text-center m-8'>Delivery Slot</h3>
          <div className='h-[9.8vh] bg-black w-[1px] 2xl:h-[9.8vh]'></div>
               <button onClick={()=>{
                setSelectedSlot(true)
               }} className='m-8 flex'> <svg className='w-[3vw] h-[3vh] 2xl:w-[3vw] 2xl:h-[3vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p> 29 Jan, Mon, Between 1:00 PM - 2:00 PM</p>
              <svg className='w-[3vw] h-[3vh] ml-[20px] 2xl:w-[3vw] 2xl:h-[3vh] 3xl:ml-[20px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
              </button>
          
        </div>
        <button className='bg-red-600 rounded-md w-[14vw] h-[6vh] text-white text-center ml-[31.5vw] mt-9 text-xl 3xl:w-[14vw] 3xl:ml-[31.5vw] 3xl:h-[6vh] '>Proceed to payment</button>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Resorder