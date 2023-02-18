import React from "react";
import LanguageForm from "../../components/LanguageForm";

function AddCategory() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <LanguageForm addType='category' />
    </div>
  );
}

export default AddCategory;
