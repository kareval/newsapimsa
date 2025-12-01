import Image from 'next/image';

export default function Services() {
    const services = [
        {
            title: "Consultoría e Implantación SAP",
            description: "Ayudamos a las organizaciones en la implantación de sistemas de gestión empresarial. Desde el diseño de la arquitectura hasta la configuración, integración y soporte continuo.",
            icon: "/images/service-consulting.png"
        },
        {
            title: "Proyectos Técnicos y Desarrollo",
            description: "Desarrollo a medida y proyectos técnicos avanzados. Integraciones complejas, reingeniería de procesos y soluciones personalizadas para optimizar su negocio.",
            icon: "/images/service-development.png"
        },
        {
            title: "Oficina de Proyectos",
            description: "Gestión integral de proyectos con metodologías ágiles y tradicionales. Aseguramos el cumplimiento de plazos, costes y calidad en cada entrega.",
            icon: "/images/service-pmo.svg"
        }
    ];

    return (
        <div className="py-12 bg-white" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-base text-sapimsa-crimson font-semibold tracking-wide uppercase">Nuestros Servicios</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sapimsa-jet sm:text-4xl font-lutech">
                        Soluciones SAP Especializadas
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Desde 1990, ofrecemos experiencia y compromiso en el ecosistema SAP, adaptándonos a las necesidades específicas de cada cliente.
                    </p>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {services.map((service) => (
                            <div key={service.title} className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md overflow-hidden">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={48}
                                        height={48}
                                        className="object-cover"
                                    />
                                </div>
                                <p className="ml-16 text-lg leading-6 font-medium text-sapimsa-jet">{service.title}</p>
                                <dd className="mt-2 ml-16 text-base text-gray-500">
                                    {service.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
