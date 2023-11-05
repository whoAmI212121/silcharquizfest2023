import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Converner from './routes/converner/converner.component'
import EventPage from './routes/event-page/event-page.component'
import Register from './routes/register/register.component'
import About from './routes/about/about.component'
import Contact from './routes/contact/contact.component'
import { Login } from './routes/login/login.component'
import SignUp from './routes/signup/signup.component'
import RegistrationForm from './routes/oreg/oreg.component'
import SchoolRegistrationForm from './routes/sreg/sreg.component'
import AccommodationRegistrationForm from './routes/areg/areg.component'


const App = () => {
  return (
    <Routes>
        <Route index element={<Home/>}/>
        <Route path='/cm' element={<Converner/>}/>
        <Route path='/events' element={<EventPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/auth' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/oreg' element={<RegistrationForm/>}/>
        <Route path='/sreg' element={<SchoolRegistrationForm/>}/>
        <Route path='/areg' element={<AccommodationRegistrationForm/>}/>
    </Routes>
  )
}

export default App
