'use client'; // for interactivity if using Next.js App Router

import { useState } from "react";

const VehicleSwitcher = () => {
    const [activeVehicle, setActiveVehicle] = useState<'passenger' | 'commercial'>('passenger');

    const videoSrc =
        activeVehicle === 'passenger' ? '/videos/PassengerAlpha.bc06b347f5b526ad9a60.mp4' : '/videos/CommercialAlpha.92c92d40f9116c837d1d.mp4';

    return (
        <section className="w-full bg-black text-white py-16 px-4" id="mobility">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
                {/* Left Side: Buttons */}
                <div className="w-full md:w-1/3">
                    <h2 className="text-3xl font-bold mb-6">Mobility</h2>
                    <div className="flex flex-col space-y-4">
                        <button
                            onClick={() => setActiveVehicle('passenger')}
                            className={`px-4 py-3 text-left border rounded ${
                                activeVehicle === 'passenger'
                                    ? 'bg-red-600 border-red-700'
                                    : 'bg-transparent border-white'
                            }`}
                        >
                            Passenger Vehicle
                        </button>
                        <button
                            onClick={() => setActiveVehicle('commercial')}
                            className={`px-4 py-3 text-left border rounded ${
                                activeVehicle === 'commercial'
                                    ? 'bg-red-600 border-red-700'
                                    : 'bg-transparent border-white'
                            }`}
                        >
                            Commercial Vehicle
                        </button>
                    </div>
                </div>

                {/* Right Side: Video */}
                <div className="w-full md:w-2/3">
                    <video
                        key={activeVehicle} // ensures reloading video on switch
                        src={videoSrc}
                        className="w-full rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                </div>
            </div>
        </section>
    );
};

export default VehicleSwitcher;
