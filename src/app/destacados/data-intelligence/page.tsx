import Image from 'next/image';
import CallToAction from "@/components/common/CallToAction";

export default function DataIntelligencePage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative h-[80vh] min-h-[600px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/uploads/data-ai-hero.jpg"
                        alt="Data Intelligence & AI"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-bold tracking-wide uppercase mb-6 w-fit">
                        Informe Estratégico
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-8 drop-shadow-lg">
                        Hacia una Organización <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapimsa-teal-light to-sapimsa-purple-light">Impulsada por Datos</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 max-w-2xl font-light leading-relaxed drop-shadow-md">
                        Transformando la información en el activo más valioso.
                        <span className="block mt-2 text-lg text-gray-300 font-normal">Estrategia Cloud, DataOps e Inteligencia Artificial.</span>
                    </p>
                </div>
            </div>

            {/* The Strategic Imperative */}
            <div className="py-24 bg-white relative overflow-hidden">
                {/* Background Abstract Image */}
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <Image
                        src="/images/uploads/data-imperative.png"
                        alt=""
                        fill
                        className="object-cover object-left"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="md:flex md:items-center md:gap-16">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-6 leading-tight">
                                El Imperativo Estratégico
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                En la era digital, la capacidad de competir depende del dominio sobre los datos.
                                <span className="block mt-4 font-semibold text-sapimsa-teal-medium">La IA ya no es una ventaja, es un requisito de supervivencia.</span>
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sapimsa-teal-medium mt-1"></div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-sapimsa-jet">Analítica de Datos</h3>
                                        <p className="text-gray-500">El arte de descubrir valor oculto y pasar de la intuición a la certeza.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-sapimsa-purple-medium mt-1"></div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-sapimsa-jet">Inteligencia Artificial</h3>
                                        <p className="text-gray-500">El motor de optimización que libera el potencial creativo humano.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="/images/uploads/data-imperative.png"
                                    alt="Strategic Imperative Abstract"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Vision: Architecture */}
            <div className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-4">Visión Arquitectónica</h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">Los pilares tecnológicos para la agilidad y la innovación.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card 1 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/uploads/data-architecture.png"
                                    alt="Data Lakehouse"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-sapimsa-teal-medium/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">Data Lakehouse</h3>
                                <p className="text-gray-600">
                                    Lo mejor de dos mundos: flexibilidad del Data Lake + estructura del Data Warehouse. Elimina silos y unifica la analítica.
                                </p>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/uploads/data-architecture.png"
                                    alt="Data Mesh"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: 'center right' }}
                                />
                                <div className="absolute inset-0 bg-sapimsa-purple-medium/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">Data Mesh</h3>
                                <p className="text-gray-600">
                                    Descentralización estratégica. "Data as a Product". Cada dominio es dueño de sus datos, fomentando agilidad.
                                </p>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
                            <div className="h-48 relative overflow-hidden">
                                <Image
                                    src="/images/uploads/data-architecture.png"
                                    alt="DataOps"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    style={{ objectPosition: 'bottom center' }}
                                />
                                <div className="absolute inset-0 bg-sapimsa-crimson/20 group-hover:bg-transparent transition-colors duration-300"></div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-3">DataOps</h3>
                                <p className="text-gray-600">
                                    Metodología ágil para el ciclo de vida del dato. Automatización, integración y entrega continua de datos fiables.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology: Cloud Data Journey */}
            <div className="py-24 bg-white relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-5">
                    <Image
                        src="/images/uploads/data-journey.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="md:flex md:items-center md:gap-16">
                        <div className="md:w-1/2 order-2 md:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                                <Image
                                    src="/images/uploads/data-journey.png"
                                    alt="Cloud Data Journey Flow"
                                    width={800}
                                    height={800}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="md:w-1/2 order-1 md:order-2 mb-12 md:mb-0">
                            <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-8">
                                Cloud Data Journey
                            </h2>
                            <div className="space-y-8">
                                {['Estrategia', 'Evaluación', 'Análisis y Diseño', 'Ejecución', 'Gestión'].map((step, i) => (
                                    <div key={i} className="flex items-center group">
                                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-sapimsa-teal-medium text-sapimsa-teal-medium flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-sapimsa-teal-medium group-hover:text-white transition-colors duration-300">
                                            {i + 1}
                                        </div>
                                        <div className="ml-6">
                                            <h4 className="text-xl font-bold text-sapimsa-jet group-hover:text-sapimsa-teal-medium transition-colors duration-300">{step}</h4>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-100">
                                <h3 className="text-lg font-bold text-sapimsa-jet mb-2">AI Factory Blueprint</h3>
                                <p className="text-gray-600 text-sm">
                                    Industrializamos la Inteligencia Artificial. Pasamos de proyectos artesanales a una producción escalable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technology Showcase: SAP Analytics Cloud */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5">
                        <Image
                            src="/images/uploads/sap-analytics-dashboard.png"
                            alt="SAP Analytics Cloud Dashboard"
                            width={1920}
                            height={1080}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8 md:p-12">
                            <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Visualización en Tiempo Real</h3>
                            <p className="text-gray-200 text-lg">Potenciado por SAP Analytics Cloud</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact & Success Cases */}
            <div className="py-24 bg-sapimsa-jet relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/uploads/data-impact.png"
                        alt=""
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-sapimsa-jet via-sapimsa-jet/90 to-sapimsa-jet/80"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl font-extrabold text-white font-lutech mb-16 text-center">Impacto Real</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="text-5xl font-bold text-sapimsa-teal-light mb-4">-12%</div>
                            <p className="text-lg text-white font-bold mb-2">Costes Operativos</p>
                            <p className="text-sm text-gray-400">Optimización con Digital Twins.</p>
                        </div>
                        <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="text-5xl font-bold text-sapimsa-purple-light mb-4">x10</div>
                            <p className="text-lg text-white font-bold mb-2">Eficacia Detección</p>
                            <p className="text-sm text-gray-400">Computer Vision en producción.</p>
                        </div>
                        <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="text-5xl font-bold text-sapimsa-crimson mb-4">-90%</div>
                            <p className="text-lg text-white font-bold mb-2">Tiempo Comercial</p>
                            <p className="text-sm text-gray-400">Generación de contenido con GenAI.</p>
                        </div>
                        <div className="p-8 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300">
                            <div className="text-5xl font-bold text-blue-400 mb-4">-35%</div>
                            <p className="text-lg text-white font-bold mb-2">Búsqueda Info</p>
                            <p className="text-sm text-gray-400">Chatbots corporativos inteligentes.</p>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
