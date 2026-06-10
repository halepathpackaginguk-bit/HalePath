"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaClock, FaPencilAlt, FaTruck } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";

type Props = {
  productName: string;
  productPrice: number;
  quoteFormClass?: string;
};

export default function FormTabs({
  productName,
  productPrice,
  quoteFormClass = "container mx-auto mt-5 rounded-[19px] bg-[#CCCCCCB5]",
}: Props) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(10000);
  const [calculatedPrice, setCalculatedPrice] = useState(productPrice);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleQuantityChange = (value: number) => {
    setQuantity(value);

    const baseQuantity = 10000; // your base tier
    const basePrice = productPrice;

    const newPrice = (value / baseQuantity) * basePrice;

    setCalculatedPrice(newPrice);
  };
  const handleQuoteSubmit = async (data: any) => {
    try {
      setLoading(true);

      const payload = {
        name: data.name,
        phone: data.phone,
        email: data.email,
        product: productName,
        length: data.length,
        width: data.width,
        depth: data.depth,
        colors: data.colors,
        qty: data.qty,    
        message: data.message,
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert(result.message || "Quote sent successfully ✅");
        reset();
      } else {
        alert(result.error || "Failed ❌");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  const handleCheckoutSubmit = async (data: any) => {
    try {
      setLoading(true);

      const payload = {
        product: productName,
        dimension: data.dimension,
        box_stock: data.box_stock,
        quantity: quantity,
        printing: data.printing,
        calculatedPrice: calculatedPrice,
        name: data.name,
        email: data.email,
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (res.ok) {
        alert(result.message || "Order placed successfully ✅");
      } else {
        alert(result.error || "Checkout failed ❌");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form-tabs" className="mt-10">
      {/* Tabs Buttons */}
      <div className="hale_container !px-0 flex border-b border-gray-300 bg-white z-40">
        <button
          type="button"
          className={`form_tab-btn ${
            activeTab === "tab1" ? "form_tab_active" : ""
          }`}
          onClick={() => setActiveTab("tab1")}
        >
          Request a Quote
        </button>
        <button
          type="button"
          className={`form_tab-btn ${
            activeTab === "tab2" ? "form_tab_active" : ""
          }`}
          onClick={() => setActiveTab("tab2")}
        >
          Standard Sizes
        </button>
      </div>

      <div className="tab-content mt-6">
        {/* TAB 1 */}
        <div className={`${activeTab === "tab1" ? "block" : "hidden"}`}>
          <div className={quoteFormClass}>
            <form
              onSubmit={handleSubmit(handleQuoteSubmit)}
              className="grid w-full gap-2 items-center px-3 sm:px-5 py-6 md:py-10"
            >
              <div className="w-full gap-2.5">
                <div className="grid grid-cols-2 gap-2.5">
                  <input
                    {...register("name")}
                    className="hale_input"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    {...register("phone")}
                    className="hale_input"
                    placeholder="Phone Number"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                  <input
                    {...register("email")}
                    className="hale_input"
                    placeholder="Email Address"
                    required
                  />
                  <input
                    value={productName}
                    {...register("product")}
                    className="hale_input"
                    readOnly
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 mt-2.5">
                  <input
                    {...register("length")}
                    type="nummber"
                    className="hale_input"
                    placeholder="Length"
                    
                  />
                  <input
                    {...register("width")}
                    type="nummber"
                    className="hale_input"
                    placeholder="Width"
                    
                  />
                  <input
                    {...register("depth")}
                    type="nummber"
                    className="hale_input"
                    placeholder="Depth"
                    
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 mt-2.5">
                  <div className="relative">
                    <select
                      {...register("colors")}
                      className="hale_input h-full appearance-none"
                      
                    >
                      <option value="">Colors</option>
                      <option value="1">1 color</option>
                      <option value="2">2 colors</option>
                      <option value="3">3 colors</option>
                      <option value="4">4 colors</option>
                      <option value="5">5 colors</option>
                    </select>
                    <RiArrowDownSLine className="text-xl absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>

                  <input
                    {...register("qty")}
                    type="nummber"
                    className="hale_input"
                    placeholder="Quantity"
                    
                  />
                </div>

                <textarea
                  {...register("message")}
                  className="hale_input !rounded-[20px] h-[141px] mt-2.5"
                  placeholder="Write Your Message..."
                  
                />

                <div className="flex gap-2 mt-3 items-center">
                  <input type="checkbox" {...register("agree")} required />
                  <label className="cursor-pointer text-sm">
                    I Agree that my data is{" "}
                    <strong>collected and Stored.</strong>
                  </label>
                </div>
              </div>

              <button type="submit" className="btn_secondry w-full">
                {loading ? "Sending..." : "SUBMIT"}
              </button>
            </form>
          </div>
        </div>

        {/* TAB 2 */}
        <div className={`${activeTab === "tab2" ? "block" : "hidden"}`}>
          <div className={quoteFormClass}>
            <form
              onSubmit={handleSubmit(handleCheckoutSubmit)}
              className="grid w-full gap-2 items-center px-3 sm:px-5 py-6 md:py-10"
            >
              <h2 className="md:text-[28px] md:leading-normal text-2xl font-bold text-title_Clr">
                Available Sizes for {productName}
              </h2>

              <p>
                Choose from our popular Standard Sizes for a quick,
                off-the-shelf solution, or request a Custom Quote for a perfect,
                tailored fit. Whether you need something immediately or designed
                specifically for your brand, we provide flexible options to meet
                every need and budget.
              </p>

              <input
                type="hidden"
                value={productName}
                {...register("product")}
                className="hale_input"
              />

              <div className="w-full gap-2.5">
                <div className="grid grid-cols-2 gap-2.5 mt-2.5">
                  <input
                    {...register("name")}
                    className="hale_input"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    {...register("email")}
                    type="email"
                    className="hale_input"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-4 grid-cols-2 gap-2 mt-2.5">
                  <div className="relative">
                    <select
                      {...register("dimension")}
                      className="hale_input h-full appearance-none"
                    >
                      <option value="5 x 4 x 1">5 x 4 x 1</option>
                      <option value="6 x 5 x 2">6 x 5 x 2</option>
                    </select>
                    <RiArrowDownSLine className="text-xl absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>

                  <div className="relative">
                    <select
                      {...register("box_stock")}
                      className="hale_input h-full appearance-none"
                    >
                      <option value="Rigid">Rigid</option>
                      <option value="Foldable">Foldable</option>
                    </select>
                    <RiArrowDownSLine className="text-xl absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>

                  <div className="relative">
                    <select
                      {...register("quantity", { required: true })}
                      onChange={(e) =>
                        handleQuantityChange(Number(e.target.value))
                      }
                      className="hale_input appearance-none"
                    >
                      <option value="10000">10000</option>
                      <option value="20000">20000</option>
                    </select>
                    <RiArrowDownSLine className="text-xl absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>

                  <div className="relative">
                    <select
                      {...register("printing")}
                      className="hale_input h-full appearance-none"
                    >
                      <option value="outside_only">Outside only</option>
                      <option value="inside_outside">
                        Inside &amp; outside
                      </option>
                    </select>
                    <RiArrowDownSLine className="text-xl absolute right-4 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                <p style={{ marginTop: "20px", fontSize: "16px" }}>
                  <strong>Price:</strong> ${calculatedPrice} for {quantity}{" "}
                  items
                </p>
              </div>

              <div className="flex items-center gap-2 justify-between mt-2.5">
                <div className="w-full">
                  <button type="submit" className="btn_secondry w-1/2">
                    {loading ? "Processing..." : "Proceed to Checkout"}
                  </button>
                </div>
              </div>

              {/* ICONS */}
              <div className="grid md:grid-cols-3 grid-cols-2 gap-5 mt-8">
                <div className="text-center text-title_Clr space-y-2.5">
                  <FaClock size={32} className="mx-auto" />
                  <p>
                    <strong>Quick</strong>
                    <br />
                    Turnaround
                  </p>
                </div>

                <div className="text-center text-title_Clr space-y-2.5">
                  <FaPencilAlt size={32} className="mx-auto" />
                  <p>
                    <strong>Free</strong>
                    <br />
                    Designing
                  </p>
                </div>

                <div className="text-center text-title_Clr space-y-2.5">
                  <FaTruck size={32} className="mx-auto" />
                  <p>
                    <strong>Free</strong>
                    <br />
                    Shipping
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
