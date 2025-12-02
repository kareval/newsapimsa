import Image from 'next/image';
import AboutComponent from "@/components/home/About";
import StrategicVision from "@/components/home/StrategicVision";
import Testimonials from "@/components/about/Testimonials";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative bg-sapimsa-jet py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/uploads/human-future.png"
                        alt="Futuro y Tecnología"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-lutech tracking-tight">
                        Quiénes Somos
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl">
                        Impulsando la transformación digital con visión de futuro y compromiso humano.
                    </p>
                </div>
            </div>
            <AboutComponent />
            <StrategicVision />
            <Testimonials />
        </div>
    );
}
