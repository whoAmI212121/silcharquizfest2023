import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between h-24 items-center text-gray-600 max-w-[1240px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#4e2686]"><Link to='/'>Silchar Quiz Fest 2023</Link></h1>
      <ul className="hidden md:flex">
        <li className="p-4 font-semibold"><Link to='/'> Home</Link></li>
        <li className="p-4 font-semibold whitespace-nowrap"><Link to='/cm'> Convener's Message</Link></li>
        <li className="p-4 font-semibold"><Link to='/events'> Events</Link></li>
        <li className="p-4 font-semibold"><Link to='/register'> Register</Link></li>
        <li className="p-4 font-semibold"><Link to='/about'> About</Link></li>
        <li className="p-4 font-semibold"><Link to='/contact'> Contact</Link></li>
        {currentUser ? (
            <li className="p-4 font-semibold whitespace-nowrap" onClick={signOutUser}><Link to='/auth'> Log Out</Link></li>
          ) : (
            <li className="p-4 font-semibold"><Link to='/auth'> Login</Link></li>
          )}
        

      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 border-r border-r-gray-100 w-3/5 h-full bg-[#d5c3ff] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#4e2686] m-4 pt-4">
        Silchar Quiz Fest
        </h1>
        <ul className=" uppercase p-4">
          <li className="p-4 border-b border-gray-200"><Link to='/'>Home</Link> </li>
          <li className="p-4 border-b border-gray-200"><Link to='/cm'>Convener's Message</Link> </li>
          <li className="p-4 border-b border-gray-200"><Link to='/events'>Events</Link> </li>
          <li className="p-4 border-b border-gray-200"><Link to='/register'>Register</Link> </li>
          <li className="p-4 border-b border-gray-200"><Link to='/about'>About Us</Link> </li>
          {currentUser ? (
            <li className="p-4 border-b border-gray-200" onClick={signOutUser}><Link to='/auth'> Log Out</Link></li>
          ) : (
            <li className="p-4 border-b border-gray-200"><Link to='/auth'> Login</Link></li>
          )}
          <li className="p-4"><Link to='/contact' >Contact</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
