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
import OrderAllFinish from './screens/OrderAllFinish';
import OrderNoFinish from './screens/OrderNoFinish';
import Warehouse1 from './screens/Warehouse1';
import Warehouse2 from './screens/Warehouse2';
import Warehouse3 from './screens/Warehouse3';
import AllMaterials from './screens/AllMaterials';
import Raiting from './screens/Raiting';
import Salary from './screens/Salary';
import BuyMaterial from './screens/BuyMaterial';
import MoveMoney from './screens/MoveMoney';
import OrderMasterMaterials from './screens/OrderMasterMaterials';

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
          <Route path='/executionofworks/orderallfinish' element={<OrderAllFinish/>}/>
          <Route path='/executionofworks/ordernofinish' element={<OrderNoFinish/>}/>
          <Route path='/executionofworks/movemoney' element={<MoveMoney/>}/>
          <Route path='/executionofworks/ordermastermaterials' element={<OrderMasterMaterials/>}/>
          
        <Route path='/warehouse' element={<Warehouses/>}/>
          <Route path='/warehouse/warehouse1' element={<Warehouse1/>}/>
          <Route path='/warehouse/warehouse2' element={<Warehouse2/>}/>
          <Route path='/warehouse/warehouse3' element={<Warehouse3/>}/>
          <Route path='/warehouse/allmaterials' element={<AllMaterials/>}/>
          <Route path='/warehouse/buymaterial' element={<BuyMaterial/>}/>

        <Route path='/salaryandraiting' element={<SalaryAndRating/>}/>
          <Route path='/salaryandraiting/raiting' element={<Raiting/>}/>
          <Route path='/salaryandraiting/salary' element={<Salary/>}/>

        <Route path='/providers' element={<Providers/>}/>
        <Route path='/amenities' element={<Amenities/>}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

