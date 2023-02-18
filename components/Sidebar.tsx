import {
  ArrowLeftOnRectangleIcon,
  CalendarDaysIcon,
  HeartIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
function Sidebar() {
  return (
    <nav className='sticky top-0 max-w-[300px] h-screen border-r border-stone-700 text-stone-500 pb-3'>
      <div className='px-8 py-2 flex flex-col justify-between h-full'>
        <Image
          src='/assests/logo.png'
          alt='logo'
          className='h-24 w-48'
          width={300}
          height={300}
        />
        <div className='flex-1'>
          <div className='my-4 space-y-6 border-b pb-12 border-stone-700'>
            <p className='font-semibold'>News Feed</p>
            <div className='navElement space-x-4'>
              <HomeIcon className='h-5 w-5 text-red-600' />
              <p className='text-white'>Home</p>
            </div>
            <div className='navElement space-x-4'>
              <HeartIcon className='h-5 w-5' />
              <p>WatchList</p>
            </div>
            <div className='navElement space-x-4'>
              <CalendarDaysIcon className='h-5 w-5' />
              <p>Coming Soon</p>
            </div>
          </div>

          <div>
            <p>Movies</p>
          </div>
        </div>

        <div className='navElement space-x-4'>
          <ArrowLeftOnRectangleIcon className='h-5 w-5 text-white' />
          <p>Log Out</p>
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;
