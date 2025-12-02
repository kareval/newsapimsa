import Image from 'next/image';

import ServicePortfolio from "@/components/services/ServicePortfolio";
import CallToAction from "@/components/common/CallToAction";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Servicios SAP & Innovación | SAPIMSA Grupo Lutech",
    description: "Cartera integral de servicios: Implementación S/4HANA, Migración Cloud, Hiperautomatización, Data Intelligence y Soporte AMS.",
};

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative bg-sapimsa-jet py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/uploads/neon-tech.jpg"
                        alt="Tecnología y Servicios"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>
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
