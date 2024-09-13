"use client";
import { uploadImage } from "@/components/API-calls/upload";
import { useEffect, useState } from "react";
import UploadDetails from "./MediaDetails";

type event = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>;

export default function Page() {
  const [token, setToken] = useState<string | null | undefined>("");
  const [details, setDetails] = useState({
    title: "",
    year: "",
    rating: "",
    category: "",
    image: "",
  });
  const [err, setErr] = useState("");

  const handleChange = (e: event) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, year, rating, category, image } = details;
    if (!title || !year || !rating || !category || !image) {
      return setErr("All fields are required");
    }
    const form = e.currentTarget;
    const formData = new FormData(form);

    uploadImage(formData, token);
  };

  return (
    <UploadDetails
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      details={details}
      errorMsg={err}
    />
  );
}
