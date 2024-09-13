"client component";
import { registerStyles } from "../register/style";
import Button, { ButtonVariants } from "@/components/Button/Button";

type detailsForms = {
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  details: {
    title: string;
    year: number;
    rating: string;
    category: string;
    image: any;
  };
  errorMsg: string;
};

export default function UploadDetails({
  handleChange,
  handleSubmit,
  details,
  errorMsg,
}: detailsForms) {
  const form = (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className={registerStyles.form}
    >
      <h1>Upload</h1>
      <input
        type="text"
        onChange={handleChange}
        value={details.title}
        name="title"
        placeholder="Movie or TV Series title"
        className={registerStyles.input}
      />

      <input
        type="text"
        onChange={handleChange}
        value={details.year}
        name="year"
        className={`${registerStyles.input}`}
        placeholder="Year Of Release"
      />

      <select
        onChange={handleChange}
        className={`${registerStyles.input} bg-[#161d2f] border-b-[1px] border-b-[#5a698f] pl-2`}
        value={details.rating}
        name="rating"
      >
        <option value="">Select Rating</option>
        <option value="PG">PG</option>
        <option value="E">E</option>
        <option value="18+">18+</option>
      </select>

      <select
        onChange={handleChange}
        className={`${registerStyles.input} bg-[#161d2f] border-b-[1px] border-b-[#5a698f] pl-2`}
        value={details.category}
        name="category"
      >
        <option value="">Select Category</option>
        <option value="Movie">Movie</option>
        <option value="TV Series">TV Series</option>
      </select>

      <input
        type="file"
        name="image"
        id="image"
        className={`${registerStyles.input} pb-6`}
        accept="image/*"
        onChange={handleChange}
      />
      <Button className="mb mb-6" variant={ButtonVariants.Primary}>
        Upload Details
      </Button>
      <p className="text-red-700 mb-6 mx-auto">{errorMsg}</p>
    </form>
  );

  return form;
}
