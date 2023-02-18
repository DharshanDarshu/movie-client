"use client";

import {
  ChangeEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import axios from "axios";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  addType: string;
};

function LanguageForm({ addType }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");
  const fileRef = useRef<any>(null);

  console.log(file);

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    setIsLoading(true);

    try {
      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      };

      axios
        .post(
          "http://localhost:4000/upload",
          formData,
          config,
        )
        .then((response) => {
          if (response.data) {
            setImage(response.data?.filename);

            if (addType === "language") {
              const languageUpload = {
                language,
                sub_title: title,
                language_image: response.data?.filename,
              };
              fetch("http://localhost:4000/languages", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(languageUpload),
              });
            }

            if (addType === "category") {
              const categoryUpload = {
                category: language,
                sub_title: title,
                category_image: response.data?.filename,
              };

              fetch("http://localhost:4000/categories", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(categoryUpload),
              });
            }

            setIsLoading(false);
          }
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChangeImage = (
    e: ChangeEvent<HTMLInputElement>,
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
    <>
      <form
        className='w-[400px] bg-stone-600 px-8 pt-4 pb-6'
        onSubmit={handleSubmit}>
        <h1 className='text-2xl text-gray-100 mb-3 capitalize'>
          Add {addType}
        </h1>
        <div className='flex flex-col space-y-2 mb-4'>
          <label
            htmlFor=''
            className='block text-sm font-medium text-gray-100 rounded-md capitalize'>
            {addType}
          </label>
          <input
            type='text'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            placeholder={`Enter the ${addType}`}
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder='Enter the sub title'
            className='border border-gray-300 px-2 py-[3px] outline-none placeholder:text-sm'
          />
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
    </>
  );
}

export default LanguageForm;
