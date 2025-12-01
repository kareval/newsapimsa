import Image from 'next/image';

export default function StrategicVision() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-sapimsa-jet rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 text-center">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl font-lutech mb-8">
                            Visión Estratégica
                        </h2>
                        <div className="mt-6 text-lg leading-8 text-gray-300 space-y-6 max-w-4xl mx-auto">
                            <p>
                                Las nuevas dinámicas del mercado están impulsando una fuerte revisión estratégica de las aplicaciones empresariales para hacer más eficiente y eficaz la gestión de los datos.
                            </p>
                            <p>
                                En este contexto, <span className="text-sapimsa-crimson font-bold">SAP</span>, líder indiscutible del mercado en la gestión de procesos empresariales, desempeña un papel innovador y de alto rendimiento, posicionándose como una plataforma funcional para la mejora del rendimiento a través de la digitalización.
                            </p>
                            <p>
                                El <span className="text-white font-bold">Grupo Lutech</span>, Gold Partner de SAP, con 35 años de experiencia en soluciones SAP, pone a disposición las competencias y habilidades de 700 profesionales, garantizando servicios avanzados de consultoría para optimizar los procesos y el negocio de los clientes.
                            </p>
                        </div>
                    </div>

                    {/* AI & Innovation Section */}
                    {/* AI & Innovation Section */}
                    <div className="relative bg-sapimsa-crimson px-6 py-12 sm:px-12 lg:py-24 lg:px-16 overflow-hidden">
                        <div className="absolute inset-0">
                            <Image
                                src="/images/uploads/innovation-vr.jpg"
                                alt="Innovación y Transformación Digital"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-crimson/90 to-sapimsa-crimson/40 mix-blend-multiply"></div>
                        </div>
                        <div className="relative max-w-2xl text-left">
                            <h3 className="text-2xl font-bold text-white mb-6 sm:text-3xl">
                                Innovando la Transformación Empresarial con IA y SAP
                            </h3>
                            <p className="text-lg leading-8 text-white opacity-95 drop-shadow-sm">
                                SAPIMSA acelera la transformación digital con soluciones a medida y experiencia en la industria. A través de <span className="font-bold">RISE with SAP</span>, <span className="font-bold">GROW with SAP</span> y <span className="font-bold">SAP Business Technology Platform (BTP)</span>, permitimos transiciones a la nube fluidas, análisis avanzados y extensibilidad. Aprovechando la <span className="font-bold">IA Empresarial (Business AI)</span>, optimizamos las operaciones y reimaginamos los modelos de negocio para un éxito duradero.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
