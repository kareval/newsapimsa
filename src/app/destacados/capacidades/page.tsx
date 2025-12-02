import Image from 'next/image';
import CallToAction from "@/components/common/CallToAction";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Capacidades y Servicios | SAPIMSA Grupo Lutech",
    description: "Informe detallado de nuestras capacidades: SAP S/4HANA, Cloud, Ciberseguridad, AI y soluciones específicas para Energy & Utilities.",
};

export default function CapabilitiesPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    {/* Placeholder for abstract network image */}
                    <div className="absolute inset-0 bg-[url('/images/uploads/neon-tech.jpg')] bg-cover bg-center"></div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-purple-medium text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Informe de Capacidades
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        Cartera de Servicios <br />
                        <span className="text-sapimsa-crimson">SAPIMSA Grupo Lutech</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        Un ecosistema unificado de transformación digital.
                        <span className="block mt-2 text-lg text-gray-400">Desde el núcleo SAP hasta la última milla digital.</span>
                    </p>
                </div>
            </div>

            {/* Introduction & Differentiators */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-4">
                            Su Socio Estratégico Integral
                        </h2>
                        <p className="text-xl text-gray-600">
                            En un mercado de disrupción acelerada, la adaptación no es una opción, es supervivencia.
                            Combinamos la herencia SAP de SAPiMSA con la potencia digital de Lutech Group.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Expertise Inigualable", desc: "Dominio maestro en SAP S/4HANA, Sector Público e IA.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Metodología Ágil", desc: "Enfoque orientado a resultados que minimiza riesgos y optimiza tiempos.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                            { title: "Valor Tangible", desc: "Prioridad absoluta en eficiencia operativa y ROI medible.", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Talento de Élite", desc: "Profesionales certificados con décadas de experiencia.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" },
                            { title: "Expansión Lutech", desc: "Capacidades ampliadas en Ciberseguridad, Cloud y Big Data.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
                            { title: "Socio a Largo Plazo", desc: "Acompañamiento continuo más allá de la implementación.", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
                        ].map((item, i) => (
                            <div key={i} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow border-t-2 border-sapimsa-teal-medium">
                                <div className="text-sapimsa-teal-medium mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                                </div>
                                <h3 className="text-lg font-bold text-sapimsa-jet mb-2">{item.title}</h3>
                                <p className="text-gray-600 text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Integrated Portfolio */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-12 text-center">
                        Portafolio Integrado
                    </h2>

                    <div className="space-y-12">
                        {/* SAP Core */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-sapimsa-crimson p-8 text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">SAP como Núcleo Digital</h3>
                                <p className="opacity-90">Más de 35 años de trayectoria. Gold Partner. La base sobre la que construimos el futuro.</p>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet mb-2">Capacidades Clave</h4>
                                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                            <li>30+ Proyectos S/4HANA</li>
                                            <li>15+ Migraciones Complejas</li>
                                            <li>600+ Profesionales Certificados</li>
                                            <li>4 Centros de Excelencia (CoE)</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet mb-2">Innovación</h4>
                                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                            <li><strong>Joule:</strong> Copiloto de IA Generativa.</li>
                                            <li><strong>Business Data Cloud:</strong> Analítica unificada.</li>
                                            <li><strong>Migración Flexible:</strong> Brownfield, Greenfield, Híbrida.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AI & Analytics */}
                        <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-sapimsa-teal-medium p-8 text-white flex flex-col justify-center">
                                <h3 className="text-2xl font-bold mb-4">IA y Analítica Avanzada</h3>
                                <p className="opacity-90">Transformando datos en activos. Desde la consultoría hasta la Hyperautomation.</p>
                            </div>
                            <div className="md:w-2/3 p-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet mb-2">Motores de Innovación</h4>
                                        <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                                            <li><strong>Intelligent Automation:</strong> RPA, Process Mining.</li>
                                            <li><strong>Artificial Intelligence:</strong> Machine Learning, Deep Learning.</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet mb-2">Hyperautomation</h4>
                                        <p className="text-sm text-gray-600">
                                            Orquestación de procesos complejos combinando humanos y robots digitales para máxima eficiencia.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cloud & Cyber */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-sapimsa-purple-medium">
                                <h3 className="text-xl font-bold text-sapimsa-jet mb-4">Cloud & Servicios Gestionados</h3>
                                <p className="text-gray-600 text-sm mb-4">Soporte completo al Cloud Journey y operaciones críticas 24x7.</p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• Cloud Operation Center (CLOC)</li>
                                    <li>• Network Operation Center (NOC)</li>
                                    <li>• Infrastructure Operation</li>
                                </ul>
                            </div>
                            <div className="bg-white rounded-xl shadow-sm p-8 border-t-4 border-gray-800">
                                <h3 className="text-xl font-bold text-sapimsa-jet mb-4">Ciberseguridad</h3>
                                <p className="text-gray-600 text-sm mb-4">Protección extremo a extremo con Security Operations Center (SOC).</p>
                                <ul className="text-sm text-gray-500 space-y-1">
                                    <li>• Application & Data Security</li>
                                    <li>• Cloud & Network Security</li>
                                    <li>• Managed Security Services</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* E&U Focus */}
            <div className="py-24 bg-sapimsa-jet text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-12">
                        <h2 className="text-3xl font-extrabold font-lutech mb-4">Foco Estratégico: Energía y Utilities</h2>
                        <p className="text-gray-300 max-w-3xl">
                            En el epicentro de la transición energética. Nuestro CoE combina conocimiento vertical y tecnológico único.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <h4 className="font-bold text-sapimsa-teal-light mb-2">IA & Big Data</h4>
                            <p className="text-sm text-gray-300">Optimización de procesos y rendimiento medible con Machine Learning.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <h4 className="font-bold text-sapimsa-teal-light mb-2">Digital Twin & HPC</h4>
                            <p className="text-sm text-gray-300">Simulación y optimización de activos con Computación de Alto Rendimiento.</p>
                        </div>
                        <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                            <h4 className="font-bold text-sapimsa-teal-light mb-2">Plataforma SAP IS-U</h4>
                            <p className="text-sm text-gray-300">Liderazgo en S/4HANA for Utilities y SAP Business Data Cloud.</p>
                        </div>
                    </div>
                </div>
            </div>



            <CallToAction />
        </div>
    );
}
