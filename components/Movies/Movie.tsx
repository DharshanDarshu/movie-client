import Image from "next/image";

function Movie() {
  return (
    <div className='relative mt-4'>
      <Image
        className='w-[220px] h-[330px] rounded-2xl'
        src='/assests/bg5.jpg'
        width={800}
        height={800}
        alt='logo'
      />
      {/* border-rose-600 */}
      <div className='flex justify-center items-center absolute top-0 m-2 rounded-full w-8 h-8 bg-black/80 border-2  border-green-600'>
        <p className='text-sm'>5</p>
      </div>
      <div className='flex items-center justify-between mt-1'>
        <h2 className='text-sm mx-2 text-gray-100'>
          Ant Man
        </h2>
        <p className='text-xs mx-2 text-stone-400 font-bold mr-12'>
          Category
        </p>
      </div>
    </div>
  );
}

export default Movie;
