import Image from 'next/image';

export default function DetailedServices() {
    const pillars = [
        {
            title: "Rise with SAP",
            subtitle: "Innovación y Resiliencia",
            description: "Impulsa tu transformación digital con una oferta integral que combina infraestructura, software y servicios gestionados. Garantizamos una migración fluida y segura a la nube, adaptada a tu ritmo y necesidades, asegurando la continuidad operativa y la innovación constante.",
            icon: "/images/icons/icon-rise.svg",
            features: [
                "Nuevo paradigma de licenciamiento",
                "Infraestructura, Productos e Innovación continua",
                "Actualizaciones y upgrades tecnológicos",
                "Assessment, migración y operación",
                "Herramientas, Frameworks y Aceleradores",
                "Cloud of Choice"
            ]
        },
        {
            title: "S/4Hana y BW/4 Transformation",
            subtitle: "Reducción del Time-to-Market",
            description: "Acelera la adopción de SAP S/4HANA con nuestra metodología probada. Reducimos el tiempo de implementación y minimizamos riesgos mediante soluciones preconfiguradas y un enfoque centrado en el valor del negocio, optimizando tus procesos críticos desde el primer día.",
            icon: "/images/icons/icon-transformation.svg",
            features: [
                "SAP Digital Transformation Assessment Services",
                "Soluciones pre-configuradas y probadas",
                "Data conversion hub",
                "Cloud transformation hub for SAP",
                "Servicios de seguridad SAP y Basis"
            ]
        },
        {
            title: "SAP Business Technology Platform (BTP)",
            subtitle: "Extensión e Integración",
            description: "Desbloquea el potencial de la innovación con SAP Business Technology Platform. Integramos, extendemos y creamos aplicaciones personalizadas que conectan tus datos y procesos para una toma de decisiones inteligente, potenciando la agilidad de tu organización.",
            icon: "/images/icons/icon-btp.svg",
            features: [
                "Nuevos paradigmas de desarrollo (incluido ABAP)",
                "Soluciones personalizadas y Core digital estable",
                "Aplicaciones 'in-app' y 'side-by-side'",
                "Nuevo concepto de middleware e integración",
                "Analytics avanzados con SAC"
            ]
        },
        {
            title: "End to End SAP Transformation",
            subtitle: "Socio Integral",
            description: "Te acompañamos en todo el ciclo de vida de tus aplicaciones SAP. Desde la estrategia y el diseño hasta la operación y la mejora continua, asegurando el máximo rendimiento y retorno de inversión con un enfoque holístico y personalizado.",
            icon: "/images/icons/icon-e2e.svg",
            features: [
                "Servicios de ciclo de vida (Customer Engagement)",
                "Business Assessment",
                "Plataforma y Cloud (opción bare metal)",
                "Application Management",
                "Build y Deploy"
            ]
        }
    ];

    return (
        <div className="py-16 bg-gray-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-5">
                <Image
                    src="/images/uploads/neon-tech.jpg"
                    alt="Background Tech"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-base text-sapimsa-crimson font-semibold tracking-wide uppercase">Oferta de Valor</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-sapimsa-jet sm:text-4xl font-lutech">
                        Servicios de Consultoría y Optimización
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Extraemos el máximo valor de las soluciones SAP gestionando todas las componentes de la plataforma.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {pillars.map((pillar) => (
                        <div key={pillar.title} className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-sapimsa-crimson hover:shadow-xl transition-shadow">
                            <div className="px-6 py-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold text-sapimsa-jet mb-2">{pillar.title}</h3>
                                        <p className="text-sm font-medium text-sapimsa-crimson uppercase">{pillar.subtitle}</p>
                                    </div>
                                    <div className="relative h-12 w-12 flex-shrink-0 ml-4">
                                        <Image
                                            src={pillar.icon}
                                            alt=""
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-6">{pillar.description}</p>
                                <ul className="space-y-3">
                                    {pillar.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-500 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
