import React from 'react'

function page() {
  return (
    <div className='bg-blue-950 text-white min-h-screen'>
      <div className=' bg-red-500 w-[90%] mx-auto flex items-center justify-between'>
        <h2 className='text[20px]'>Next js</h2>
        <button className='bg-blue-300 py-2 px-7 rounded-md hover:bg-blue-500'>CV</button>
        </div>
        <div className='text-center pt-6'>
          <h2 className='text-blue-300 text-3xl font-bold'>John Wick</h2>
          <h3 className='text-1xl font-bold'>Actor and Artist</h3>
          <p>John Wick is a 2014 American neo-noir action thriller film directed by Chad</p>
          <p> Stahelski (in his directorial debut) from a screenplay by Derek Kolstad</p>
        </div>
    </div>
  )
}

export default page
