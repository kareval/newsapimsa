import Image from 'next/image';

import ServicePortfolio from "@/components/services/ServicePortfolio";
import CallToAction from "@/components/common/CallToAction";

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative bg-sapimsa-jet py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/uploads/neon-tech.jpg"
                        alt="Tecnología y Servicios"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-lutech tracking-tight">
                        Nuestros Servicios
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl">
                        Excelencia técnica y consultoría estratégica para su éxito empresarial.
                    </p>
                </div>
            </div>
            <ServicePortfolio />
            <CallToAction />
        </div>
    );
}
