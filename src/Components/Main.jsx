import React from 'react'
import { TiArrowRightOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import monkey from '../../public/monkey.png'

const Main = () => {
  return (
    <div className='px-14 mt-6 h-[740px] relative'>
        <p className='leading-none text-[300px] font-anton font-extrabold text-creamy'>FUTURE OF</p>
        <p className='text-[200px] font-anton font-extrabold leading-none text-creamy'>PRIVATE EQUiTY</p>
        <img src={monkey} className='absolute top-[24.1%] left-[30%] scale-125' />
        <div className='h-[30.9%] flex justify-between'>

          <div className='bg-creamy h-full w-[30%] mt-12 rotate-6 rounded-3xl flex justify-center items-center'>
            <div className='h-[70%] w-[80%] -rotate-6'>
              <Link to="/personal" className='h-[33.3%] w-[100%] text-black font-oswald font-semibold flex items-center justify-between px-4'>
                <p>Personal</p>
                <TiArrowRightOutline size={20}/>
              </Link>

              <Link to="/team" className='h-[33.3%] w-[100%] rounded-lg bg-black text-creamy font-oswald font-semibold flex items-center justify-between px-4'>
              <p>Team</p>
              <TiArrowRightOutline color='#FF671B' size={20}/>
              </Link>

              <Link to="/business" className='h-[33.3%] w-[100%] text-black font-oswald font-semibold flex items-center justify-between px-4'>
              <p>Business</p>
              <TiArrowRightOutline size={20}/>
              </Link>

            </div>
          </div>


          <div className='h-full w-[30%] relative flex flex-col justify-end items-end'>
            <p className='text-creamy text-[200px] leading-none font-anton font-extrabold top-[5%] left-[-12%] absolute'>2025</p>
            <div className='w-[120%] absolute top-[53%] bg-orangy h-[90px] right-[-8.7%] z-0 flex justify-end'>
            <p className='text-2xl font-anton text-creamy mr-7'>STEP INTO THE FUTURE OF FINANCE</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main