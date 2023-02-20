"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

type Props = {
  categories: any;
  languages: any;
};

function MovieForm({ categories, languages }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [dropImage, setDropImage] = useState("");
  const [cover_image, setCoverImage] = useState("");
  const [video, setVideo] = useState("");
  const [language, setLanguage] = useState("");
  const [category, setCategory] = useState("");
  const [categoriesArray, setCategoriesArray] =
    useState<any>([]);
  const fileRef = useRef<any>(null);
  const router = useRouter();

  useEffect(() => {
    setCategoriesArray(categories);
  }, [categories]);

  console.log(categoriesArray);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
  ) => {
    router.push(
      `/add-movie/upload-image?title=${title}&description=${description}&subtitle=${subTitle}&language=${language}&category=${category}`,
    );
  };
  return (
    <>
      <div className='flex items-center'>
        <div className='flex items-center justify-center h-8 w-8 mb-4 bg-stone-400 rounded-full'>
          <p>1</p>
        </div>
        <div className='h-1 w-24 mb-4 bg-stone-700'></div>
        <div className='flex items-center justify-center h-8 w-8 mb-4 bg-stone-700 rounded-full'>
          <p>2</p>
        </div>
      </div>
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
            className='block text-sm font-medium text-gray-100 rounded-md mb-2'
            htmlFor=''>
            Category
          </label>
          <select
            name=''
            onChange={(e) => setCategory(e.target.value)}
            className='border border-gray-300 px-2 py-[3px] mb-3 outline-none placeholder:text-sm w-full'
            id=''>
            <option value='horror'>Horror</option>
            <option value='drama'>Drama</option>
            <option value='action'>Action</option>
            <option value='triller'>Triller</option>
          </select>
        </div>
        <div>
          <label
            className='block text-sm font-medium text-gray-100 mb-2 rounded-md'
            htmlFor=''>
            Language
          </label>
          <select
            name=''
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm w-full'
            id=''>
            <option value='kannada'>Kannada</option>
            <option value='english'>English</option>
            <option value='telugu'>Telugu</option>
            <option value='tamil'>Tamil</option>
            <option value='malayalam'>Malayalam</option>
            <option value='hindi'>Hindi</option>
          </select>
        </div>
        <button
          type='submit'
          className='bg-stone-200 py-1 mt-6 px-4 rounded-sm'>
          Next
        </button>
      </form>
    </>
  );
}

export default MovieForm;
