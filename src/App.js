import './App.css';
import NavBar from './components(NavBar)';
import { Nav } from './components(NavBar)/NavBarElements';
import  Home from './pages';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Outlet } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path='/' exact element={<Home/>}>
              <Route path='settings' element={<Settings/>} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
