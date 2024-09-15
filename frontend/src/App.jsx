import{
  BrowserRouter,
  Route,
  Routes

} from 'react-router-dom';
import  Signup  from './pages/Signup';
import  Signin  from './pages/Signin';
import  Dashboard  from './pages/Dashboard';

import LandingPage from './pages/LandingPage';
import Confirmation from './pages/Confirmation';
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/signin" element={<Signin/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path='/confirmation' element={<Confirmation></Confirmation>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
