"use client";
import { useState } from "react";
import { event } from "./imageRequestForm";
import { formEvent } from "./imageRequestForm";
import AIForm from "./imageRequestForm";
import { genImageAIRequest } from "@/components/API-calls/genAI";
import { responseType } from "./imageRequestForm";
import Image from "next/image";
import Bar from "@/components/loadingStates/progressBar";
import UploadorDelete from "./afterGenAIText";
import { Return } from "@/components/returnToDashboard";

export default function Page() {
  const [promptParams, setPromptParams] = useState({ type: "", text: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState<responseType>({
    success: true,
    message: "",
    image: "",
  });
  
  const handleChange = (e: event) => {
    const { name, value } = e.target;
    setPromptParams((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleResponse = (data: responseType&string) => {
    if (!data.success) {
      setErr("an Error has occured");
      setLoading(false);
      return;
    }
    setResponseData(data);
    setLoading(false);
    localStorage.setItem('image', data.image)
    localStorage.setItem('isAI', 'true')
  };

  const handleSubmit = async (e: formEvent) => {
    e.preventDefault();
    const {type, text } = promptParams;
    if (!type || !text ) {
      return setErr("All fields are required");
    }
    setLoading(true);
    await genImageAIRequest(
      promptParams,
      localStorage.getItem("token"),
      handleResponse
    );
  };

  const deleteImage = () => {
    return setResponseData({ success: true, message: "", image: "" });
  };


  return (
    <section className="flex flex-col gap-16">
      {responseData.image && (
        <>
          <Image
            src={responseData?.image}
            width={700}
            height={700}
            alt={promptParams?.text}
          />
          <UploadorDelete deleteImage={deleteImage} />
        </>
      )}

      {loading && (
        <div className="w-full flex flex-col justify-center items-center">
          Generating
          <Bar />
          <Return />
        </div>
      )}

      {!responseData?.image && !loading && (
        <>
          <AIForm
            handleChange={handleChange}
            details={promptParams}
            handleSubmit={handleSubmit}
            err={err}
          />
          <Return/>
        </>
      )}
    </section>
  );
}
