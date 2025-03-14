import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import PageNotFound from './components/PageNotFound'
import Contact from './components/Contact'

import './App.css'
import ContactSeoul from './components/ContactSeoul'
import ContactLondon from './components/ContactLondon'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>{' | '}
          <Link to="/contact">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/contact' element={<Contact/>}>
            <Route path="seoul" element={<ContactSeoul/>}>
            </Route>
            <Route path="london" element={<ContactLondon/>}>
            </Route>
          </Route>
          <Route path="*" element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
