import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blogs/:title' element={<Blog />} />
        <Route path='*' element={<Error />} />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
