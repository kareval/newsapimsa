import Image from 'next/image';

export default function ServicePortfolio() {
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

    const methodologyServices = [
        {
            title: "Consultoría e Implantación SAP",
            desc: "Guía en cada fase, desde el diseño conceptual hasta la puesta en marcha, asegurando que la estrategia transforme objetivos en resultados.",
            icon: "/images/service-consulting.png"
        },
        {
            title: "Proyectos Técnicos y Desarrollo",
            desc: "Construcción de soluciones a medida y funcionalidades personalizadas para una ventaja competitiva única.",
            icon: "/images/service-development.png"
        },
        {
            title: "Oficina de Proyectos",
            desc: "Núcleo de gestión que garantiza ejecución rigurosa, cumplimiento de plazos y asignación correcta de recursos.",
            icon: "/images/service-pmo.svg"
        }
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Introduction */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet sm:text-4xl font-lutech mb-4">
                        Propuesta de Valor
                    </h2>
                    <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
                        Soluciones integrales para impulsar su negocio. Proporcionamos herramientas tecnológicas de vanguardia para mejorar procesos, aumentar la productividad y fundamentar decisiones estratégicas.
                    </p>
                </div>

                {/* Key Solutions (Pillars) */}
                <div className="mb-20">
                    <h3 className="text-2xl font-bold text-sapimsa-crimson mb-8 border-b border-gray-200 pb-2">
                        Soluciones Tecnológicas Clave
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

                {/* Methodology / Services */}
                <div>
                    <h3 className="text-2xl font-bold text-sapimsa-crimson mb-8 border-b border-gray-200 pb-2">
                        Metodología y Ejecución
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {methodologyServices.map((service, idx) => (
                            <div key={idx} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow flex flex-col items-center text-center">
                                <div className="relative h-16 w-16 mb-4">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <h4 className="text-lg font-bold text-sapimsa-jet mb-2">{service.title}</h4>
                                <p className="text-gray-600">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
