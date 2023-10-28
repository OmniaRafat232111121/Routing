// import { NavLink } from "react-router-dom"
// import { useAuth } from "./auth"
// import{useNavigate} from 'react-router-dom'
// const Navbar = () => {
  // const auth=useAuth();
  // const navigate = useNavigate();

  // const handleLogout = () => {
  //   auth.logout();
  //   navigate("/logout");
  // };

  // const navLinkStyles=({isActive})=>{
  //   return{
  //     fontWeight:isActive ? 'bold':'normal',
  //     backgroundColor:isActive ? 'blue':'',
  //     padding:isActive ? '10px':'',
  //     borderRadius:isActive ? '4px':'',
  //     color:isActive ? 'white':''



  //   }

  // }
//   return (
//     <nav className="primary-nav">
//       <NavLink to='/'  style={navLinkStyles} >Home</NavLink>
//       <NavLink to='about' style={navLinkStyles}>About</NavLink>
//       <NavLink to='profile' style={navLinkStyles}>Profile</NavLink>
//       <NavLink to='products' style={navLinkStyles}>Products</NavLink>
//       <NavLink to='users' style={navLinkStyles}>Users</NavLink>
// {!auth.user ? (
//         <NavLink to='login' style={navLinkStyles}>Login</NavLink>


// ):(
//   <NavLink to='logout'  
//   onClick={handleLogout} style={navLinkStyles}>
//     Logout
//     </NavLink>

// )}


//     </nav>

//   )
// }

// export default Navbar



import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from "./auth"
import { NavLink } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const auth=useAuth();
  const navigate = useNavigate();
  const Links = [
    { name: 'Home', link: '/' },
    { name: 'UserList', link: '/' },
    { name: 'Profile', link: '/profile' } ,
    { name: 'About', link: '/about' },
     { name: 'Products', link: '/products' },
     { name: 'Users', link: '/users' }

  
  ];
  
  const navLinkStyles=({isActive})=>{
    return{
      fontWeight:isActive ? 'bold':'normal',
      backgroundColor:isActive ? 'blue':'',
      padding:isActive ? '10px':'',
      borderRadius:isActive ? '4px':'',
      color:isActive ? 'white':''



    }

  }
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };


  const handleLogout = () => {
    auth.logout();
    navigate("/logout");
  };
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <NavLink  to={"/"} className="text-3xl text-blue-600 mr-1 pt-2">
            User Management</NavLink>
        </div>

        <div onClick={toggleMenu} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center 
          md:pb-0 pb-12 absolute md:static bg-white 
          md:z-auto z-[100] left-0
           w-full md:w-auto md:pl-0 pl-9 transition-all 
           duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a href={link.link} className="text-gray-800
               hover:text-gray-400 duration-500">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {!auth.user ? (
        <NavLink to='login' style={navLinkStyles}>Login</NavLink>
):(
  <NavLink to='logout'  
  onClick={handleLogout} style={navLinkStyles}>
    Logout
    </NavLink>

)}

      </div>
    </div>
  );
};

export default Navbar;