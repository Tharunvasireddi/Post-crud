import React from 'react'

const Post = ({title,views}) => {

  return (
    <div className='border p-4 shadow-lg w-64 bg-slate-950 hover:scale-150'>
        <h1 className='text-xl font-bold text-green-500'>{title}</h1>
        <p className='text-lg font-semibold text-red-500'>{views}</p>

    </div>
  )
}

export default Post