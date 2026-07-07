"use client";

import { useRef } from "react";

const MainPopup = ({ onClose }: { onClose?: () => void }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    // STATIC PRODUCTS (WooCommerce replacement)
    const products = [
        { id: 1, name: "Custom Box" },
        { id: 2, name: "Mailer Box" },
        { id: 3, name: "Rigid Box" },
        { id: 4, name: "Corrugated Box" },
    ];

    const handleFileClick = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = {
            name: (form.elements.namedItem("name") as HTMLInputElement).value,
            email: (form.elements.namedItem("email") as HTMLInputElement).value,
            pname: (form.elements.namedItem("product") as HTMLSelectElement).value,
            phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
            colors: (form.elements.namedItem("colors") as HTMLSelectElement).value,
            unit: (form.elements.namedItem("unit") as HTMLSelectElement).value,
            width: (form.elements.namedItem("width") as HTMLInputElement).value,
            depth: (form.elements.namedItem("depth") as HTMLInputElement).value,
            length: (form.elements.namedItem("length") as HTMLInputElement).value,
            dimension: `${(form.elements.namedItem("length") as HTMLInputElement).value} x ${(form.elements.namedItem("width") as HTMLInputElement).value} x ${(form.elements.namedItem("depth") as HTMLInputElement).value}`,
            message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        };

        try {
            const res = await fetch("/api/get-qoute", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (res.ok) {
                alert("Quote sent successfully!");
                form.reset();
            } else {
                alert(result.error || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };
    return (
        <div
            onClick={(e) => e.stopPropagation()}
            className="sm:max-w-[830px] w-full md:pr-8 rounded-[19px] bg-secondary/30 backdrop-blur-[30px] px-3 sm:px-5 py-6 md:py-10">

            {/* HEADER */}
            <div className="pb-5 w-full flex flex-row justify-between items-center">
                <h2 className="md:text-[28px] md:leading-normal text-2xl font-bold text-white">
                    Get Custom Quote
                </h2>

                <button onClick={() => onClose?.()} className="text-white cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="grid w-full gap-2 items-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 w-full gap-2.5">

                    {/* Name */}
                    <input className="hale_input" type="text" name="name" placeholder="Your Name" required />

                    {/* Phone */}
                    <input className="hale_input" type="tel" name="phone" placeholder="Phone Number" />

                    {/* Email */}
                    <input className="hale_input" type="email" name="email" placeholder="Email Address" required />

                    {/* Product */}
                    <div className="relative">
                        <select
                            className="hale_input h-full appearance-none"
                            name="product"
                            defaultValue=""
                            required
                        >
                            <option value="" disabled>
                                Select Product
                            </option>

                            {products.map((p) => (
                                <option key={p.id} value={p.name}>
                                    {p.name}
                                </option>
                            ))}
                        </select>

                        <i className="absolute right-4 top-1/2 text-xs text-gray-500 -translate-y-1/2 fa fa-chevron-down"></i>
                    </div>

                    {/* Colors */}
                    <div className="relative">
                        <select className="hale_input h-full appearance-none" name="colors" required>
                            <option value="">Colors</option>
                            <option value="1">1 color</option>
                            <option value="2">2 colors</option>
                            <option value="3">3 colors</option>
                            <option value="4">4 colors</option>
                            <option value="5">5 colors</option>
                        </select>

                        <i className="absolute right-4 top-1/2 text-xs text-gray-500 -translate-y-1/2 fa fa-chevron-down"></i>
                    </div>

                    {/* Dimensions */}
                    <input type="number" name="length" placeholder="Length" className="hale_input h-full" required />
                    <input type="number" name="width" placeholder="Width" className="hale_input" required />
                    <input type="number" name="depth" placeholder="Depth" className="hale_input" required />

                    {/* Unit */}
                    <div className="relative">
                        <select className="hale_input h-full appearance-none" name="unit" required>
                            <option value="">Select Unit</option>
                            <option value="inches">Inches</option>
                            <option value="cm">CM</option>
                            <option value="mm">MM</option>
                        </select>

                        <i className="absolute right-4 top-1/2 text-xs text-gray-500 -translate-y-1/2 fa fa-chevron-down"></i>
                    </div>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Write Your Message..."
                        className="hale_input"
                        required
                    />
                </div>

                {/* AGREEMENT */}
                <div className="flex gap-2 my-3 items-center text-white">
                    <input type="checkbox" name="agree" className="p-2 w-4 h-4" required />
                    <label className="cursor-pointer text-sm">
                        I Agree that my data is <strong>collected and Stored.</strong>
                    </label>
                </div>

                {/* BUTTONS */}
                <section className="flex items-center gap-2 justify-between">

                    <div className="w-full">
                        <button type="submit" className="btn_secondry max-w-[600px] w-full">
                            SUBMIT
                        </button>
                    </div>

                    <div>
                        <input ref={fileInputRef} type="file" name="file" className="hidden" />

                        <button
                            type="button"
                            onClick={handleFileClick}
                            className="flex items-center text-nowrap whitespace-nowrap justify-center px-12 py-3 font-medium text-white bg-[#53B6C9] hover:bg-secondary-dark rounded-full"
                        >
                            Attached File
                        </button>
                    </div>
                </section>
            </form>
        </div>
    );
};

export default MainPopup;