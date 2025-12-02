import Image from 'next/image';
import Link from 'next/link';

export default function MigrationPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/uploads/migration-hero.png"
                        alt="Migration Strategy Hero"
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
                        Navegando la Migración <br />
                        <span className="text-sapimsa-crimson">a SAP S/4HANA</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        Guía Estratégica de Alternativas y Modelos de Despliegue.
                        <span className="block mt-2 text-lg md:text-xl text-gray-400">Transformando el desafío de 2027 en una oportunidad competitiva.</span>
                    </p>
                </div>
            </div>

            {/* The Strategic Imperative */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:gap-16 items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">El Imperativo Estratégico</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                La migración a SAP S/4HANA no es una simple actualización técnica; es una redefinición del modelo operativo para la economía digital.
                            </p>
                            <p className="text-gray-600 mb-6">
                                Con el fin del soporte de SAP ECC programado para 2027, las organizaciones se enfrentan a una decisión crítica que definirá su agilidad futura. S/4HANA, con su base de datos en memoria, permite análisis en tiempo real y procesos simplificados.
                            </p>
                            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-sapimsa-crimson">
                                <h4 className="font-bold text-sapimsa-jet mb-2">¿Por qué ahora?</h4>
                                <p className="text-sm text-gray-500">
                                    Esperar aumenta el riesgo de obsolescencia y deuda técnica. Iniciar el diagnóstico hoy permite planificar una transición suave y estratégica.
                                </p>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl transform md:rotate-1 hover:rotate-0 transition-transform duration-500">
                                <Image
                                    src="/images/uploads/migration-imperative.png"
                                    alt="Strategic Imperative"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Migration Strategies */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">Las 3 Estrategias Principales</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Elegir el camino correcto es la primera gran decisión estratégica.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Greenfield */}
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-green-500 w-full"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">Greenfield</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-4">Nueva Implementación</p>
                                <p className="text-gray-600 mb-6">
                                    "Construir desde cero". Rediseño total de procesos para adoptar el estándar (Clean Core).
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Máxima Innovación</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Elimina Deuda Técnica</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">⚠</span> Mayor Gestión del Cambio</li>
                                </ul>
                            </div>
                        </div>

                        {/* Brownfield */}
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-orange-500 w-full"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">Brownfield</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-4">Conversión de Sistema</p>
                                <p className="text-gray-600 mb-6">
                                    "Renovar la casa". Actualización técnica conservando configuración y datos históricos.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Menor Disrupción</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Conserva Histórico</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">⚠</span> Hereda Deuda Técnica</li>
                                </ul>
                            </div>
                        </div>

                        {/* Hybrid */}
                        <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <div className="h-2 bg-blue-500 w-full"></div>
                            <div className="p-8">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">Híbrido (SDT)</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wide font-bold mb-4">Transición Selectiva</p>
                                <p className="text-gray-600 mb-6">
                                    "Remodelación a medida". Combina sistema limpio con migración selectiva de datos.
                                </p>
                                <ul className="space-y-2 text-sm text-gray-500 mb-6">
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Flexibilidad Total</li>
                                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Consolidación de Sistemas</li>
                                    <li className="flex items-center"><span className="text-red-500 mr-2">⚠</span> Alta Complejidad</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Shell Conversion & Comparison */}
            <div className="py-24 bg-sapimsa-jet text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/uploads/migration-strategies.png"
                        alt="Strategies Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-sapimsa-jet/85 via-sapimsa-jet/75 to-sapimsa-jet/85"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">El Caso Especial: Shell Conversion</h2>
                        <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/10">
                            <p className="text-lg text-gray-200 leading-relaxed">
                                Una técnica potente dentro del enfoque Híbrido. Consiste en crear una copia del sistema ECC ("cascarón") con toda la configuración y desarrollos, pero <strong>sin datos</strong>. Este molde se convierte a S/4HANA y luego se cargan datos limpios. Combina la preservación de la inversión en personalización con la ventaja de empezar con datos saneados.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-8 text-center">Comparativa de Estrategias</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/20 text-gray-400 text-sm uppercase tracking-wider">
                                    <th className="py-4 px-6">Criterio</th>
                                    <th className="py-4 px-6">Greenfield</th>
                                    <th className="py-4 px-6">Brownfield</th>
                                    <th className="py-4 px-6">Híbrido / SDT</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300 text-sm">
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 font-bold text-white">Objetivo</td>
                                    <td className="py-4 px-6">Transformación Radical</td>
                                    <td className="py-4 px-6">Continuidad</td>
                                    <td className="py-4 px-6">Modernización Selectiva</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 font-bold text-white">Innovación</td>
                                    <td className="py-4 px-6 text-green-400">Máxima</td>
                                    <td className="py-4 px-6 text-red-400">Baja/Media</td>
                                    <td className="py-4 px-6 text-blue-400">Alta (Selectiva)</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 font-bold text-white">Datos Históricos</td>
                                    <td className="py-4 px-6">Limitada</td>
                                    <td className="py-4 px-6">Completa</td>
                                    <td className="py-4 px-6">Selectiva</td>
                                </tr>
                                <tr className="border-b border-white/10 hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-6 font-bold text-white">Riesgo Operativo</td>
                                    <td className="py-4 px-6">Alto (Rediseño)</td>
                                    <td className="py-4 px-6">Medio (Técnico)</td>
                                    <td className="py-4 px-6">Medio-Alto (Datos)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Deployment Models */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">Modelos de Despliegue</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Una vez definida la estrategia de migración, ¿dónde vivirá su sistema?
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sapimsa-teal-dark">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">On-Premise</h3>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-4">Control Total</p>
                            <p className="text-gray-600 text-sm mb-4">
                                Infraestructura propia. Máxima soberanía y personalización. Modelo CAPEX (Licencias perpetuas).
                            </p>
                            <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Para requisitos regulatorios estrictos</span>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sapimsa-purple-medium transform md:-translate-y-4">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">RISE with SAP</h3>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-4">Private Cloud</p>
                            <p className="text-gray-600 text-sm mb-4">
                                La ruta principal para clientes existentes. Nube privada a medida, modelo OPEX (Suscripción). Gestión delegada en SAP.
                            </p>
                            <span className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded">Equilibrio Flexibilidad/Nube</span>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-sapimsa-crimson">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">GROW with SAP</h3>
                            <p className="text-xs font-bold text-gray-400 uppercase mb-4">Public Cloud</p>
                            <p className="text-gray-600 text-sm mb-4">
                                SaaS listo para usar. Estandarización máxima, despliegue rápido (4-8 semanas). Innovación continua automática.
                            </p>
                            <span className="inline-block bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Para nuevos clientes / PyMEs</span>
                        </div>
                    </div>

                    <div className="mt-16 relative aspect-[21/9] rounded-2xl overflow-hidden shadow-xl">
                        <Image
                            src="/images/uploads/migration-cloud.png"
                            alt="Cloud Deployment Models"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                            <p className="text-white font-medium">La elección del modelo define la velocidad de innovación futura.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conclusion & CTA */}
            <div className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">Una Decisión Estratégica Integrada</h2>
                    <p className="text-gray-600 text-lg mb-10">
                        No existe una respuesta única. La mejor alternativa alinea los objetivos de negocio (Transformación vs. Continuidad) con la realidad técnica (Deuda Técnica) y el modelo financiero (CAPEX vs. OPEX).
                    </p>
                    <Link href="/contact" className="inline-block bg-sapimsa-crimson text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                        Iniciar Diagnóstico de Migración
                    </Link>
                </div>
            </div>
        </div>
    );
}
