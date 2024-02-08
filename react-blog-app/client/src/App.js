import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';

export default function App() {
  return ( // Important things
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/sign-in' element={<SignIn />}/>
        <Route path='/sign-up' element={<SignUp />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/projects' element={<Projects />}/>
      </Routes>
    </BrowserRouter>
  ); 
}