'use client';

import { useState } from "react";

const VehicleSwitcher = () => {
    const [activeVehicle, setActiveVehicle] = useState<'passenger' | 'commercial'>('passenger');

    const videoSrc =
        activeVehicle === 'passenger'
            ? '/videos/PassengerAlpha.bc06b347f5b526ad9a60.mp4'
            : '/videos/CommercialAlpha.92c92d40f9116c837d1d.mp4';

    return (
        <section className="w-full bg-black text-white py-16 px-4" id="mobility">
            {/* Heading */}
            <div className="text-center text-white px-4 pt-12 md:pt-20">
                <h2 className="font-[300] text-[48px] leading-[100%] tracking-[-0.005em] font-manrope">
                    Evolving the drive with 360-degree<br />
                    <span className="font-[600]">nonwoven solutions</span>
                </h2>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8 pt-12">
                {/* Left: Vehicle Selector */}
                <div className="relative w-full md:w-1/3 pl-10 ml-[5%]">
                    <div
                        className={`cursor-pointer transition-opacity duration-300 ${
                            activeVehicle === 'passenger' ? 'opacity-100' : 'opacity-20'
                        }`}
                        onClick={() => setActiveVehicle('passenger')}
                    >
                        <h3 className="font-medium text-left pb-2 text-white text-xl">Passenger vehicles</h3>
                        <h6 className="font-light text-left text-base 2xl:text-lg text-white">
                            Revving up innovation from <br /> interior to exterior.
                        </h6>
                    </div>

                    <div
                        className={`mt-14 cursor-pointer transition-opacity duration-300 ${
                            activeVehicle === 'commercial' ? 'opacity-100' : 'opacity-20'
                        }`}
                        onClick={() => setActiveVehicle('commercial')}
                    >
                        <h3 className="font-medium text-left pb-2 text-white text-xl">Commercial vehicles</h3>
                        <h6 className="font-light text-left text-base 2xl:text-lg text-white">
                            Advancing engineering <br /> for heavy-duty vehicles.
                        </h6>
                    </div>

                    {/* Vertical slider bar */}
                    <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-400 rounded-md">
                        <div
                            className="w-[2px] bg-white rounded-md absolute transition-transform duration-500"
                            style={{
                                height: "50%",
                                transform: activeVehicle === 'passenger' ? "translateY(0%)" : "translateY(100%)",
                            }}
                        ></div>
                    </div>
                </div>

                {/* Right: Video Section */}
                <div className="w-full md:w-2/3">
                    <div className="relative rounded-lg overflow-hidden shadow-lg">
                        <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                        <video
                            key={activeVehicle}
                            src={videoSrc}
                            className="w-full z-0"
                            autoPlay
                            muted
                            loop
                            playsInline
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VehicleSwitcher;
