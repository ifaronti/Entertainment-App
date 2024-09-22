import Image from "next/image";

export type searchFormProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  searchParam: string;
  current:any
};

export default function SearchForm({
  handleChange,
  handleSubmit,
  searchParam,
  current
}: searchFormProps): React.ReactNode {

  const searchImg:JSX.Element = (
    <Image
          src="/assets/icon-search.svg"
          height={32}
          width={32}
      alt="search icon"
      className="flex-shrink-0"
    />
  );

  const placeHolder = (page: string) => {
    let thePage
    switch (page) {
      case 'dashboard/bookmarks':
        thePage ='Search for bookmarked shows'
        break
      
      case 'dashboard/movies':
        thePage ='Search for movies'
        break
      
      case 'dashboard/tv':
        thePage ='Search for TV series'
        break
      
      default:
        thePage ='Search for movies and TV series'
    }
    return thePage
  }

  var placeHolderString = placeHolder(current)

  return (
    <form onSubmit={handleSubmit} className="flex cursor-pointer flex-shrink-0 flex-row-reverse px-2 md:px-[unset] w-full mx-auto 2xl:mx-[unset] md:w-[719px] 2xl:w-[1220px] gap-6">
      <input
        type="text"
        onChange={handleChange}
        value={searchParam}
        name="search"
        placeholder={placeHolderString}
        className="w-full h-8 outline-none cursor-pointer border-t-0 border-b-0 border-l-0 border-r-0 focus:border-b-[1px] pb-4 leading-normal font-light focus:border-b-[#5a698f] text-[1rem]"
      />
     {searchImg}
    </form>
  );
}
