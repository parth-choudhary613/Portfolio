import React from 'react';
//
import logo from '../assets/Logo (1).png'
const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
<div className='flex justify-between items-center'>

  {/* logo */}
  <a href='#'>
    <img className="size-48 hover:size-full" src={logo} alt=''/>
  </a>
{/* button */}
<button className='btn btn-sm'>Work With Me</button>
      </div>
</div>

    </header>
  )
};

export default Header;
