import React from 'react'

const Button = ({label, Style}) => {
  return (
    <div className={`cursor-pointer ${Style} text-white hover:shadow-none shadow-lg text-lg active:bg-violet-600 hover:bg-violet-700 hover:shadow-gray-800 transition-all duration-200 bg-violet-600 px-4 py-2 rounded-3xl`}>{label}</div>
  )
}

export default Button