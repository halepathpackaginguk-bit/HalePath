import React from "react";

export default function ProductVideos() {
    const videos = [
        "https://halepathpackaging.co.uk/wp-content/uploads/2026/08/Hale-Path-Packaging-Reviews-1.mp4",
        "https://halepathpackaging.co.uk/wp-content/uploads/2026/08/Hale-Path-Packaging-Reviews-2.mp4",
        "https://halepathpackaging.co.uk/wp-content/uploads/2026/08/Hale-Path-Packaging-Reviews-3.mp4",
        "https://halepathpackaging.co.uk/wp-content/uploads/2026/08/Hale-Path-Packaging-Reviews-4.mp4",
    ];

    return (
        <section className="bg-[#f5f5f5] px-4 py-6">
            <div className="hale_container flex flex-col gap-6 md:flex-row">
                {videos.map((video, index) => (
                    <div
                        key={video}
                        className="video-card w-full overflow-hidden rounded-xl md:w-1/4"
                    >
                        <video
                            className="block h-auto w-full"
                            autoPlay
                            muted
                            loop
                            playsInline
                            preload="metadata"
                        >
                            <source src={video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </div>
        </section>
    );
}