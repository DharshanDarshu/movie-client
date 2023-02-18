import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Header() {
  return (
    <div className='flex items-center justify-between p-8'>
      <div className='flex items-center space-x-4'>
        <p className='text-stone-300'>New</p>
        <form className='flex items-center text-stone-500 space-x-4 text-sm border border-stone-700 rounded-full w-80 h-10 px-2'>
          <MagnifyingGlassIcon className='h-5 w-5' />
          <input
            type='text'
            placeholder='Search Everything'
            className='bg-transparent outline-none placeholder:text-stone-500'
          />
        </form>
      </div>
      <div className='flex items-center space-x-2 text-stone-200 text-sm'>
        <p>Add Category</p>
        <p>Add Movie</p>
        <Link href='/add-language'>
          <p>Add Language</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
