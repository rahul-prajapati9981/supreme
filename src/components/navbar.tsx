import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/Supreme_logos.png" // make sure file exists at public/logo.png
                        alt="Supreme Group Logo"
                        width={150}
                        height={40}
                        priority
                    />
                </Link>

                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="#about" className="hover:text-red-600">About</Link>
                    <Link href="#services" className="hover:text-red-600">Services</Link>
                    <Link href="#industries" className="hover:text-red-600">Industries</Link>
                    <Link href="#projects" className="hover:text-red-600">Projects</Link>
                    <Link href="#contact" className="hover:text-red-600">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
