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
import OrderPay from './screens/OrderPay';
import OrderFinish from './screens/OrderFinish';
import Amenities from './screens/Amenities';
import Providers from './screens/Providers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<MainPage/>}/>

        <Route path='/orderwork' element={<OrderWork/>}/>
          <Route path='/orderwork/new' element={<NewOrder/>}/>
          <Route path='/orderwork/pay' element={<OrderPay/>}/>
          <Route path='/orderwork/finish' element={<OrderFinish/>}/>

        <Route path='/executionofworks' element={<ExecutionOfWorks/>}/>

        <Route path='/amenities' element={<Amenities/>}/>

        <Route path='/warehouse' element={<Warehouses/>}/>

        <Route path='/salaryandrating' element={<SalaryAndRating/>}/>

        <Route path='/providers' element={<Providers/>}/>

      </Routes>
    </Router>
  </React.StrictMode>
);

