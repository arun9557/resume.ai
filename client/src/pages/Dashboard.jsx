import React, { useState } from 'react'
import { FileText, Pencil, Plus, Trash, UploadCloud, X } from 'lucide-react'
import { dummyResumeData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const colors = ['#FCA5A5', '#BBF7D0', '#BFDBFE', '#FEF3C7', '#E9D5FF', '#FBCFE8']
  const [allResumes, setAllResumes] = useState(dummyResumeData)
  const [showCreateResume, setShowCreateResume] = useState(false)
  const [showUploadResume, setShowUploadResume] = useState(false)
  const [title, setTitle] = useState('')
  const [selectedResume, setSelectedResume] = useState(null)
  const [editResumeId, setEditResumeId] = useState(null)
  const navigate = useNavigate()

  // Upload modal state
  const [uploadFile, setUploadFile] = useState(null)
  const [uploadFileName, setUploadFileName] = useState('')
  const [uploadTitle, setUploadTitle] = useState('')
  const [dragActive, setDragActive] = useState(false)
  const [uploadError, setUploadError] = useState('')
  


  const handleCreate = (e) => {
    e.preventDefault()
    if (editResumeId) {
      setAllResumes(prev => prev.map(r => r._id === editResumeId ? { ...r, title: title || r.title, updatedAt: new Date().toISOString() } : r))
      setEditResumeId(null)
      setTitle('')
      setShowCreateResume(false)
      return
    }

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
    // Redirect to resume builder for the newly created resume
    navigate(`/app/builder/${newResume._id}`)
  }

  const handleFileSelect = async (file) => {
    setUploadError('')
    setUploadFile(file)
    setUploadFileName(file.name)
    // try to peek into file for a title preview
    try {
      const text = await file.text()
      const parsed = JSON.parse(text)
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        setUploadTitle(parsed.title || parsed.personal_info?.full_name || '')
      }
    } catch {
      // ignore parsing errors at preview stage
    }
  }

  const handleFileInputChange = (e) => {
    const f = e.target.files?.[0]
    if (f) handleFileSelect(f)
  }

  const handleDragOver = (e) => { e.preventDefault(); setDragActive(true) }
  const handleDragLeave = () => setDragActive(false)
  const handleDrop = (e) => { e.preventDefault(); setDragActive(false); const f = e.dataTransfer.files?.[0]; if (f) handleFileSelect(f) }

  const handleUploadSubmit = async () => {
    if (!uploadFile) { setUploadError('Please select a file to upload'); return }
    try {
      const text = await uploadFile.text()
      const parsed = JSON.parse(text)
      let newItems = []
      if (Array.isArray(parsed)) {
        newItems = parsed.map((p, i) => ({ ...p, _id: p._id || String(Date.now() + i), title: uploadTitle || p.title || p.personal_info?.full_name || 'Untitled' }))
      } else if (parsed && typeof parsed === 'object') {
        const item = { ...parsed, _id: parsed._id || String(Date.now()), title: uploadTitle || parsed.title || parsed.personal_info?.full_name || 'Untitled' }
        newItems = [item]
      } else {
        setUploadError('Uploaded file did not contain a valid resume object')
        return
      }
      setAllResumes(prev => [...newItems, ...prev])
      setShowUploadResume(false)
      setUploadFile(null)
      setUploadFileName('')
      setUploadTitle('')
      // redirect to builder for the first uploaded resume
      navigate(`/app/builder/${newItems[0]._id}`)
    } catch (e) {
      setUploadError('Could not parse JSON file')
    }
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
                    <button type='button' aria-label='edit' className='text-slate-400 hover:text-slate-600 transition' onClick={() => { setEditResumeId(resume._id); setTitle(resume.title); setShowCreateResume(true); }}>
                      <Pencil className='w-5 h-5' />
                    </button>
                    <button type='button' aria-label='delete' className='text-slate-400 hover:text-slate-600 transition' onClick={() => { if (confirm(`Delete "${resume.title}"?`)) setAllResumes(prev => prev.filter(r => r._id !== resume._id)); }}>
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
              <button aria-label='close' type='button' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => { setShowCreateResume(false); setTitle(''); setEditResumeId(null); }}>
                <X className='w-5 h-5' />
              </button>
              <h2 className='text-lg font-medium mb-4'>Create New Resume</h2>
              <form onSubmit={handleCreate}>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type='text' placeholder='Resume Title' className='w-full px-4 py-2 mb-4 border rounded focus:border-yellow-600' />
                <button type='submit' className='w-full bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded'>Create Resume</button>
              </form>
            </div>
          </div>
        )
        }

        {showUploadResume && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg p-6 w-full max-w-md relative'>
              <button aria-label='close' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => { setShowUploadResume(false); setUploadFile(null); setUploadFileName(''); setUploadTitle(''); setUploadError('') }}>
                <X className='w-5 h-5' />
              </button>
              <h2 className='text-lg font-medium mb-4'>Upload Resume</h2>
              <input id='uploadFileInput' onChange={handleFileInputChange} type='file' accept='.json' className='hidden' />
              <input value={uploadTitle} onChange={(e)=>setUploadTitle(e.target.value)} type='text' placeholder='Enter resume title' className='w-full px-4 py-2 mb-4 border rounded' />
              <label htmlFor='uploadFileInput' onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`block border-2 rounded-lg p-6 mb-4 cursor-pointer ${dragActive ? 'border-green-600 bg-green-50' : 'border-dashed border-slate-300'} text-center` }>
                <div className='flex flex-col items-center justify-center'>
                  <div className='p-6 rounded-md'>
                    <UploadCloud className='w-12 h-12 text-green-600' />
                  </div>
                  <p className='text-sm text-slate-600'>{uploadFileName || 'Select resume file'}</p>
                  <p className='text-xs text-slate-400 mt-2'>Upload a JSON resume file or drag it here</p>
                </div>
              </label>
              {uploadError && <p className='text-sm text-red-500 mb-2'>{uploadError}</p>}
              <div className='flex gap-2'>
                <button disabled={!uploadFile} onClick={handleUploadSubmit} className={`flex-1 ${uploadFile ? 'bg-green-600 text-white' : 'bg-slate-200 text-slate-500'} px-4 py-3 rounded`}>Upload resume</button>
                <button type='button' onClick={() => setShowUploadResume(false)} className='flex-1 border px-4 py-3 rounded'>Cancel</button>
              </div>
            </div>
          </div>
        )}

        {selectedResume && (
          <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'>
            <div className='bg-white rounded-lg p-6 w-full max-w-lg relative'>
              <button aria-label='close' className='absolute top-4 right-4 text-slate-500 hover:text-slate-700' onClick={() => setSelectedResume(null)}>
                <X className='w-5 h-5' />
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