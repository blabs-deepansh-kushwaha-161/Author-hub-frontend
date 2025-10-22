import React, { useState } from "react";
import axios from "axios";

function UploadFile() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/converter/upload-convert/",
        formData,
        {
          responseType: "blob", // important to receive a file
        }
      );

      // Download the EPUB file
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", file.name.replace(/\.[^/.]+$/, "") + ".epub");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error(err);
      alert("Converted successfully");
    }
  };

  return (
    <>
    <div className="p-20 flex justify-center items-center">
    

    <form className="flex gap-4 justify-center items-center " onSubmit={handleSubmit}>
      <input className="border  rounded px-2" type="file" onChange={handleFileChange} />
      <button className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Upload & Convert to EPUB</button>
    </form>

    </div>
    </>
  );
}

export default UploadFile;
