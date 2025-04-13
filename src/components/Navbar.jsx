import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain rounded-2xl' />
      </NavLink>
      <nav className='flex text-xl gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-white" : "text-gray-800" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-white" : "text-gray-800"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-white" : "text-gray-800"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;