"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useRef, useState } from "react";

type Props = {
  categories: any;
  languages: any;
};

function MovieForm({ categories, languages }: Props) {
  console.log(categories[0].category);
  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [dropImage, setDropImage] = useState("");
  const [cover_image, setCoverImage] = useState("");
  const [video, setVideo] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const fileRef = useRef<any>(null);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {};

  const handleChangeImage = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const removeSelectedImage = () => {
    setFile(null);
    if (fileRef.current) {
      fileRef.current.value = null;
    }
  };
  return (
    <form
      className='w-[400px] bg-stone-600 px-8 pt-4 pb-6'
      onSubmit={handleSubmit}>
      <h1 className='text-2xl text-gray-100 mb-3 capitalize'>
        Add Movie
      </h1>
      <div className='flex flex-col space-y-2 mb-4'>
        <label
          htmlFor=''
          className='block text-sm font-medium text-gray-100 rounded-md capitalize'>
          Movie
        </label>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={`Enter the title`}
          className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm'
        />
      </div>
      <div className='flex flex-col space-y-2 mb-4'>
        <label
          htmlFor=''
          className='block text-sm font-medium text-gray-100 rounded-md'>
          Description
        </label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='Enter the sub title'
          className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm'
        />
      </div>
      <div className='flex flex-col space-y-2 mb-4'>
        <label
          htmlFor=''
          className='block text-sm font-medium text-gray-100 rounded-md'>
          Sub Title
        </label>
        <input
          type='text'
          value={subTitle}
          onChange={(e) => setSubTitle(e.target.value)}
          placeholder='Enter the sub title'
          className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm'
        />
      </div>
      <div>
        <label
          className='block text-sm font-medium text-gray-100 rounded-md'
          htmlFor=''>
          Category
        </label>
        <select
          name=''
          className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm w-full'
          id=''>
          <option value=''>{categories[0].category}</option>
          {categories.map((category: any) => {
            <option value=''>
              {/* {category.category} */}
              cate
            </option>;
          })}
        </select>
      </div>
      <div>
        <label htmlFor=''>Language</label>
        <select
          name=''
          id=''>
          {languages.map((language: any) => {
            <option value={language.language}>
              {language.language}
            </option>;
          })}
        </select>
      </div>
      <div className='flex flex-col space-y-2'>
        <label
          htmlFor='file_input'
          className='block mb-2 text-sm font-medium text-gray-100'>
          Image Upload
        </label>
        <input
          accept='image/*'
          type='file'
          ref={fileRef}
          onChange={handleChangeImage}
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
      {file && (
        <div className='relative'>
          <Image
            className='mt-4 h-28 object-contain'
            src={URL.createObjectURL(file)}
            width={800}
            height={800}
            alt='Thumb'
          />
          <button
            onClick={removeSelectedImage}
            className='absolute top-0 right-0 flex items-center justify-center bg-black rounded-full w-6 h-6 text-white py-1'>
            <XMarkIcon className='w-5 h-5' />
          </button>
        </div>
      )}
      <button
        type='submit'
        disabled={isLoading}
        className='bg-stone-200 py-1 mt-6 px-4 rounded-sm'>
        {!isLoading ? "Upload" : "Loading..."}
      </button>
    </form>
  );
}

export default MovieForm;
