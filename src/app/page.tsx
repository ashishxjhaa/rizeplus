"use client";

import { FileUpload } from "@/components/ui/file-upload";
import { toast } from "sonner"
import { useState } from "react";
import axios from "axios"
import RoastCard from "@/components/RoastCard";
import { Spinner } from "@/components/ui/spinner";


export default function Home() {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [roast, setRoast] = useState<string>("");

  const handleRoast = async () => {
    if (!selectedFiles.length) {
      toast.error("Please upload a resume first!");
      return;
    }

    setLoading(true);
    setRoast("");
    
    try {
      const formData = new FormData();
      formData.append("file", selectedFiles[0]); // single PDF

      const res = await axios.post("/api/roast", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setRoast(res.data.roast);
    } catch (err: any) {
      console.error(err);
      toast.error(err?.response?.data?.error || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div className="min-h-screen overflow-x-hidden w-full bg-neutral-900 flex flex-col items-center justify-center py-20">
      <div className="mx-2 sm:w-2xl">
        <FileUpload onChange={(files) => setSelectedFiles(files)} />
      </div>
      <div className="mt-10">
        <button onClick={handleRoast} disabled={loading} className="flex items-center justify-center border bg-[#E6E6E6] hover:bg-[#F6F6F6] h-9 px-8 text-black tracking-wide rounded-lg font-medium text-sm cursor-pointer disabled:opacity-50 disabled:cursor-default">
          {loading && <Spinner className="w-4 h-4" />}
          Roast Me
        </button>
      </div>
      {roast && <RoastCard roast={roast} />}
    </div>
  );
}
