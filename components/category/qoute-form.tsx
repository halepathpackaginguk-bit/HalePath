"use client";
import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { RiArrowDownSLine } from "react-icons/ri";


function Qoute_Form() {
  const [loading, setLoading] = useState(false);


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);
    SendMail();
    function SendMail() {
      fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.status === 200) {
          reset();
          setLoading(false);
          window.location.href = "/thank-you";
        }
      });
    }
  };

  const handleFileUpload = (file: any) => {
    // console.log("Uploaded file:", file.name);
  };

  return (
    <div className="container mx-auto mt-10 rounded-[19px] bg-[#CCCCCCB5]/70">
      <form
        className="grid w-full gap-2 items-center px-3 sm:px-5 py-6 md:py-10"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-2.5">
          <div className="">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none hidden"
            >
              Name
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-full w-full"
              type="text"
              {...register("name", { required: true })}
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="">
            <label
              htmlFor="phone"
              className="text-sm font-medium leading-none hidden"
            >
              Phone Number
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-full w-full"
              type="tel"
              {...register("phone")}
              id="phone"
              placeholder="Phone  Number"
            />
          </div>
          <div className="">
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none hidden"
            >
              Email Address
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-full w-full"
              type="email"
              {...register("email", { required: true })}
              id="email"
              placeholder="Email  Address"
            />
            {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          <div className=" relative">
            <label
              htmlFor="Unit"
              className="text-sm font-medium leading-none hidden"
            >
              Select Product
            </label>
            
          </div>
          <div className="relative">
            <label
              htmlFor="packing"
              className="text-sm font-medium leading-none hidden"
            >
              Colors
            </label>
            <select
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr cursor-pointer bg-white p-4 border border-[#CACACA] focus:border-secondary appearance-none outline-none rounded-full w-full"
              id="Colors"
              {...register("Colors", { required: true })}
            >
              <option value="Colors">Colors </option>
              <option value="Cosmetics Box">1 color</option>
              <option value="Cosmetics Box">2 colors</option>
              <option value="Cosmetics Box">3 colors</option>
              <option value="Cosmetics Box">4 colors</option>
              <option value="Cosmetics Box">5 colors</option>
            </select>
            <RiArrowDownSLine className="absolute right-4 top-1/2 text-xl text-gray-500 -translate-y-1/2" />
            {/* {errors.packing && <span className='text-xs text-red-500'>This field is required</span>} */}
          </div>
          <div className="">
            <label
              htmlFor="Length"
              className="text-sm font-medium leading-none hidden"
            >
              Length
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr rounded-full bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none w-full"
              type="number"
              {...register("Length", { required: true })}
              id="Length"
              placeholder="Length"
            />
          </div>
          <div className="">
            <label
              htmlFor="Width"
              className="text-sm font-medium leading-none hidden"
            >
              Width
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary  outline-none rounded-full w-full"
              type="number"
              {...register("Width", { required: true })}
              id="Width"
              placeholder="Width"
            />
          </div>
          <div className="">
            <label
              htmlFor="Depth"
              className="text-sm font-medium leading-none hidden"
            >
              Depth
            </label>
            <input
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary outline-none rounded-full w-full"
              type="number"
              {...register("Depth", { required: true })}
              id="Depth"
              placeholder="Depth"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="Unit"
              className="text-sm font-medium leading-none hidden"
            >
              Select Unit
            </label>
            <select
              className="text-sm font-medium text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary appearance-none outline-none rounded-full cursor-pointer w-full"
              id="Unit"
              {...register("Unit", { required: true })}
            >
              <option value="Select Unit">Select Unit </option>
              <option value="Cosmetics Box">Inches</option>
              <option value="Cosmetics Box">CM</option>
              <option value="Cosmetics Box">MM</option>
            </select>
            <RiArrowDownSLine className="absolute right-4 top-1/2 text-xl text-gray-500 -translate-y-1/2" />
          </div>
          <textarea
            className="text-sm font-medium rounded-full text-txt_Clr placeholder:text-txt_Clr bg-white p-4 border border-[#CACACA] focus:border-secondary outline-none w-full"
            id="detail"
            {...register("detail", { required: true })}
            rows={1}
            placeholder="Write Your Message..."
          ></textarea>
        </div>

        <div className="grid  gap-2">
          <div className="flex gap-2 my-3 col-span-5 items-center">
            <input type="checkbox" id="agree" className="p-2 w-4 h-4" />
            <label htmlFor="agree" className="cursor-pointer text-sm">
              I Agree that my data is <strong>collected and Stored.</strong>
            </label>
          </div>
        </div>

        <section className="flex items-center gap-2 justify-between">
          <div className="w-full">
            <button
              type="submit"
              disabled={loading ? true : false}
              className="text-base max-w-[600px] font-semibold text-white bg-[#1C2E42] hover:bg-secondary px-4 py-3 rounded-full w-full"
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </div>
          <UploadButton onUpload={handleFileUpload} />
        </section>
      </form>
    </div>
  );
}

export default Qoute_Form;

const UploadButton = ({ onUpload }: any) => {
  // Trigger file input when button is clicked

  const handleButtonClick = () => {
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      onUpload(e.target.files[0]); // Pass the uploaded file to the parent
    }
  };

  return (
    <div>
      {/* Hidden File Input */}
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none" }} // Hide the input field
      />

      {/* Upload Button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="flex items-center text-nowrap whitespace-nowrap justify-center px-12 py-3 font-medium text-white bg-[#53B6C9] hover:bg-secondary-dark rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
      >
        Attached File
      </button>
    </div>
  );
};
