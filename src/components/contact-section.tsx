const ContactSection = () => {
    return (
        <section className="bg-[#0C1A36] text-white py-20 px-4">
            <div className="bg-red-500 text-white p-4">Tailwind Test</div>
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                {/* Left: Form */}
                <div>
                    <h2 className="text-3xl lg:text-4xl font-semibold mb-4">Get in touch</h2>
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

                {/* Right: Contact Info */}
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
            </div>
        </section>
    );
};

export default ContactSection;
