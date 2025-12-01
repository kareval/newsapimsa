import Image from 'next/image';
import Link from 'next/link';

export default function HyperautomationPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-sapimsa-jet via-sapimsa-jet/90 to-sapimsa-crimson/20"></div>
                {/* Abstract geometric background as placeholder */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sapimsa-teal-light via-transparent to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-crimson text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Destacados
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        Hiperautomatización <br />
                        <span className="text-sapimsa-teal-light">Estratégica</span>
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        Evolución y Resultados de la Transformación Digital (2018-2025).
                        <span className="block mt-2 text-lg md:text-xl text-gray-400">Integrando RPA, Case Management e IA para la excelencia operativa.</span>
                    </p>
                </div>
            </div>

            {/* Introduction - The 3 Pillars */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">La Hiperautomatización como Pilar Estratégico</h2>
                        <p className="text-lg text-gray-600">
                            En SAPIMSA Grupo Lutech, entendemos la Hiperautomatización como la integración sinérgica de tres componentes tecnológicos clave para lograr una transformación de extremo a extremo.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* RPA */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sapimsa-teal-medium hover:transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-sapimsa-teal-light/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-sapimsa-teal-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">RPA</h3>
                            <p className="text-gray-600 text-sm">
                                Robotic Process Automation para lograr ahorros rápidos mediante la automatización de tareas repetitivas y la maximización de volúmenes.
                            </p>
                        </div>

                        {/* Case Management */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sapimsa-crimson hover:transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-sapimsa-crimson/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-sapimsa-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Case Management</h3>
                            <p className="text-gray-600 text-sm">
                                Gobernanza, orquestación y seguimiento de la fuerza laboral virtual y humana para garantizar el control en procesos complejos.
                            </p>
                        </div>

                        {/* AI */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-sapimsa-purple-medium hover:transform hover:-translate-y-1 transition-all duration-300">
                            <div className="w-16 h-16 bg-sapimsa-purple-medium/10 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-sapimsa-purple-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Inteligencia Artificial</h3>
                            <p className="text-gray-600 text-sm">
                                Maximización del alcance y la efectividad de la automatización, permitiendo el procesamiento de datos no estructurados y decisiones cognitivas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service Model Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">Modelo de Servicio de Extremo a Extremo</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Orquestamos cada fase del viaje de la automatización para garantizar el máximo retorno de la inversión, desde la estrategia hasta la mejora continua.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Consulting */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-sapimsa-teal-medium rounded-full"></span>
                                Consulting & Advisory
                            </h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Selección de la mejor solución tecnológica.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Diseño de Arquitectura y Framework.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Process Discovery y Scoping.
                                </li>
                            </ul>
                        </div>

                        {/* Implementation */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-sapimsa-crimson rounded-full"></span>
                                Implementation Services
                            </h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-crimson shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Desarrollo de workflows automatizados.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-crimson shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Implementación de Intelligent Automation.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-crimson shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Testing y Control de Calidad (QC).
                                </li>
                            </ul>
                        </div>

                        {/* AMS */}
                        <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-4 flex items-center gap-2">
                                <span className="w-2 h-8 bg-sapimsa-purple-medium rounded-full"></span>
                                AMS & Support
                            </h3>
                            <ul className="space-y-3 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-purple-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Mantenimiento de Software Bots.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-purple-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Gestión de la mejora continua.
                                </li>
                                <li className="flex items-start gap-2">
                                    <svg className="w-5 h-5 text-sapimsa-purple-medium shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Monitoreo y Health Checks.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Alliances */}
                    <div className="mt-20 pt-12 border-t border-gray-100">
                        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Alianzas Tecnológicas Estratégicas</p>
                        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Text placeholders for logos as we don't have them yet */}
                            <span className="text-xl font-bold text-gray-600">UiPath</span>
                            <span className="text-xl font-bold text-gray-600">Appian</span>
                            <span className="text-xl font-bold text-gray-600">Outsystems</span>
                            <span className="text-xl font-bold text-gray-600">Pega</span>
                            <span className="text-xl font-bold text-gray-600">Mendix</span>
                            <span className="text-xl font-bold text-gray-600">OpenAI</span>
                            <span className="text-xl font-bold text-gray-600">AWS AI</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:gap-16 items-center">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">Trayectoria de Innovación (2018-2025)</h2>
                            <p className="text-gray-600 mb-8">
                                Nuestra evolución demuestra un crecimiento estratégico desde la automatización de tareas simples hacia soluciones inteligentes de alta complejidad, en colaboración con líderes globales del sector energético.
                            </p>

                            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                                {/* Timeline Items */}
                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sapimsa-teal-light group-[.is-active]:bg-sapimsa-crimson shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-sapimsa-jet">Inicio RPA</div>
                                            <time className="font-caveat font-medium text-sapimsa-crimson">2018</time>
                                        </div>
                                        <div className="text-gray-500 text-sm">Implementación de RPA (Proyecto eBot).</div>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sapimsa-teal-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-sapimsa-jet">Hyper Automations</div>
                                            <time className="font-caveat font-medium text-sapimsa-crimson">2020</time>
                                        </div>
                                        <div className="text-gray-500 text-sm">Expansión a procesos complejos.</div>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sapimsa-purple-medium shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-sapimsa-jet">IA & Machine Learning</div>
                                            <time className="font-caveat font-medium text-sapimsa-crimson">2023</time>
                                        </div>
                                        <div className="text-gray-500 text-sm">Clasificación automática de documentos.</div>
                                    </div>
                                </div>

                                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-sapimsa-jet shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                                        <svg className="fill-current text-white w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
                                    </div>
                                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded border border-gray-200 shadow-sm">
                                        <div className="flex items-center justify-between space-x-2 mb-1">
                                            <div className="font-bold text-sapimsa-jet">Document Understanding</div>
                                            <time className="font-caveat font-medium text-sapimsa-crimson">2025</time>
                                        </div>
                                        <div className="text-gray-500 text-sm">Automatización cognitiva consolidada.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            {/* Placeholder for Timeline Visual */}
                            <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-inner flex items-center justify-center relative overflow-hidden">
                                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                                <div className="text-center p-8">
                                    <p className="text-gray-400 font-light italic">Visualización 3D de Evolución Tecnológica</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Results */}
            <div className="py-24 bg-sapimsa-jet text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Impacto Estratégico Comprobado</h2>
                        <p className="text-gray-300 max-w-2xl mx-auto">
                            Resultados auditables que demuestran nuestra capacidad para transformar operaciones y generar valor financiero real.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-sapimsa-teal-light mb-2">+90</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Procesos en Producción</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-sapimsa-crimson mb-2">+125</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Robots Gestionados</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-sapimsa-purple-light mb-2">+60%</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Productividad Media</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-white mb-2">+38M</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Prácticas Asumidas</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-white mb-2">+24M</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Internalizadas (ex-Outsourcers)</div>
                        </div>
                        <div className="p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10">
                            <div className="text-4xl font-bold text-sapimsa-teal-light mb-2">95%</div>
                            <div className="text-sm text-gray-300 uppercase tracking-wide">Fiabilidad Técnica</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Value Evolution Section */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-sapimsa-jet mb-4">Evolución del Valor: Modelo de Madurez</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Un camino probado hacia la máxima eficiencia, donde la sofisticación de la solución se traduce directamente en mayores ahorros.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Phase 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-sapimsa-teal-light text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Fase 1</div>
                            <h3 className="text-lg font-bold text-sapimsa-jet mb-2 mt-2">RPA Stand-alone</h3>
                            <p className="text-sm text-gray-500 mb-4 h-12">Automatización de tareas repetitivas para reducción rápida de volumen.</p>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-3xl font-bold text-sapimsa-teal-medium">10%</span>
                                <span className="text-xs text-gray-400 mb-1 uppercase font-bold">Ahorro Anual</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-sapimsa-teal-medium h-2 rounded-full" style={{ width: '33%' }}></div>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 bg-sapimsa-teal-medium text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Fase 2</div>
                            <h3 className="text-lg font-bold text-sapimsa-jet mb-2 mt-2">RPA + Case Mgmt</h3>
                            <p className="text-sm text-gray-500 mb-4 h-12">Cooperación Robot-Humano para gestión de procesos complejos E2E.</p>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-3xl font-bold text-sapimsa-crimson">20%</span>
                                <span className="text-xs text-gray-400 mb-1 uppercase font-bold">Ahorro Anual</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-sapimsa-crimson h-2 rounded-full" style={{ width: '66%' }}></div>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border-2 border-sapimsa-purple-light relative overflow-hidden group transform md:-translate-y-2">
                            <div className="absolute top-0 right-0 bg-sapimsa-purple-medium text-white text-xs font-bold px-3 py-1 rounded-bl-lg">Fase 3</div>
                            <h3 className="text-lg font-bold text-sapimsa-jet mb-2 mt-2">Full Hyperautomation</h3>
                            <p className="text-sm text-gray-500 mb-4 h-12">Integración de IA para maximizar el alcance y la toma de decisiones.</p>
                            <div className="flex items-end gap-2 mb-2">
                                <span className="text-3xl font-bold text-sapimsa-purple-medium">30%</span>
                                <span className="text-xs text-gray-400 mb-1 uppercase font-bold">Ahorro Anual</span>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-2">
                                <div className="bg-sapimsa-purple-medium h-2 rounded-full" style={{ width: '100%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="md:flex md:gap-16 items-center">
                        <div className="md:w-1/2 order-2 md:order-1">
                            {/* Placeholder for Methodology Visual */}
                            <div className="aspect-square bg-gradient-to-br from-white to-gray-100 rounded-full shadow-lg flex items-center justify-center relative border-4 border-sapimsa-teal-light/20">
                                <div className="text-center p-8">
                                    <p className="text-gray-400 font-light italic">Metodología Agile & Execution Room</p>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
                            <h2 className="text-3xl font-bold text-sapimsa-jet mb-6">Metodología Agile: Execution Room</h2>
                            <p className="text-gray-600 mb-6">
                                Nuestro enfoque no es solo tecnológico, sino metodológico. Aplicamos Agile a la "Execution Room" para abordar de forma dinámica las dificultades y reducir el tiempo de obtención de ahorros.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center text-xs font-bold mt-1 mr-3">1</span>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Discovery y Análisis</h4>
                                        <p className="text-sm text-gray-500">Diagnóstico integral y priorización de oportunidades de alto impacto.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center text-xs font-bold mt-1 mr-3">2</span>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Planificación y Business Case</h4>
                                        <p className="text-sm text-gray-500">Hoja de ruta y definición de KPIs claros.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center text-xs font-bold mt-1 mr-3">3</span>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Desarrollo e Implementación</h4>
                                        <p className="text-sm text-gray-500">Desarrollo ágil, puesta en producción y ciclos de pruebas rigurosos.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-sapimsa-crimson text-white flex items-center justify-center text-xs font-bold mt-1 mr-3">4</span>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-jet">Monitoreo y Mejora Continua</h4>
                                        <p className="text-sm text-gray-500">Gobernanza del rendimiento y optimización proactiva.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="bg-sapimsa-crimson py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Defina su Hoja de Ruta hacia la Eficiencia</h2>
                    <p className="text-white/90 max-w-2xl mx-auto mb-8">
                        Le invitamos a una sesión de trabajo estratégica para identificar las oportunidades de mayor impacto y reducir su "Cost to Serve".
                    </p>
                    <Link href="/contact" className="inline-block bg-white text-sapimsa-crimson px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                        Solicitar Sesión Estratégica
                    </Link>
                </div>
            </div>
        </div>
    );
}
