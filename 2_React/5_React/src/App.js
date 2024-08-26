import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Support } from './Components/Support';
import { About } from './Components/About';
import { Labs } from './Components/Labs';
import { NotFound } from './Components/NotFound';
import { Home } from './Components/Home'; 
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { MainHeader } from './Components/MainHeader';

function App() {
  return (
    <div>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/support">support</NavLink></li>
        <li><NavLink to="/about">about</NavLink> </li>
        <li><NavLink to="/labs">labs</NavLink></li>
      </ul>
    </nav>
      <Routes>
      <Route path='/' element={<MainHeader/>}>
        <Route index element={<Home/>} /> {/* Changed path to '/' */}
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/labs" element={<Labs />} />
        <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
