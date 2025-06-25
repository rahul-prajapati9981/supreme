import Head from 'next/head';
import Navbar from '../components/navbar';
import IntroVideo from '../components/intro-video';
import VehicleSwitcher from "@/components/vehicle-switcher";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Supreme Group</title>
            </Head>
            <Navbar />
            <div className="bg-primary text-white p-4">Tailwind is working!</div>
            <main className="mt-16">
                <IntroVideo />
                <VehicleSwitcher/>
                <ContactSection />
                <Footer/>
                {/* Other sections will come here */}
            </main>
        </>
    );
}
