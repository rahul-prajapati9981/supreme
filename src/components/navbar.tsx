import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="w-full fixed top-0 z-50 bg-white shadow-md ">
            <div className="w-full px-4 py-4">
                <div className="flex items-center">
                    <div className="ml-[130px] mt-5">
                        <Link href="/">
                            <Image
                                src="/Supreme_logos.png"
                                alt="Supreme Group Logo"
                                width={150}
                                height={40}
                                priority
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
