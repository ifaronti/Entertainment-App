"use client";

import { registerStyles } from "../register/style";
import Button, { ButtonVariants } from "@/components/Button/Button";

export type responseType = {
  success: boolean;
  message: string;
  image: string;
}

export type event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type formEvent = React.FormEvent<HTMLFormElement>;

export type detailsForms = {
  handleChange: (e: event) => void;
  handleSubmit: (e: formEvent) => void;
  details: {
    type: string;
    text: string;
  };
  err: string;
};

export default function AIForm({
  details,
  err,
  handleChange,
  handleSubmit,
}: detailsForms) {
  const detailForm = (
    <form
      onSubmit={handleSubmit}
      className={registerStyles.AIForm}
    >
      <input
        type="text"
        onChange={handleChange}
        value={details.text}
        name="text"
        placeholder="Describe the image you want to generate"
        className={registerStyles.input}
      />

      <select
        name="type"
        value={details.type}
        onChange={handleChange}
        className={registerStyles.AISelect}
      >
        <option value="">Select type of image to be generated</option>
        <option value="realistic">Realistic</option>
        <option value="animation">Animation</option>
      </select>

      <Button variant={ButtonVariants.Primary}>Generate Image</Button>
      {err && <p className="text-red-600 mb-8 capitalize mx-auto">{err}</p>}
    </form>
  );
  
  return detailForm;
}
