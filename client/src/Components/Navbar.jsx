import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

const Navbar = () => {
    const user = {name: 'Johnny Sins'}
    const navigate = useNavigate()
    const [showAd, setShowAd] = useState(false)
    const [index, setIndex] = useState(0)
    const videoRef = useRef(null)
    // autoplay fallbacks
    const [needUserGesture, setNeedUserGesture] = useState(false)

    const videos = [
        '/modi1.mp4',
      '/modi4.mp4',
      '/modi3.mp4',
      '/modi2.mp4'
    ]

    const logoutUser = () =>{
        navigate('/')
    }

    useEffect(() => {
      if (!showAd) return
      const onKey = (e) => {
        if (e.key === 'Escape') setShowAd(false)
        if (e.key === 'ArrowRight') setIndex(i => (i + 1) % videos.length)
        if (e.key === 'ArrowLeft') setIndex(i => (i - 1 + videos.length) % videos.length)
      }
      window.addEventListener('keydown', onKey)
      return () => window.removeEventListener('keydown', onKey)
    }, [showAd, videos.length])

    useEffect(() => {
      if (!showAd || !videoRef.current) return

      // attempt to autoplay unmuted; if it fails, show a play overlay
      videoRef.current.muted = false
      const p = videoRef.current.play()
      if (p && p.catch) {
        p.catch(() => {
          setNeedUserGesture(true)
        })
      }
    }, [showAd, index])

    const handlePlayClick = async () => {
      if (!videoRef.current) return
      try {
        videoRef.current.muted = false
        await videoRef.current.play()
        setNeedUserGesture(false)
      } catch {
        // ignore playback errors
      }
    }

    return (
        <div className="shadow bg-white">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
                <Link to="/">
                    <img src="client/public/logo.svg" alt="logo" className="h-11 w-auto" />
                </Link>
                <div className="flex items-center gap-4 text-sm">
                    <p className="hidden sm:block">Hi, {user?.name}</p>
                    <button onClick={logoutUser}  className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-full px-6 py-2">Logout</button>
                    <button type='button' aria-expanded={showAd} onClick={() => setShowAd(true)} className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">AD</button>
                </div>
            </nav>

            {showAd && (
              <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60' onClick={() => setShowAd(false)}>
                <div className='relative w-full max-w-3xl mx-4 bg-transparent rounded-lg' onClick={(e)=>e.stopPropagation()}>
                  <button aria-label='close' className='absolute top-3 right-3 text-white bg-black/30 hover:bg-black/50 rounded-full p-1' onClick={() => setShowAd(false)}>
                    <X className='w-5 h-5' />
                  </button>

                  <button aria-label='prev' className='absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2' onClick={() => { setIndex(i => (i - 1 + videos.length) % videos.length); setNeedUserGesture(false); }}>
                    <ChevronLeft className='w-6 h-6' />
                  </button>

                  <div className='aspect-video w-full relative'>
                    <video ref={videoRef} className='w-full h-full rounded-lg bg-transparent' src={videos[index]} controls autoPlay playsInline />
                    {needUserGesture && (
                      <div className='absolute inset-0 flex items-center justify-center'>
                        <button type='button' aria-label='play video' title='Play' onClick={handlePlayClick} className='bg-white/90 text-black rounded-full p-4 shadow-lg'>
                          <Play className='w-6 h-6' />
                        </button>
                      </div>
                    )}
                  </div>

                  <button aria-label='next' className='absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/30 hover:bg-black/50 rounded-full p-2' onClick={() => { setIndex(i => (i + 1) % videos.length); setNeedUserGesture(false); }}>
                    <ChevronRight className='w-6 h-6' />
                  </button>
                </div>
              </div>
            )}
        </div>
    )

}

export default Navbar