'use client';
import { useState } from "react";
import Steps from "./steps";

function Get_Qoute() {
   const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        form.reset();
        window.location.href = "/thank-you";
      } else {
        alert(result.error || "Something went wrong");
      }
    } catch (error) {
      console.error("FRONTEND ERROR 👉", error);
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className='md:py-14 py-10 relative bg-center bg-no-repeat bg-cover before:content-[""] before:absolute before:w-full before:bg-[#191919]  before:h-full before:top-0'
      style={{ backgroundImage: `url("/images/qoute-bg.png")` }}
    >
      <div className="hale_container relative z-10 flex md:flex-row flex-col gap-7">
        <div className="md:w-1/2 w-full">
          <Steps />
        </div>
        <div className="md:w-1/2 w-full">
          <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3 sm:justify-start justify-center">
            <span>From Idea to Doorstep — Here's How Simple We Make It</span>
            <span className="block border-b-2 border-white max-w-[61px] w-full"></span>
          </h4>
          <h2 className="md:text-4xl text-2xl font-bold text-white mb-8 sm:text-left text-center">
          No packaging experience needed. We guide you through every step.
          </h2>
          <form
            onSubmit={onSubmit}
            className="grid w-full gap-4 items-center mt-5 bg-white/5 backdrop-blur-[10px] md:p-8 p-6 rounded-[19px]">
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="fullname"
                  className="text-sm font-medium leading-none hidden"
                >
                  Full Name
                </label>
                <input
                  className="hale_input"
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Full Name"
                />
                {/* {errors.name && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium leading-none hidden"
                >
                  Your Contact
                </label>
                <input
                  className="hale_input"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Your Contact"
                />
                {/* {errors.phone && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="w-full flex flex-col">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none hidden"
                >
                  Email Address
                </label>
                <input
                  className="hale_input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email  Address"
                />
                {/* {errors.email && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
              <div className="w-full flex flex-col">
                <label
                  htmlFor="product"
                  className="text-sm font-medium leading-none hidden"
                >
                  Cosmetics Packaging
                </label>
                <input
                  className="hale_input"
                  type="text"
                  name="product"
                  id="product"
                  placeholder="Cosmetics Packaging"
                />
                {/* {errors.product && <span className='text-xs text-red-500'>This field is required</span>} */}
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="message"
                className="text-sm font-medium leading-none hidden"
              >
                Your Message
              </label>
              <textarea
                className="hale_input !rounded-[19px] !min-h-[170px] md:pt-2"
                id="message"
                name="message"
                rows={3}
                placeholder="Write Your Message..."
              ></textarea>
              {/* {errors.message && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full">
              <input
                type="checkbox"
                className="bg-transparent px-7  border-2 border-white focus:border-secondary outline-white mr-2"
                name="acceptance"
                id="acceptance"
              />
              <label
                htmlFor="acceptance"
                className="md:text-lg md:md:leading-[56px] text-sm font-normal text-white inline-block"
              >
                I Agree that my data is collected and Stored.
              </label>
              {/* {errors.acceptance && <span className='text-xs text-red-500'>This field is required</span>} */}
            </div>
            <div className="w-full">
              <button
                type="submit"
                disabled={loading ? true : false}
                className="form_btn"
              >
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Get_Qoute;
