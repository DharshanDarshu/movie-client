import LanguageForm from "../../components/LanguageForm";

function AddLanguage() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <LanguageForm addType='language' />
    </div>
  );
}

export default AddLanguage;
