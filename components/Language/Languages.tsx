import Language from "./Language";

type Props = {
  languages: Array<Object>;
};

function Languages({ languages }: Props) {
  return (
    <div className='px-8 text-white mt-4 text-xl font-semibold'>
      <h1>Languages</h1>
      <div className='grid grid-cols-4 gap-y-5 my-6'>
        {languages.map((language) => (
          <Language language={language} />
        ))}
      </div>
    </div>
  );
}

export default Languages;
