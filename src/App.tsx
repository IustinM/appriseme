import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HabbitProvider from './Context/HabbitContext';
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="font-poppins">
    <Routes>
      <Route path='/' element={
        <Homepage/>
      }/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/dashboard' element={<HabbitProvider><Dashboard/></HabbitProvider>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </div>
  );
}

export default App;
