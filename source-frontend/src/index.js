import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './screens/MainPage';
import OrderWork from './screens/OrderWork';
import ExecutionOfWorks from './screens/ExecutionOfWorks';
import Warehouses from './screens/Warehouses';
import SalaryAndRating from './screens/SalaryAndRaiting';
import NewOrder from './screens/NewOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        
        <Route path='/orderwork' element={<OrderWork/>}/>
          <Route path='/orderwork/neworder' element={<NewOrder/>}/>

        <Route path='/executionofworks' element={<ExecutionOfWorks/>}/>

        <Route path='/warehouse' element={<Warehouses/>}/>
        <Route path='/salaryandrating' element={<SalaryAndRating/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

