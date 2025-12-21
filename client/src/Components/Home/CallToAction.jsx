import React from 'react'
const CallToAction =() => {
    return (
        <div className="flex flex-col items-center justify-center border border-gray-200 rounded-2xl mx-auto py-20 max-w-5xl w-full bg-white">
            <h2 className="md:text-4xl/14 text-2xl font-bold bg-linear-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text">Boost your productivity today</h2>
            <p className="mt-4 text-slate-500 max-w-xl text-center">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
            <div className="flex items-center gap-4 mt-6 text-sm">
                <button type="button" className="bg-yellow-500 hover:bg-yellow-600 transition-all cursor-pointer px-8 py-3 text-white font-medium rounded-full active:scale-95">
                    Get Started
                </button>
                <button type="button" className="group flex items-center gap-2 px-8 py-3 cursor-pointer font-medium border border-gray-200 rounded-full text-gray-600 hover:bg-gray-100 transition active:scale-95">
                    Learn More
                    <svg className="mt-1 group-hover:translate-x-1 transition-all" width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
        </div>
    )
}
export default CallToAction