import React from 'react'

const Steps = () => {
    return (
        <div className="bg-white/5 backdrop-blur-[10px] h-full max-w-[546px] mx-auto rounded-2xl md:px-14 md:py-8 p-8 md:gap-12 gap-12 flex flex-col">
            {steps.map((step, index) => (
                <div
                    key={step.id}
                    className="step"
                >
                    <span
                        className={` before_line ${index === steps.length - 1 ? "before:content-none" : ""
                            }`}
                    >
                        {`0${step.id}`}
                    </span>
                    <div>
                        <h3 className="">
                            {step.title}
                        </h3>
                        <p className="text-sm font-light text-white">{step.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Steps

const steps = [
    {
      id: 1,
      title: "Tell Us About Your Product",
      description:
        "Submit your quote request with basic details: box type, dimensions, quantity, and any branding ideas you have. Not sure yet? That's fine — our team will help you figure it out.",
    },
    {
      id: 2,
      title: "We Design & Send a Proof",
      description:
        "Our in-house design team creates a custom dieline and print-ready proof for your approval. We don't move to production until you say it's exactly right.",
    },
    {
      id: 3,
      title: "We Produce with Precision",
      description:
        "Your order goes to production with full quality control at every stage — material selection, printing, finishing, and structural integrity. No surprises when your custom boxes arrive.",
    },
    {
      id: 4,
      title: "We Deliver, You Impress",
      description:
        "Your custom packaging arrives on time, ready to pack. From your first 50 units to your 50,000th reorder, the process stays exactly this smooth.",
    },
];