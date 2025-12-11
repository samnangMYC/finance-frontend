
import ModernSidebar from './components/ModernSidebar'
import Topbar from './components/Topbar'
import { Outlet } from 'react-router-dom'

const AdminDashboardLayout = () => {
  
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <ModernSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <div className="flex-1 overflow-auto">
          <Outlet />

        </div>
      </div>
    </div>
  )
}

export default AdminDashboardLayout