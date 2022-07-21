import './App.scss';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import { WithoutNavbar, WithNavbar, WithSidebar } from './Components/Bars/NavbarControl';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';

import {
  CampList,
  CampDetail,
  CampRegister
} from "Pages/Camp"

function App() {
  const home_url = process.env.PUBLIC_URL;
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route element={<WithoutNavbar />}>
            <Route path={home_url + "/Login"} element={<Login />} />
          </Route>
          <Route element={<WithNavbar />}>
            <Route path={home_url + "/"} element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path={home_url + "/Register"} element={<Register />} />
            <Route path={home_url + "/Camp/List"} element={<CampList />} />
            <Route path={home_url + "/Camp/Register/:id"} element={<CampRegister />} />
            <Route path={home_url + "/Camp/Detail/:id"} element={<CampDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
