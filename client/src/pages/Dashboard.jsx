import { PlusIcon } from 'lucide-react'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-yellow-700 to-yellow-600 bg-clip-text text-transparent'>Hi, you are logged in</p>

        <div className='flex gap-4'>
          <button>
            <PlusIcon className='size-11 transition-all duration-300 p-2.5 bg-gradent-to-br hover:bg-yellow-600 text-white rounded-full'/>
          </button>

        </div>
      </div>
    </div>
  )
}

export default Dashboard