import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

function Banner() {
  return (
    <div className='h-[300px] px-8'>
      <div className='relative bg-black h-full object-cover rounded-3xl'>
        <img
          src='/assests/bg4.jpg'
          alt='logo'
          className='absolute right-0 h-full w-[709px] rounded-r-3xl'
        />
        <div className='absolute right-0 h-full w-[709px] rounded-r-3xl imageBlur'></div>
        <div className='flex flex-col justify-between space-y-2 absolute rounded-l-3xl px-8 py-12 w-[270px] h-full bg-black text-white'>
          <p className='text-4xl font-bold'>
            The Avatar Ant Man
          </p>
          <div className='flex-1 flex space-x-8'>
            <div className='flex space-x-1'>
              <StarIcon className='w-5 h-5 text-amber-400' />
              <StarIcon className='w-5 h-5 text-amber-400' />
              <StarIcon className='w-5 h-5 text-amber-400' />
              <StarIcon className='w-5 h-5 text-amber-400' />
              <StarIcon className='w-5 h-5 text-amber-400' />
            </div>
            <div>
              <p className='text-sm'>English</p>
            </div>
          </div>
          <button className='bg-red-600 hover:bg-red-700 transition-all duration-200 ease-out rounded-lg px-4 py-2 w-32'>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
