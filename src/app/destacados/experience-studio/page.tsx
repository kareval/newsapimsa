import Image from 'next/image';
import CallToAction from "@/components/common/CallToAction";

export default function ExperienceStudioPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/uploads/experience-hero.png"
                        alt="Lutech Experience Studio Abstract Art"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-teal-medium text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Destacados
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        Experience Studio
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        Transformando la Experiencia en un <span className="text-sapimsa-crimson font-bold">Activo Estratégico</span>.
                        <span className="block mt-2 text-lg md:text-xl text-gray-400">Donde el diseño se encuentra con el ROI.</span>
                    </p>
                </div>
            </div>

            {/* Vision Section: Myth vs Reality */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-4">
                            ¿Qué es (y qué no es) la CX Estratégica?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Desmitificamos la Experiencia de Cliente. No es estética, es negocio.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Myths */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border-l-4 border-gray-300">
                            <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center">
                                <span className="text-2xl mr-2">❌</span> Lo que NO es
                            </h3>
                            <ul className="space-y-4 text-gray-500">
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Hacer una interfaz simplemente "más bonita".
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Un gasto estético o accesorio.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Una filosofía abstracta sin impacto.
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-2">•</span> Soluciones genéricas "talla única".
                                </li>
                            </ul>
                        </div>
                        {/* Reality */}
                        <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-sapimsa-teal-medium transform md:-translate-y-4">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-6 flex items-center">
                                <span className="text-2xl mr-2">✅</span> Lo que SÍ es (Nuestra Visión)
                            </h3>
                            <ul className="space-y-4 text-gray-700 font-medium">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Optimización de procesos de negocio.
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Una inversión estratégica con ROI medible.
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Fuente de ahorro de costes y eficiencia.
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-sapimsa-teal-medium mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Soluciones a medida para desafíos únicos.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-12 text-center">
                        Nuestra Metodología: 4 Fases de Valor
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Entender", desc: "Investigación, benchmarks y análisis profundo de necesidades." },
                            { step: "02", title: "Diseñar", desc: "Design Thinking, prototipado y definición de la experiencia." },
                            { step: "03", title: "Construir", desc: "Desarrollo ágil, UI detallado y tests de usabilidad." },
                            { step: "04", title: "Mantener", desc: "Analítica, gestión del cambio y evolución continua." }
                        ].map((phase, index) => (
                            <div key={index} className="relative p-6 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow">
                                <span className="text-6xl font-black text-gray-100 absolute top-4 right-4 z-0">{phase.step}</span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-sapimsa-jet mb-2">{phase.title}</h3>
                                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SAP Fiori Section */}
            <div className="py-24 bg-sapimsa-jet text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/uploads/experience-process.png"
                        alt="Abstract Process Flow"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                {/* Overlay gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet via-sapimsa-jet/80 to-transparent z-0"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="lg:flex lg:items-center lg:space-x-16">
                        <div className="lg:w-1/2 mb-12 lg:mb-0">
                            <h2 className="text-3xl font-extrabold font-lutech mb-6">
                                Expertos en SAP Fiori
                            </h2>
                            <p className="text-gray-300 mb-6 text-lg">
                                Aplicamos los principios de CX al ecosistema empresarial más crítico. Transformamos transacciones complejas en experiencias intuitivas.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {["Basado en Roles", "Adaptable", "Sencillo (1-1-3)", "Coherente"].map((item, i) => (
                                    <div key={i} className="flex items-center bg-white/10 rounded-lg p-3">
                                        <svg className="w-5 h-5 text-sapimsa-teal-light mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span className="font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white text-sapimsa-jet rounded-xl p-8 shadow-2xl">
                                <h3 className="text-xl font-bold mb-4">Opciones de Implementación</h3>
                                <ul className="space-y-4">
                                    <li className="border-b border-gray-100 pb-2">
                                        <span className="font-bold text-sapimsa-crimson">1. Configuración</span>
                                        <p className="text-sm text-gray-600">Acceso unificado vía Fiori Launchpad.</p>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <span className="font-bold text-sapimsa-crimson">2. Apps Estándar</span>
                                        <p className="text-sm text-gray-600">Activar soluciones nativas de la librería SAP.</p>
                                    </li>
                                    <li className="border-b border-gray-100 pb-2">
                                        <span className="font-bold text-sapimsa-crimson">3. Extensión</span>
                                        <p className="text-sm text-gray-600">Personalizar apps existentes (ocultar campos, lógica).</p>
                                    </li>
                                    <li>
                                        <span className="font-bold text-sapimsa-crimson">4. A Medida</span>
                                        <p className="text-sm text-gray-600">Desarrollo custom para procesos únicos.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ROI & Quick Wins */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-12 text-center">
                        ROI Tangible: El Valor de la Eficiencia
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-sapimsa-crimson font-black text-4xl mb-2">73h</div>
                            <h4 className="font-bold text-lg mb-2">Ahorro Anual por -1 Clic</h4>
                            <p className="text-gray-600 text-sm">
                                Eliminar un solo clic en un proceso de 100 transacciones diarias para 12 personas ahorra 73 horas de trabajo al año.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-sapimsa-teal-medium font-black text-4xl mb-2">14h</div>
                            <h4 className="font-bold text-lg mb-2">Ahorro por Respuesta Binaria</h4>
                            <p className="text-gray-600 text-sm">
                                Simplificar elecciones múltiples a Sí/No en entornos de producción reduce errores y ahorra tiempo crítico.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="text-sapimsa-purple-medium font-black text-4xl mb-2">+28%</div>
                            <h4 className="font-bold text-lg mb-2">Eficiencia por Menos Ruido</h4>
                            <p className="text-gray-600 text-sm">
                                Ocultar campos irrelevantes reduce el tiempo de permanencia en pantalla de 7s a 3s.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Clients Strip */}
            <div className="py-16 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-500 uppercase tracking-widest font-bold text-sm mb-8">Confían en Lutech Experience Studio</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Text Logos for now as we don't have SVGs for all */}
                        <span className="text-xl font-bold text-gray-800">Stellantis</span>
                        <span className="text-xl font-bold text-gray-800">Lamborghini</span>
                        <span className="text-xl font-bold text-gray-800">Ferragamo</span>
                        <span className="text-xl font-bold text-gray-800">Technogym</span>
                        <span className="text-xl font-bold text-gray-800">A2A</span>
                        <span className="text-xl font-bold text-gray-800">Enel</span>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
