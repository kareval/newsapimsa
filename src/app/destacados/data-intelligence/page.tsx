import Image from 'next/image';
import CallToAction from "@/components/common/CallToAction";

export default function DataIntelligencePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-gray-900 py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-50">
                    <Image
                        src="/images/uploads/data-ai-hero.jpg"
                        alt="Data Intelligence & AI"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-teal-medium text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Informe Estratégico
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        Hacia una Organización <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapimsa-teal-light to-sapimsa-purple-light">Impulsada por Datos</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
                        Transformando la información en el activo más valioso.
                        <span className="block mt-2 text-lg text-gray-400">Estrategia Cloud, DataOps e Inteligencia Artificial.</span>
                    </p>
                </div>
            </div>

            {/* The Strategic Imperative */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-4">
                            El Imperativo Estratégico
                        </h2>
                        <p className="text-xl text-gray-600">
                            En la era digital, la capacidad de competir depende del dominio sobre los datos.
                            La IA ya no es una ventaja, es un requisito de supervivencia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-sapimsa-teal-medium">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Analítica de Datos</h3>
                            <p className="text-gray-600">
                                El arte de descubrir valor oculto. Pasar de la intuición a la certeza basada en evidencia empírica.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-sapimsa-purple-medium">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Inteligencia Artificial</h3>
                            <p className="text-gray-600">
                                El motor de optimización. Automatiza lo complejo y libera el potencial creativo humano.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-sapimsa-crimson">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Plataforma Cloud</h3>
                            <p className="text-gray-600">
                                El sistema nervioso central. Un ecosistema integrado para ingerir, gobernar y servir datos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Vision: Architecture */}
            <div className="py-24 bg-sapimsa-jet text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="mb-12">
                        <h2 className="text-3xl font-extrabold font-lutech mb-4">Visión Arquitectónica</h2>
                        <p className="text-gray-400 max-w-2xl">Los pilares tecnológicos para la agilidad y la innovación.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div>
                            <div className="text-sapimsa-teal-light mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Lakehouse</h3>
                            <p className="text-gray-400 text-sm">
                                Lo mejor de dos mundos: flexibilidad del Data Lake + estructura del Data Warehouse. Elimina silos y unifica la analítica.
                            </p>
                        </div>
                        <div>
                            <div className="text-sapimsa-purple-light mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Mesh</h3>
                            <p className="text-gray-400 text-sm">
                                Descentralización estratégica. "Data as a Product". Cada dominio es dueño de sus datos, fomentando agilidad y escalabilidad.
                            </p>
                        </div>
                        <div>
                            <div className="text-sapimsa-crimson mb-4">
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">DataOps</h3>
                            <p className="text-gray-400 text-sm">
                                Metodología ágil para el ciclo de vida del dato. Automatización, integración y entrega continua de datos fiables.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology: Cloud Data Journey */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-12 text-center">
                        Cloud Data Journey
                    </h2>
                    <div className="relative">
                        {/* Line connecting steps (desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2 z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                            {['Estrategia', 'Evaluación', 'Análisis y Diseño', 'Ejecución', 'Gestión'].map((step, i) => (
                                <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
                                    <div className="w-8 h-8 rounded-full bg-sapimsa-jet text-white flex items-center justify-center font-bold mx-auto mb-4 text-sm">
                                        {i + 1}
                                    </div>
                                    <h4 className="font-bold text-sapimsa-jet text-sm">{step}</h4>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                        <h3 className="text-xl font-bold text-sapimsa-jet mb-6">AI Factory Blueprint</h3>
                        <p className="text-gray-600 mb-6">
                            Industrializamos la Inteligencia Artificial. Pasamos de proyectos artesanales a una producción escalable y repetible.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Business Idea', 'Data Understanding', 'Data Engineering', 'Model Engineering', 'Model Evaluation', 'Deployment', 'Monitoring'].map((tag, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-100">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Success Cases */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-12">Impacto Real</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-sapimsa-teal-medium mb-2">-12%</div>
                            <p className="text-sm text-gray-600 font-bold">Costes Operativos</p>
                            <p className="text-xs text-gray-500 mt-2">Optimización con Digital Twins.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-sapimsa-purple-medium mb-2">x10</div>
                            <p className="text-sm text-gray-600 font-bold">Eficacia Detección</p>
                            <p className="text-xs text-gray-500 mt-2">Computer Vision en producción.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-sapimsa-crimson mb-2">-90%</div>
                            <p className="text-sm text-gray-600 font-bold">Tiempo Comercial</p>
                            <p className="text-xs text-gray-500 mt-2">Generación de contenido con GenAI.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-lg">
                            <div className="text-4xl font-bold text-blue-600 mb-2">-35%</div>
                            <p className="text-sm text-gray-600 font-bold">Búsqueda Info</p>
                            <p className="text-xs text-gray-500 mt-2">Chatbots corporativos inteligentes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
