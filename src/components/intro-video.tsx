import '@/styles/globals.css';
const IntroVideo = () => {
    return (
        <section className="w-full h-screen relative overflow-hidden">
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/automotive.224e7418884105595114.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
    <span className="text-white text-lg sm:text-xl lg:text-2xl font-light mb-4 drop-shadow-md">
      Driven by performance
    </span>
                <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug drop-shadow-lg">
                    Soft trims and <span className="text-blue-400">NVH solutions</span>
                    <br className="hidden md:block" /> for seamless rides
                </h2>
            </div>
        </section>
    );
};

export default IntroVideo;
