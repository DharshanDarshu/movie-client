import Image from "next/image";

type Props = {
  language: any;
};

function Language({ language }: Props) {
  console.log(language);
  return (
    <div className='flex flex-col justify-between w-[230px] space-y-4 bg-stone-800 rounded-3xl p-4 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out shadow-md'>
      <Image
        src={`http://localhost:4000/image/${
          language.language_image || language.category_image
        }`}
        // src={`/assests/action2.jpg`}
        className='w-16 h-12 rounded-xl'
        width={800}
        height={800}
        alt='logo'
      />
      <div className='flex flex-col'>
        <h2 className='text-stone-200 text-sm capitalize'>
          {language.language || language.category}
        </h2>
        <p className='text-stone-400 text-sm mt-1 capitalize'>
          {language?.sub_title}
        </p>
      </div>
    </div>
  );
}

export default Language;
