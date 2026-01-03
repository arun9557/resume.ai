import React from "react";
import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
    const user = {name: 'Johnny Sins'}
    const navigate = useNavigate()

    const logoutUser = () =>{
        navigate('/')
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
                    <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2">AD</button>
                </div>
            </nav>
        </div>
    )

}

export default Navbar