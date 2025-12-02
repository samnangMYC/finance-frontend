import React from 'react'

export default function Topbar() {
    return (
        <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <button className="md:hidden p-2 rounded-md hover:bg-gray-100">☰</button>
                <h1 className="text-lg font-semibold">Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                    <input
                        className="w-64 px-3 py-2 rounded-md border border-gray-200 focus:outline-none"
                        placeholder="Search transactions, accounts..."
                    />
                </div>
                <button className="p-2 rounded-full bg-gray-100">🔔</button>
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gray-300 rounded-full" />
                    <div className="text-sm">Admin</div>
                </div>
            </div>
        </header>
    )
}
