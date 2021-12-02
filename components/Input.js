import React from 'react'

export default function Input({children, placeholder}) {
  return (
    <input 
      className={`w-full px-4 py-2 transition duration-200 border border-gray-300 rounded 
      focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600`}
      placeholder={placeholder || ''}
    >
      {children}
    </input>
  )
}
