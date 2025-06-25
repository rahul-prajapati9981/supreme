import '@/styles/globals.css';
const IntroVideo = () => {
    return (
        <section className="w-full h-screen relative overflow-hidden">
            <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
            >
                <source src="/videos/automotive.224e7418884105595114.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        {/*    <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center w-11/12 mx-auto pt-10 md:pt-5 lg:pt-10 gap-2">*/}
        {/*<span className="text-white font-light pt-2 pb-3 text-lg xl:text-xl 2xl:text-[1.375rem] leading-snug">*/}
        {/*  Driven by performance*/}
        {/*</span>*/}
        {/*        <h2 className="text-white font-light leading-tight pb-2 text-2xl md:text-4xl">*/}
        {/*  <span className="font-semibold">*/}
        {/*    Soft trims and <span className="text-blue-400">NVH solutions</span>*/}
        {/*  </span>*/}
        {/*            <br className="hidden md:block" />*/}
        {/*            for seamless rides*/}
        {/*        </h2>*/}
        {/*    </div>*/}
        </section>
    );
};

export default IntroVideo;
