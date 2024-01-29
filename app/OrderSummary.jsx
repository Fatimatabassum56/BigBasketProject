'use client'
import React, { useState } from 'react'


const OrderSummary = () => {
    let [isvisible,setvisible]=useState(false)
    let [selectedSlot, setSelectedSlot] = useState(false);

    const allTimeSlots = [
      { date: '2022-04-01', time: '9:00 AM - 10:00 AM' },
      { date: '2022-04-01', time: '11:00 AM - 12:00 PM' },
      { date: '2022-04-01', time: '2:00 PM - 3:00 PM' },
      { date: '2022-04-01', time: '5:00 PM - 6:00 PM' },
      { date: '2022-04-02', time: '9:00 AM - 10:00 AM' },
      { date: '2022-04-02', time: '11:00 AM - 12:00 PM' },
      { date: '2022-04-02', time: '2:00 PM - 3:00 PM' },
      { date: '2022-04-02', time: '5:00 PM - 6:00 PM' },
    ];
  
    const morningSlots = allTimeSlots.filter((slot) => slot.time.includes('AM'));
    const afternoonSlots = allTimeSlots.filter((slot) => slot.time.includes('PM') && !slot.time.includes('5:00 PM'));
    const eveningSlots = allTimeSlots.filter((slot) => slot.time.includes('5:00 PM'));
  
 
  return (
    <div className='bg-slate-300 h-screen flex justify-evenly p-11'>
      <div className='bg-white rounded-sm w-[50vw] h-[56vh] '>
        <h1 className='m-5 text-xl font-semibold'>Select a delivery option</h1>
        <div className='border-gray-100 rounded-md border-2 h-[45vh] w-[48vw]  m-4'>
        <div className='flex p-5 ml-5 mt-10'>
          <div className='w-[3vw] h-[8vh] rounded-md border-gray-200 border-2 mr-3'><img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tradeindia.com%2Fproducts%2Fblack-apsara-pencils-box-size-4-inches-thickness-3-mm-for-writing-7747452.html&psig=AOvVaw39SJIH-GIIbzOSTBcfIlFh&ust=1706609476137000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJC_pu6tgoQDFQAAAAAdAAAAABAE'></img></div>
          <div className='w-[3vw] h-[8vh] rounded-md border-gray-200 border-dotted border-2'><p className='text-center'>View 1 item</p></div>
        </div>
        <div className='w-[43vw] h-[10vh] rounded-md border-gray-300 border-2 mr-10 ml-10 flex'>
          <h3 className='text-center m-8'>Delivery Slot</h3>
          <div className='h-[9.8vh] bg-black w-[1px]'></div>
               <button onClick={()=>{
                setSelectedSlot(true)
               }} className='m-8 flex'> <svg className='w-[3vw] h-[3vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              <p> 29 Jan, Mon, Between 1:00 PM - 2:00 PM</p>
              <svg className='w-[3vw] h-[3vh] ml-[20px]]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg>
              </button>
          
        </div>
        <button className='bg-red-600 rounded-md w-[14vw] h-[6vh] text-white text-center ml-[31.5vw] mt-9 text-xl '>Proceed to payment</button>
        </div>
        <div className={`fixed inset-0 ${selectedSlot ? 'flex' : 'hidden'} items-center justify-center bg-black bg-opacity-50`}>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Select a Delivery Slot</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allTimeSlots.map((slot, index) => (
            <div
              key={index}
              className={`p-4 border rounded cursor-pointer ${
                selectedSlot === slot ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
              onClick={() => handleSlotSelect(slot)}
            >
              <p className="font-semibold">{slot.date}</p>
              <p>{slot.time}</p>
            </div>
          ))}
        </div>
        {selectedSlot && (
          <div className="mt-4">
            <p className="font-semibold">Selected Slot:</p>
            <p>{`${selectedSlot.date} - ${selectedSlot.time}`}</p>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
            onClick={selectedSlot=false}
          >
            Close
          </button>
        </div>
      </div>
    </div>
       
        
      </div>
        <div>
        <div className='bg-[rgba(71,111,0)] rounded-t-md h-3 w-[27vw]'></div>
        <div className='bg-white rounded-b-md w-[27vw] h-15 p-4'>
        <h2 className="text-xl leading-6 font-bold mb-4 mt-1">Order Summary</h2>
        <hr className='text-gray-400 w-[25vw]'></hr>
        <div className='flex justify-between'>
        <h3 className='text-base font-semibold m-4'>Total Amount Payable</h3>
        <span className='text-base font-semibold m-4'>₹111.55</span>
        </div>
        <button className='w-screen' onClick={()=>{
            setvisible(!isvisible)
        }}> <div className='bg-[rgb(241,248,230,1)] w-[25vw] text-[rgba(71,111,0)] h-[70px] rounded-t-md pt-[30px] pl-5'>
         
           <div className='flex justify-between font-semibold'> <span>Total Savings</span><span className='m-2 flex'>₹111.51
           <svg  className='w-[3vw] h-[3vh]'xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"/></svg></span></div></div></button>
          {isvisible===true&&<div className= 'w-[25vw] bg-[rgb(241,248,230,1)]  text-[rgba(71,111,0)]  rounded-b-md pt-[30px] pb-5'>
                <hr className='bg-[rgba(71,111,0)] h-[2px]'></hr>
                <div className='flex justify-between mt-5'><span className='mr-5 ml-5'>Saved on basket value </span>
                <span className='mr-5 ml-5'>₹111.51</span></div></div>}
          <div className='w-[25vw] bg-[rgba(255,250,230,1)] h-[150px] border-[rgb(255,204,0)] border-2 rounded-md mt-4 p-4 flex'><svg className=' mr-2 w-[3vw] h-[3vh]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>Select your address and delivery slot to know accurate delivery charges. You can save more by applying a voucher!</div>      
    </div>
    </div>
    
</div>

  )
}

export default OrderSummary