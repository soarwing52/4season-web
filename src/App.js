import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import { WithoutNavbar, WithNavbar, WithSidebar } from './Components/Bars/NavbarControl';

import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Route element={<WithoutNavbar />}>
          <Route path={process.env.PUBLIC_URL + "/Login"} element={<Login />} />
        </Route>
        <Route element={<WithNavbar />}>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path={process.env.PUBLIC_URL + "/Register"} element={<Register />} />
        </Route>
      </div>
    </Router>
  );
}

export default App;
