
import './App.css'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import ModernSidebar from './components/ModernSidebar'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 flex">
      <ModernSidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="flex-1 overflow-auto">
          <Dashboard />
        </div>
      </div>
    </div>
  )
}

export default App
