import { Plus, UploadCloud } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-yellow-700 to-yellow-600 bg-clip-text text-transparent'>Hi, you are logged in</p>

        <div className='flex gap-4'>
          <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-600 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <Plus className='size-11 transition-all duration-300 p-2.5 bg-purple-600 text-white rounded-full'/>
            <p>Create Resume</p>
          </button>
          <button className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloud className='size-11 transition-all duration-300 p-2.5 bg-green-600 text-white rounded-full'/>
            <p>Upload Existing Resume</p>
          </button>
        </div>
        
        <hr className='border-slate-300 my-6 sm:w-[305px]'/>
      </div>
    </div>
  )
}

export default Dashboard