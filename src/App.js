import React, { useState } from "react";
import './App.scss';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { WithoutNavbar, WithNavbar, WithSidebar } from './Components/Bars/NavbarControl';
import { userContext } from 'Components/Authentication/userContext';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

import {
  Login,
  Register,
  Disclaimers,
  Payment
} from 'Pages/User';

import {
  CampList,
  CampDetail,
  CampRegister
} from "Pages/Camp";

import {
  PaymentList,
  PaymentDetail,
  PaymentForm,
} from "Pages/Finance";

function App() {
  const [user, setUser] = useState({})
  const home_url = process.env.PUBLIC_URL;
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <div className="App">
          <Routes>
            <Route element={<WithoutNavbar />}>

            </Route>
            <Route element={<WithNavbar />}>
              <Route path={home_url + "/"} element={<Home />} />
              <Route path='/Home' element={<Navigate replace to="/" />} />
              <Route path="*" element={<NotFound />} />

              <Route path={home_url + "User/Login"} element={<Login />} />
              <Route path={home_url + "User/Register"} element={<Register />} />
              <Route path={home_url + "User/Disclaimers"} element={<Disclaimers />} />
              <Route path={home_url + "User/Payment"} element={<Payment />} />

              <Route path={home_url + "Finance/PaymentList"} element={<PaymentList />} />
              <Route path={home_url + "Finance/PaymentDetail"} element={<PaymentDetail />} />
              <Route path={home_url + "Finance/PaymentForm"} element={<PaymentForm />} />

              <Route path={home_url + "/Camp/List"} element={<CampList />} />
              <Route path={home_url + "/Camp/Register/:id"} element={<CampRegister />} />
              <Route path={home_url + "/Camp/Detail/:id"} element={<CampDetail />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
