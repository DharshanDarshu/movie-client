"use client";

import {
  CheckIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";

function ImageUpload() {
  const [dropfile, setDropFile] = useState<File | null>(
    null,
  );
  const [coverfile, setCoverFile] = useState<File | null>(
    null,
  );
  const dropRef = useRef<any>(null);
  const coverRef = useRef<any>(null);

  const handleChangeDropImage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setDropFile(e.target.files[0]);
    }
  };
  const handleChangeCoverImage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setCoverFile(e.target.files[0]);
    }
  };

  const removeDropSelectedImage = () => {
    setDropFile(null);
    if (dropRef.current) {
      dropRef.current.value = null;
    }
  };

  const removeCoverSelectedImage = () => {
    setCoverFile(null);
    if (coverRef.current) {
      coverRef.current.value = null;
    }
  };
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex items-center'>
        <div className='flex items-center justify-center h-8 w-8 mb-4 bg-green-600 text-white rounded-full'>
          <CheckIcon className='w-5 h-5' />
        </div>
        <div className='h-1 w-24 mb-4 bg-green-700'></div>
        <div className='flex items-center justify-center h-8 w-8 mb-4 bg-stone-400 rounded-full'>
          <p>2</p>
        </div>
      </div>
      <form className='w-[400px] bg-stone-600 px-8 pt-4 pb-6'>
        <h1 className='text-2xl text-gray-100 mb-3 capitalize'>
          Add Movie
        </h1>
        <div className='flex flex-col space-y-2 mb-2'>
          <label
            htmlFor='file_input'
            className='block mb-2 text-sm font-medium text-gray-100'>
            Drop Movie
          </label>
          <input
            accept='image/*'
            type='file'
            ref={dropRef}
            onChange={handleChangeDropImage}
            id='file_input'
            className='border border-stone-400 text-white rounded-full text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-gray-200 file:text-stone-800
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700'
          />
        </div>
        {dropfile && (
          <div className='relative'>
            <Image
              className='mt-4 h-28 object-contain'
              src={URL.createObjectURL(dropfile)}
              width={800}
              height={800}
              alt='Thumb'
            />
            <button
              onClick={removeDropSelectedImage}
              className='absolute top-0 right-0 flex items-center justify-center bg-black rounded-full w-6 h-6 text-white py-1'>
              <XMarkIcon className='w-5 h-5' />
            </button>
          </div>
        )}
        <div className='flex flex-col space-y-2'>
          <label
            htmlFor='file_input'
            className='block mb-2 text-sm font-medium text-gray-100'>
            Cover Image
          </label>
          <input
            accept='image/*'
            type='file'
            ref={coverRef}
            onChange={handleChangeCoverImage}
            id='file_input'
            className='border border-stone-400 text-white rounded-full text-sm text-grey-500
            file:mr-5 file:py-2 file:px-6
            file:rounded-full file:border-0
            file:text-sm file:font-medium
            file:bg-gray-200 file:text-stone-800
            hover:file:cursor-pointer hover:file:bg-amber-50
            hover:file:text-amber-700'
          />
        </div>
        {coverfile && (
          <div className='relative'>
            <Image
              className='mt-4 h-28 object-contain'
              src={URL.createObjectURL(coverfile)}
              width={800}
              height={800}
              alt='Thumb'
            />
            <button
              onClick={removeCoverSelectedImage}
              className='absolute top-0 right-0 flex items-center justify-center bg-black rounded-full w-6 h-6 text-white py-1'>
              <XMarkIcon className='w-5 h-5' />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}

export default ImageUpload;
