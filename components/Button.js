import React from 'react'

export default function Button({children}) {
  return (
    <button 
      className={`w-full flex justify-center bg-gray-400
      hover:bg-gray-500 text-gray-100 p-4 
      rounded-md tracking-wide font-semibold shadow-lg cursor-pointer transition duration-500
      focus:shadow-xl
      `
    }    
    >
     {children} 
    </button>
  )
}
