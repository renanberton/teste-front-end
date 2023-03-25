import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/home';
import { Blog } from './components/Blog';
import { Users } from './components/Users';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Posts' element={<Blog />} />
        <Route path='/Users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
