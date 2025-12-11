import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
    const [dark, setDark] = useState(() => {
        try {
            const saved = localStorage.getItem('theme')
            if (saved) return saved === 'dark'
        } catch (e) { }
        return document.documentElement.classList.contains('dark')
    })
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null)

    useEffect(() => {
        try {
            localStorage.setItem('theme', dark ? 'dark' : 'light')
        } catch (e) { }
        if (dark) document.documentElement.classList.add('dark')
        else document.documentElement.classList.remove('dark')
    }, [dark])

    useEffect(() => {
        function handleClick(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false)
        }
        window.addEventListener('mousedown', handleClick)
        return () => window.removeEventListener('mousedown', handleClick)
    }, [])

    return (
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <button className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition" aria-label="Open menu">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
           
                <h1 className="text-lg font-semibold">Dashboard</h1>                
       

            </div>

            <div className="flex-1 flex items-center justify-center sm:justify-end">
                <div className="hidden sm:flex items-center gap-3 w-full max-w-2xl">
                    <div className="flex items-center bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md px-3 py-2 w-full shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.386-1.414 1.415-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                        <input
                            className="ml-2 bg-transparent w-full outline-none text-sm text-gray-700 dark:text-gray-200"
                            placeholder="Search transactions, accounts, users..."
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3 ml-4">
                    <button
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition relative"
                        aria-label="Notifications"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg>
                        <span className="absolute -top-0.5 -right-0.5 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium leading-none text-white bg-red-500 rounded-full">3</span>
                    </button>

                    <button
                        onClick={() => setDark((s) => !s)}
                        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        aria-label="Toggle theme"
                    >
                        {dark ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 14a4 4 0 100-8 4 4 0 000 8zM4.22 4.22a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06L4.22 5.28a.75.75 0 010-1.06zM14.66 14.66a.75.75 0 011.06 0l1.06 1.06a.75.75 0 11-1.06 1.06l-1.06-1.06a.75.75 0 010-1.06zM2 10a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 012 10zm14.75-.75h1.5a.75.75 0 010 1.5h-1.5a.75.75 0 010-1.5zM4.22 15.78a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06l-1.06 1.06a.75.75 0 01-1.06 0zM14.66 5.34a.75.75 0 010-1.06l1.06-1.06a.75.75 0 111.06 1.06L15.72 5.34a.75.75 0 01-1.06 0z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M17.293 13.293A8 8 0 116.707 2.707a6 6 0 1010.586 10.586z" />
                            </svg>
                        )}
                    </button>

                    <div className="relative" ref={menuRef}>
                        <button
                            onClick={() => setMenuOpen((s) => !s)}
                            className="flex items-center gap-2 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                            aria-haspopup="true"
                            aria-expanded={menuOpen}
                        >
                            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center text-sm font-medium text-gray-700 dark:text-gray-100">A</div>
                            <div className="hidden sm:flex flex-col text-left">
                                <span className="text-sm font-medium">Admin</span>
                                <span className="text-xs text-gray-500 dark:text-gray-300">Owner</span>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 text-gray-500 transition ${menuOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.25 8.29a.75.75 0 01-.02-1.06z" clipRule="evenodd" />
                            </svg>
                        </button>

                        {menuOpen && (
                            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg py-1 z-50">
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Profile</button>
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Settings</button>
                                <div className="border-t border-gray-100 dark:border-gray-700" />
                                <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700">Sign out</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
