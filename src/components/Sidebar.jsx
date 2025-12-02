import React from 'react'

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:w-64 md:flex-col bg-white border-r border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="h-16 flex items-center px-6 font-bold text-orange-100 text-xl">Finance Admin</div>
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1">
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-orange-100 hover:bg-gray-600">
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-orange-100 hover:bg-gray-600">
              <span>Accounts</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-orange-100 hover:bg-gray-600">
              <span>Transactions</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-orange-100 hover:bg-gray-600">
              <span>Reports</span>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-md text-orange-100 hover:bg-gray-600">
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-4 text-sm text-gray-500">v1.0</div>
    </aside>
  )
}
