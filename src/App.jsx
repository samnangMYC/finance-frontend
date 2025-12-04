import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AdminDashboardLayout from './AdminDashboardLayout';
import Dashboard from './components/Dashboard.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-6"> <h1 className="text-2xl font-semibold">Home Page</h1> </div>} />
        <Route path="/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<Dashboard /> } />
          <Route path="account" element={<div className="p-6"> <h1 className="text-2xl font-semibold">Accounts Page</h1> </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
