const ContactSection = () => {
    return (
        <section className="bg-[#0067B1] text-white py-20 px-4">
            <div className="max-w-[1099px] h-[433px] mx-auto mt-[88px] ml-[132px] grid md:grid-cols-2 gap-12">
                {/* Left: Contact Info */}
                <div className="space-y-6">
                    <div>
                        <h3 className="text-lg font-medium">Address :</h3>
                        <p className="text-white text-opacity-90 text-sm">
                            110, 16th Road, Chembur,<br /> Mumbai - 400071
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Phone :</h3>
                        <a
                            href="tel:+912225208822"
                            className="text-white text-opacity-90 text-sm hover:underline"
                        >
                            +91 22 25208822
                        </a>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium">Email :</h3>
                        <a
                            href="mailto:info@supremegroup.co.in"
                            className="text-white text-opacity-90 text-sm hover:underline"
                        >
                            info@supremegroup.co.in
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <div>
                    <h2 className="text-[48px] font-light leading-none mb-4">
                        <span className="font-semibold">Get in touch</span>
                    </h2>
                    <div className="h-[2px] w-12 bg-white mb-8"></div>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Full name"
                            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none py-2"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none py-2"
                        />
                        <input
                            type="text"
                            placeholder="Company"
                            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none py-2"
                        />
                        <textarea
                            rows={3}
                            placeholder="Message"
                            className="w-full bg-transparent border-b-2 border-white text-white placeholder-white focus:outline-none py-2"
                        />
                        <button
                            type="submit"
                            className="border border-white px-10 py-3 rounded-full hover:bg-white hover:text-black transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
