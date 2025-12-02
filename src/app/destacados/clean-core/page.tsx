import Image from 'next/image';
import Link from 'next/link';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Clean Core Strategy & S/4HANA | SAPIMSA Grupo Lutech",
    description: "Guía estratégica para la transición a SAP Clean Core. Modernice su ERP, reduzca la deuda técnica y prepare su organización para la innovación continua.",
};

export default function CleanCorePage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/uploads/clean-core-hero.png"
                        alt="Clean Core Hero"
                        fill
                        className="object-cover object-center opacity-60"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-crimson text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Destacados
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        Transición a SAP <br />
                        <span className="text-sapimsa-crimson">Clean Core</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        Desafíos y Consideraciones Estratégicas para una Arquitectura Empresarial Moderna.
                        <span className="block mt-2 text-lg md:text-xl text-gray-400">Rompiendo el ciclo de la deuda técnica.</span>
                    </p>
                </div>
            </div>

            {/* The Imperative (Problem) */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:gap-16 items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">El Imperativo Estratégico</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                El modelo tradicional de personalización profunda ha generado un "ciclo vicioso de deuda técnica" que frena la innovación.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Personalización Intensiva</h4>
                                        <p className="text-sm text-gray-500">Adaptación del núcleo a procesos heredados.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Actualizaciones Costosas</h4>
                                        <p className="text-sm text-gray-500">Cada nueva versión requiere re-validar todo el código custom.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-1 mr-4">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path></svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Freno a la Innovación</h4>
                                        <p className="text-sm text-gray-500">Recursos desviados al mantenimiento en lugar de valor.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-6 text-center">La Solución: Filosofía Clean Core</h3>
                                <div className="relative aspect-video rounded-xl overflow-hidden mb-6">
                                    <Image
                                        src="/images/uploads/clean-core-architecture.png"
                                        alt="Clean Core Architecture"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <p className="text-gray-600 text-center text-sm">
                                    Mantener el núcleo S/4HANA estándar y desacoplar las innovaciones en SAP BTP.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Strategic Pillars */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">Pilares Fundamentales</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Principios claros para asegurar la integridad y agilidad del entorno SAP a largo plazo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="p-8 bg-gray-50 rounded-xl border-t-4 border-sapimsa-teal-medium hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Extensibilidad Side-by-Side</h3>
                            <p className="text-gray-600 text-sm">
                                Priorizar SAP BTP para desarrollos complejos. Desacoplar las personalizaciones del núcleo para facilitar actualizaciones.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl border-t-4 border-sapimsa-crimson hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Procesos Estándar</h3>
                            <p className="text-gray-600 text-sm">
                                Adaptar el negocio al software, no al revés. Maximizar el valor de las mejores prácticas de SAP.
                            </p>
                        </div>
                        <div className="p-8 bg-gray-50 rounded-xl border-t-4 border-sapimsa-purple-medium hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">APIs Estándar</h3>
                            <p className="text-gray-600 text-sm">
                                Comunicación segura y versionada. Un "contrato" que protege las integraciones de cambios futuros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Business Case */}
            <div className="py-24 bg-sapimsa-jet text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/uploads/clean-core-impact.png"
                        alt="Impact Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-sapimsa-jet/90 via-sapimsa-jet/80 to-sapimsa-jet/90"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Impacto y Beneficios Cuantificables</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            La adopción de Clean Core no es solo técnica, es una transformación con ROI claro.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="text-5xl font-bold text-sapimsa-teal-light mb-2">-30%</div>
                            <div className="text-lg font-medium text-white mb-1">Costos de Mantenimiento</div>
                            <div className="text-sm text-gray-400">Optimización de recursos TI.</div>
                        </div>
                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="text-5xl font-bold text-sapimsa-crimson mb-2">+40%</div>
                            <div className="text-lg font-medium text-white mb-1">Velocidad de Implementación</div>
                            <div className="text-sm text-gray-400">Despliegue rápido de nuevas capacidades.</div>
                        </div>
                        <div className="p-8 bg-white/10 rounded-2xl backdrop-blur-md border border-white/10">
                            <div className="text-5xl font-bold text-sapimsa-purple-light mb-2">-50%</div>
                            <div className="text-lg font-medium text-white mb-1">Incidentes Críticos</div>
                            <div className="text-sm text-gray-400">Mayor estabilidad en actualizaciones.</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Migration Paths */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-sapimsa-jet mb-12 text-center">Vías de Migración Estratégica</h2>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                            <thead className="bg-sapimsa-jet text-white">
                                <tr>
                                    <th className="py-4 px-6 text-left">Aproximación</th>
                                    <th className="py-4 px-6 text-left">Coste</th>
                                    <th className="py-4 px-6 text-left">Duración</th>
                                    <th className="py-4 px-6 text-left">Innovación</th>
                                    <th className="py-4 px-6 text-left">Descripción</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                <tr className="hover:bg-gray-50">
                                    <td className="py-4 px-6 font-bold text-sapimsa-jet">Brownfield</td>
                                    <td className="py-4 px-6 text-gray-600">Medio</td>
                                    <td className="py-4 px-6 text-gray-600">Medio</td>
                                    <td className="py-4 px-6 text-red-500 font-medium">Bajo</td>
                                    <td className="py-4 px-6 text-sm text-gray-500">Conversión técnica. Mantiene histórico y procesos.</td>
                                </tr>
                                <tr className="hover:bg-gray-50 bg-sapimsa-crimson/5">
                                    <td className="py-4 px-6 font-bold text-sapimsa-crimson">Greenfield</td>
                                    <td className="py-4 px-6 text-gray-600">Alto</td>
                                    <td className="py-4 px-6 text-gray-600">Alto</td>
                                    <td className="py-4 px-6 text-green-600 font-bold">Alto</td>
                                    <td className="py-4 px-6 text-sm text-gray-500">Nueva implementación. Rediseño total y Clean Core nativo.</td>
                                </tr>
                                <tr className="hover:bg-gray-50">
                                    <td className="py-4 px-6 font-bold text-sapimsa-jet">Híbrido</td>
                                    <td className="py-4 px-6 text-gray-600">Medio-Alto</td>
                                    <td className="py-4 px-6 text-gray-600">Medio-Alto</td>
                                    <td className="py-4 px-6 text-sapimsa-teal-medium font-medium">Medio-Alto</td>
                                    <td className="py-4 px-6 text-sm text-gray-500">Selectivo. Combina lo mejor de ambos mundos.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Roadmap & Action Plan */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:gap-16 items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/uploads/clean-core-roadmap.png"
                                    alt="Clean Core Roadmap"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">Plan de Acción Recomendado</h2>
                            <p className="text-gray-600 mb-8">
                                Para pasar del análisis a la acción, proponemos una fase inicial de diagnóstico estructurado.
                            </p>

                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Diagnóstico Exhaustivo</h4>
                                        <p className="text-sm text-gray-500">Análisis de procesos, aplicaciones y deuda técnica actual.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Plan de Sistemas</h4>
                                        <p className="text-sm text-gray-500">Definición de arquitectura objetivo y priorización de iniciativas.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Casos de Negocio</h4>
                                        <p className="text-sm text-gray-500">Justificación cualitativa y cuantitativa (ROI) para cada iniciativa.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-10">
                                <Link href="/contact" className="inline-block bg-sapimsa-crimson text-white px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-lg">
                                    Iniciar Diagnóstico Clean Core
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
