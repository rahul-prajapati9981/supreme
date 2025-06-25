import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-footer bg-no-repeat bg-cover bg-right-bottom text-black border-t border-gray-200 pt-12 pb-8 px-4">
            <div className="max-w-screen-lg mx-auto">
                {/* Logo */}
                <div>
                    <Link href="/">
                        <Image
                            src="/Supreme_logos.png" // Make sure this image exists in your public folder
                            alt="Supreme logo"
                            width={120}
                            height={48}
                            className="h-10 md:h-12"
                        />
                    </Link>
                </div>

                {/* Links - Desktop */}
                <div className="hidden md:flex flex-wrap justify-between gap-10 mt-8">
                    {[
                        {
                            title: "Applications",
                            links: ["Apparel", "Automotive", "Filtration", "Customised Nonwoven"],
                            hrefs: [
                                "/applications/apparel",
                                "/applications/automotive",
                                "/applications/filtration",
                                "/applications/customised-nonwoven",
                            ],
                        },
                        {
                            title: "Company",
                            links: ["Who We Are", "Global Competency", "Innovation", "ESG Impact"],
                            hrefs: [
                                "/who-we-are",
                                "/global-competency",
                                "/innovation",
                                "/esg-impact",
                            ],
                        },
                        {
                            title: "More",
                            links: ["Contact Us", "Careers"],
                            hrefs: ["/contact-us", "/careers"],
                        },
                        {
                            title: "Follow Us",
                            links: ["LinkedIn"],
                            hrefs: ["https://www.linkedin.com/company/supreme-group-company/"],
                        },
                    ].map((section, index) => (
                        <ul key={index} className="space-y-2">
                            <li className="font-semibold uppercase mb-2">{section.title}</li>
                            {section.links.map((text, idx) => (
                                <li key={idx}>
                                    <Link
                                        href={section.hrefs[idx]}
                                        className="text-sm text-black text-opacity-70 hover:text-opacity-100 transition"
                                        target={section.title === "Follow Us" ? "_blank" : "_self"}
                                    >
                                        {text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="mt-10 text-sm text-black text-opacity-70 grid md:grid-cols-3 gap-4 text-center md:text-left">
                    <span>©2024. All Rights Reserved.</span>
                    <span className="md:col-span-2">
            Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.
          </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
