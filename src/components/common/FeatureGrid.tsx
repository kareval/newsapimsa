export default function FeatureGrid() {
    const features = [
        {
            title: "Cercanía y Compromiso",
            desc: "No somos solo proveedores, somos tu compañero de viaje. Nos implicamos al 100% en tus retos como si fueran nuestros.",
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
        },
        {
            title: "Experiencia Probada",
            desc: "Más de 35 años de trayectoria y un equipo de consultores senior garantizan el éxito de proyectos complejos.",
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
            ),
        },
        {
            title: "Calidad Certificada",
            desc: "Como SAP Gold Partner, ofrecemos los más altos estándares de calidad y acceso directo a las últimas innovaciones de SAP.",
            icon: (
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech">
                        ¿Por qué elegir SAPIMSA?
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-sapimsa-crimson to-sapimsa-purple-dark rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-200"></div>
                            <div className="relative bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow h-full flex flex-col items-center text-center">
                                <div className="flex-shrink-0 p-3 bg-sapimsa-crimson rounded-full mb-4 shadow-lg">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-sapimsa-jet mb-3">{feature.title}</h3>
                                <p className="text-gray-500">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
