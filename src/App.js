import './App.css';
import NavBar from './components(NavBar)';
import  Home from './pages';
import Settings from './pages/settings';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <NavBar />
        <Routes>
            <Route path='/' exact component={Home} />
            <Route path='./settings' component={Settings} />
        </Routes>
    </Router>
  );
}

export default App;
