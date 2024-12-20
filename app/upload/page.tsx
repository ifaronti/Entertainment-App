"use client";
import { uploadImage } from "@/components/API-calls/upload";
import { useEffect, useState, useContext } from "react";
import UploadDetails from "./MediaDetails";
import { AIcontext } from "./layout";
import { useRouter } from "next/navigation";
import { Return } from "@/components/returnToDashboard";

type event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export default function Page() {
  const { isAI, image, token } = useContext(AIcontext);
  const [details, setDetails] = useState({
    title: "",
    year: "",
    rating: "",
    category: "",
    image: "",
    isAI: false,
  });
  const [err, setErr] = useState("");
  const goTo = useRouter();

  useEffect(() => {
    setDetails((prev) => {
      return {...prev, isAI: isAI,image: image};
    });
  }, [image, isAI]);

  const handleChange = (e: event) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, year, rating, category, image, isAI } = details;
    if (!title || !year || !rating || !category) {
      return setErr("All fields are required");
    }
    if (isAI && !image) {
      return setErr("All fields are required");
    }
    const form = e.currentTarget;
    const formData = new FormData(form);

    await uploadImage(formData, token);
    localStorage.removeItem("isAI");
    localStorage.removeItem("image");
    localStorage.setItem('page', 'dashboard')
    goTo.push("/dashboard");
  };

  return (
    <>
      <UploadDetails
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        details={details}
        errorMsg={err}
      />
      <Return />
    </>
  );
}
