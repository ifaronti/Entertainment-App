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

export default function Page() {
  const [details, setDetails] = useState({ AI: true, type: "", text: "" });
    const [err, setErr] = useState("");
    const [loading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState<responseType>({
    success: true,
    message: "",
    image: "",
  });

  const handleChange = (e: event) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleResponse = (data: responseType) => {
    if (!data.success) {
        setErr("an Error has occured");
        setLoading(false)
        return
    }
      setResponseData(data);
      setLoading(false)
  };

  const handleSubmit = async (e: formEvent) => {
    e.preventDefault();
    const { AI, type, text } = details;
    if (!type || !text || !AI) {
      return setErr("All fields are required");
    }
    setLoading(true)
    await genImageAIRequest(
      details,
      localStorage.getItem("token"),
      handleResponse
    );
  };
    
  const deleteImage = ()=>{
    return setResponseData({success:true, message:'', image:''})
  }

  return (
      <section className="flex flex-col gap-16">
        {responseData.image &&
        <>
        <Image src={responseData?.image} width={521} height={521} alt={details?.text} />
        <UploadorDelete deleteImage={deleteImage}/>
        </>
        }
        
        {loading && <div>Generating<Bar/></div>}
        
        {!responseData?.image && !loading && <AIForm
            handleChange={handleChange}
            details={details}
            handleSubmit={handleSubmit}
            err={err}
        />}
      
    </section>
  );
}
