
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import OrderSummary from './components/OrderSummary'
import NotFound from './components/NotFound'
import Products from './components/Products'
import Featured from './components/Featured'
import Newproduct from './components/Newproduct'
import Users from './components/Users'
import UserDetails from './components/UserDetails'
import Admin from './components/Admin'
import Profile from './components/Profile'
import { AuthProvider } from './components/auth'
import Login from './components/Login'
import { RequireAuth } from './components/RequireAuth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from './components/Logout'
function App() {

  return (
  <>
 <AuthProvider>
 <Navbar/>
    
    <Routes>
      <Route path="/" element={<RequireAuth>
        <Home/>
      </RequireAuth>}/>
      <Route path='/login' element={<Login/>} />
      <Route path='/logout' element={<Logout/>} />

      <Route path="/about" element={<About/>}/>
      <Route path="/ordersummary" element={<OrderSummary/>}/>
      <Route path="/profile" element={
        <RequireAuth>
          <Profile/>
        </RequireAuth>
      }/>
  
      <Route path="products" element={
      
          <Products/>

      }>
         <Route  path="featured" element={<Featured/>}/>
          <Route path="new" element={<Newproduct/>}/>
      </Route>
  
      
      <Route path="users" element={<Users />}/>
    <Route path="/users/:userId" element={<UserDetails />} />
    <Route path="/users/admin" element={<Admin />} />
  
  
  
      <Route path="*" element={<NotFound/>}/>
     </Routes>
 </AuthProvider>
 <ToastContainer />
  </>
  )
}

export default App
