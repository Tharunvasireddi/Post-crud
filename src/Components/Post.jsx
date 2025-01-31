import { Trash2 } from 'lucide-react'
import React from 'react'
import { Toaster } from 'react-hot-toast'

const Post = ({title,views,onDelete}) => {

  return (
    <div className='border p-4 shadow-lg w-64 bg-slate-950 hover:scale-105'>
        <h1 className='text-xl font-bold text-green-500'>{title}</h1>
        <p className='text-lg font-semibold text-red-500'>{views}</p>
        <Trash2 onClick={onDelete} className='text-red-700'/>
        <Toaster/>
    </div>
  )
}

export default Post