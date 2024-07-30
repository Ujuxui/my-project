import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';


const Header = () => {
  return (
    <>    <div className='container-2x h-12 w-full bg-gray-800 grid grid-cols-3 '>
        <div className='flex gap-6 justify-start items-center font-medium'>
            <div className='flex gap-2 ml-6'>
            <InstagramIcon className='text-gray-400'  fontSize='small'/>
        <h3 className='text-gray-400 text-sm'>100k Followers</h3></div>
        <div className='flex gap-2'><FacebookIcon className='text-gray-400' fontSize='small'/>
        <h3 className='text-gray-400 text-sm'>500k Followers</h3></div>
        <div className='flex gap-2'><LocalPhoneOutlinedIcon className='text-gray-400'  fontSize='small' />
        <h3 className='text-gray-400 text-sm'>+1-202-555-0174</h3></div>
        </div>
        <div className='justify-center items-center flex gap-1'>
            <h3 className='px-4 py-2 text-xs font-semibold rounded-full bg-blue-600 text-white'>Hot</h3>
            <span role="img" aria-label="wave" className="text-2xl">👋</span>
        <h3 className='text-gray-400 text-xs font-bold'> Intro price. Get Histudy for Big Sale -95% off.</h3></div>
        <div className='flex gap-4 justify-end items-center mr-4'>
            <FacebookIcon className='text-slate-300' fontSize='small'/><TwitterIcon className='text-slate-300'  fontSize='small'/>
            <LinkedInIcon className='text-slate-300'  fontSize='small'/><InstagramIcon className='text-slate-300'  fontSize='small'/>
<div className='bg-slate-500 h-4 w-0.5'></div>
<div className='relative group'>
  <h3 className='text-slate-300 flex text-sm font-semibold items-center cursor-pointer'>
    <img src="https://ik.imagekit.io/jkay012024/flag-u-s-outlying-islands-emoji-by-google.png?updatedAt=1722318256655" alt="US Flag" className="w-6 h-7 mr-2" />
    English
    <KeyboardArrowDownOutlinedIcon className='transition-transform duration-300 group-hover:rotate-180' fontSize='small'/>
  </h3>
  <div className='absolute left-0 hidden mt-2 w-40 bg-white rounded-md shadow-lg group-hover:block z-50'>
    <a href="#" className='flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100'><img src="https://ik.imagekit.io/jkay012024/Screenshot%202024-07-30%20163414.png?updatedAt=1722337569997" 
                       alt="US Flag" className="w-7 h-4 mr-2" />Français</a>
    <a href="#" className='flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100'><img src="https://ik.imagekit.io/jkay012024/Screenshot%202024-07-30%20163437.png?updatedAt=1722337569660" 
                       alt="US Flag" className="w-7 h-4 mr-2" />Deutsch</a>
  </div>    
</div>

<div className='relative group'>
<h3 className='text-slate-300 flex text-sm font-semibold items-center cursor-pointer'>
    USD<KeyboardArrowDownOutlinedIcon className='transition-transform duration-300 group-hover:rotate-180' fontSize='small'/></h3>
    <div className='absolute left-0 hidden mt-2 w-40 bg-white rounded-md shadow-lg group-hover:block z-50'>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>EUR</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>GBP</a>
  </div>
</div>


</div>
</div>
    
        <div className='container-2x grid grid-cols-3 h-20 justify-start items-center shadow-lg fixed left-0 right-0 bg-white z-50 '>
            <div className='flex'>
        <img src="https://rainbowthemes.net/themes/histudy/wp-content/uploads/2024/02/logo.png" alt="main-logo" className='h-12 w-38 absolute ml-7' />
       
       <div className='relative group'>
<button  className='bg-slate-100 text-gray-700 py-3 px-6 rounded-full font-semibold ml-48'>
          <WidgetsOutlinedIcon className='mr-2' fontSize="small" />
        Category</button>
    <div className='absolute left-0 hidden ml-48 mt-2 w-44 bg-white text-sm rounded-md shadow-lg group-hover:block z-50'>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Arts & Humanities</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Bitcoin Forums</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Cardiovascular Training</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Core Functions</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Finance & Accounting</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Functional Training</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>IT</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Personal Development</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Quantum Chemistry</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Risk Management</a>
    <a href="#" className='block px-4 py-2 text-gray-700 hover:bg-gray-100'>Strength Training</a>
  </div>
</div>

        </div>
        <div className='flex gap-3 justify-center items-center'>
            <h3 className='flex justify-center items-center'>Demos<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
            <h3 className='flex justify-center items-center'>Courses<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
            <h3 className='flex justify-center items-center'>Pages<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
            <h3 className='flex justify-center items-center'>Elements<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
            <h3 className='flex justify-center items-center'>Blog<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
            <h3 className='flex justify-center items-center'>Help<KeyboardArrowDownOutlinedIcon fontSize='small' /></h3>
        </div>
        <div className='flex justify-end items-center'>
            <SearchIcon className='mr-4'  fontSize='small'/><ShoppingCartOutlinedIcon  className='ml-3 mr-3' fontSize='small'/>
            <div className='bg-slate-300 h-4 w-0.5'></div>
            <button className=' font-semibold'><PersonOutlineOutlinedIcon className='mr-2 ml-2' fontSize='small' />Admin</button>
<button className='text-white ml-10 font-semibold bg-gradient-to-r from-custom-start to-custom-end rounded-full px-6 py-3 mr-3 transition-all duration-75 ease-in-out hover:bg-gradient-to-l  hover:from-custom-end hover:to-custom-start drop-shadow-sm cursor-pointer'>
    Join Now</button>
        </div>
        </div>
        </>

  )
}

export default Header;
