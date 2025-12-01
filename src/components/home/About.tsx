import Image from 'next/image';

export default function About() {
    return (
        <div className="bg-gray-50 py-16" id="about">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-base text-sapimsa-crimson font-semibold tracking-wide uppercase">Quiénes Somos</h2>
                        <h3 className="mt-2 text-3xl font-extrabold text-sapimsa-jet sm:text-4xl font-lutech">
                            SAPIMSA
                        </h3>
                        <div className="mt-6 prose prose-indigo text-gray-500">
                            <p>
                                ¿Buscas un compañero de viaje que entienda tu negocio y comparta tus inquietudes y objetivos, que se implique al 100% en tus proyectos personalizando la atención y el servicio, con total honestidad, compromiso y transparencia, generando una relación de confianza duradera?
                            </p>
                            <p className="mt-4 font-semibold text-sapimsa-crimson">
                                Puedes contar con nosotros, convertimos tus retos en nuestras oportunidades, convertimos tus ideas en nuestros retos. Elígenos y déjanos acompañarte.
                            </p>
                            <p className="mt-4">
                                Contamos con el mayor reconocimiento que un Partner de SAP puede obtener: somos <span className="font-bold">Gold Partner</span>.
                            </p>
                            <p>
                                Nuestras certificaciones nos avalan como una entidad experta en la implementación y mantenimiento de soluciones SAP, y acreditan la máxima calidad y excelencia de los servicios que ofrecemos a nuestros clientes.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0 relative">
                        <div className="relative h-64 sm:h-72 md:h-96 lg:h-auto lg:aspect-[4/3] w-full rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/uploads/evolution-mural.png"
                                alt="Evolución y Valores SAPIMSA"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-sapimsa-jet/50 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
