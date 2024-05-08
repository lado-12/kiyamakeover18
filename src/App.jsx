import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './Components/Navbar'
import ContactUs from './pages/ContactUs'
function App() {
  

  return (
    <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/Navbar' element={<Navbar/>}/>
    <Route path='/ContactUs' element={<ContactUs/>}/>
   </Routes>
    </>
  )
}

export default App
