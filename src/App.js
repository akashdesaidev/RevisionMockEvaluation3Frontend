// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login';
import Profile from './components/Profile';
import Calculator from './components/Calculator';
import PrivateRoute from './components/PrivateRoute';
import { Toaster, toast } from 'sonner'


function App() {
  return (
    <Router>
     <Toaster position="top-center" richColors  />
      <div>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/calculator"
            element={
              <PrivateRoute>
                <Calculator />
              </PrivateRoute>
            }
          />
          <Route path="/*" element={<Navigate to="/signup" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
