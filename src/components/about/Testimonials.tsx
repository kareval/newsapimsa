import Image from 'next/image';

export default function Testimonials() {
    const testimonials = [
        {
            company: "MOEVE",
            role: "Centro de Competencia SAP",
            quote: "Han sido parte fundamental en el éxito que ha alcanzado el equipo en la migración SAP.",
            logo: "/images/logos/moeve.svg"
        },
        {
            company: "REPSOL",
            role: "Apoyo a proyectos SAP",
            quote: "El equipo ha estado comprometido con todo lo que le ha llegado, trabajando en fines de semana cuando se ha necesitado y siendo muy proactivos que es lo que más valoramos. Son un referente muy valorado por el resto de servicios que trabajan en REPSOL.",
            logo: "/images/logos/repsol.svg"
        },
        {
            company: "THYSSENKRUPP",
            role: "",
            quote: "Con su compromiso, responsabilidad, capacidad de trabajo, iniciativa y disponibilidad, se ha convertido en referencia no sólo para el equipo de SAP sino para toda la compañía. La calidad de su trabajo es excepcional.",
            logo: "/images/logos/thyssenkrupp.svg"
        },
        {
            company: "MINISTERIO DE JUSTICIA",
            role: "Subdirección General",
            quote: "Felicitaciones por el proyecto que se está haciendo para dar solución a las convocatorias de selección de interinos y sustitutos.",
            logo: "/images/logos/ministerio.svg"
        },
        {
            company: "INSTITUTO NACIONAL TÉCNICO AEROESPACIAL",
            role: "",
            quote: "Si tenéis que realizar una migración de estas características…tenéis un buen equipo en el que poder confiar con SAPIMSA.",
            logo: "/images/logos/inta.svg"
        }
    ];

    return (
        <div className="bg-sapimsa-jet py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-white text-center mb-12 font-lutech">
                    Experiencia Comprobada
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg p-8 relative flex flex-col">
                            <div className="absolute top-0 left-0 transform -translate-y-1/2 translate-x-4">
                                <svg className="h-12 w-12 text-sapimsa-crimson opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                </svg>
                            </div>

                            <div className="mb-6 flex justify-center">
                                <div className="relative h-12 w-48">
                                    <Image
                                        src={testimonial.logo}
                                        alt={`Logo ${testimonial.company}`}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>

                            <p className="text-gray-600 italic mb-6 relative z-10 flex-grow">"{testimonial.quote}"</p>

                            <div className="border-t border-gray-200 pt-4 mt-auto">
                                <p className="text-sapimsa-jet font-bold">{testimonial.company}</p>
                                {testimonial.role && <p className="text-sm text-sapimsa-crimson">{testimonial.role}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
