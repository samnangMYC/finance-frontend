import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import AdminDashboardLayout from './AdminDashboardLayout';
import Dashboard from './components/Dashboard.jsx';
import AccountLayout from './components/AccountLayout.jsx';
import AddAccount from './components/AddAccount.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div className="p-6"> <h1 className="text-2xl font-semibold">Home Page</h1> </div>} />

        <Route path="/dashboard" element={<AdminDashboardLayout />}>
          <Route index element={<Dashboard /> } />
          <Route path="account" element={<AccountLayout />} />
          <Route path="account/add" element={<AddAccount />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
