import React, { useState } from 'react'
import { FileText, Pencil, Plus, Trash, UploadCloud, XIcon } from 'lucide-react'
import { dummyResumeData } from '../assets/assets'

const Dashboard = () => {
  const colors = ['#FCA5A5', '#BBF7D0', '#BFDBFE', '#FEF3C7', '#E9D5FF', '#FBCFE8']
  const [allResumes, setAllResumes] = useState(dummyResumeData)
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [selectedResume, setSelectedResume] = useState(null)

  const handleCreate = (e) => {
    e.preventDefault()
    const newResume = {
      _id: String(Date.now()),
      title: title || 'Untitled Resume',
      updatedAt: new Date().toISOString(),
      accent_color: colors[0],
      personal_info: { full_name: title || 'Unnamed' }
    }
    setAllResumes(prev => [newResume, ...prev])
    setTitle('')
    setShowCreateResume(false)
  }

  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-8'>
        <p className='text-2xl font-medium mb-6 bg-gradient-to-r from-yellow-700 to-yellow-600 bg-clip-text text-transparent'>Hi, you are logged in</p>

        <div className='flex gap-4'>
          <button onClick={() => setShowCreateResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-purple-600 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <Plus className='w-11 h-11 transition-all duration-300 p-2.5 bg-purple-600 text-white rounded-full'/>
            <p>Create Resume</p>
          </button>
          <button onClick={() => setShowUploadResume(true)} className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-300 group hover:border-green-600 hover:shadow-lg transition-all duration-300 cursor-pointer'>
            <UploadCloud className='w-11 h-11 transition-all duration-300 p-2.5 bg-green-600 text-white rounded-full'/>
            <p>Upload Existing Resume</p>
          </button>
        </div>
        
        <hr className='border-slate-300 my-6 sm:w-[305px]'/>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {allResumes.map((resume, idx) => {
            const baseColor = resume.accent_color || colors[idx % colors.length]
            return (
              <article key={resume._id} onClick={() => setSelectedResume(resume)} tabIndex={0} className='relative group w-full bg-white h-48 flex flex-col items-start justify-between rounded-lg p-4 text-slate-700 border border-slate-200 hover:shadow-lg transition-all duration-300 cursor-pointer'>
                <div className='flex items-center gap-3 w-full'>
                  <div className='p-2 rounded-full' style={{ backgroundColor: baseColor }}>
                    <FileText className='w-6 h-6 text-white' />
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium' style={{ color: baseColor }}>{resume.title}</p>
                    <p className='text-[11px] text-slate-400 mt-1'>Updated on {new Date(resume.updatedAt).toLocaleDateString()}</p>
                  </div>
                  <div className='flex gap-2' onClick={(e) => e.stopPropagation()}>
                    <button aria-label='edit' className='text-slate-400 hover:text-slate-600 transition'>
                      <Pencil className='w-5 h-5' />
                    </button>
                    <button aria-label='delete' className='text-slate-400 hover:text-slate-600 transition'>
                      <Trash className='w-5 h-5' />
                    </button>
                  </div>
                </div>
              </article>
            )
          })} 

        {/* Modals */}
        {showCreateResume && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
              <button aria-label='close' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => { setShowCreateResume(false); setTitle(''); }}>
                <XIcon className='w-5 h-5' />
              </button>
              <h2 className='text-lg font-medium mb-4'>Create New Resume</h2>
              <form onSubmit={handleCreate}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Resume Title' className='w-full px-4 py-2 mb-4 border rounded focus:border-yellow-600' />
                <button type='submit' className='w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded'>Create Resume</button>
              </form>
            </div>
          </div>
        )}

        {showUploadResume && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
              <button aria-label='close' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => setShowUploadResume(false)}>
                <XIcon className='w-5 h-5' />
              </button>
              <h2 className='text-lg font-medium mb-4'>Upload Resume (JSON)</h2>
              <input type='file' accept='.json' className='w-full mb-4' />
              <div className='flex gap-2'>
                <button className='flex-1 bg-green-600 text-white px-4 py-2 rounded'>Upload</button>
                <button onClick={() => setShowUploadResume(false)} className='flex-1 border px-4 py-2 rounded'>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {selectedResume && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg p-6 w-full max-w-lg relative'>
              <button aria-label='close' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => setSelectedResume(null)}>
                <XIcon className='w-5 h-5' />
              </button>
              <h2 className='text-lg font-medium mb-2'>{selectedResume.title}</h2>
              <p className='text-sm text-slate-600'>Updated on {new Date(selectedResume.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard