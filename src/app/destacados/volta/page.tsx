import Image from 'next/image';
import CallToAction from "@/components/common/CallToAction";

export default function VoltaPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-30">
                    <Image
                        src="/images/uploads/neon-tech.jpg"
                        alt="Volta Energy"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet via-sapimsa-jet/80 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-crimson text-white text-sm font-bold tracking-wide uppercase mb-4">
                        Destacados
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-6">
                        VOLTA
                    </h1>
                    <p className="text-2xl md:text-3xl text-gray-200 max-w-3xl font-light leading-relaxed">
                        El Salto Cuántico de las Energéticas.
                        <span className="block mt-2 font-bold text-white">¿Optimizar la vela o inventar la batería?</span>
                    </p>
                </div>
            </div>

            {/* The Context: 3 Pressures */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-4">
                            Una Necesidad de Supervivencia
                        </h2>
                        <p className="text-xl text-gray-600">
                            El sector energético se enfrenta a tres presiones críticas que hacen que la reinvención ya no sea una opción, sino una obligación.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Pressure 1 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sapimsa-crimson">
                            <div className="h-12 w-12 bg-sapimsa-crimson/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-sapimsa-crimson" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Competencia Feroz</h3>
                            <p className="text-gray-600">
                                Un mercado convertido en campo de batalla de ofertas y contraofertas. La agilidad para reaccionar es el arma principal, pero los sistemas actuales son transatlánticos lentos.
                            </p>
                        </div>
                        {/* Pressure 2 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sapimsa-teal-medium">
                            <div className="h-12 w-12 bg-sapimsa-teal-medium/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-sapimsa-teal-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">Tsunami de Datos</h3>
                            <p className="text-gray-600">
                                Los contadores inteligentes generan un volumen de información por hora que antes se recibía en un mes. Los sistemas legacy se ahogan intentando procesarlo.
                            </p>
                        </div>
                        {/* Pressure 3 */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-sapimsa-purple-medium">
                            <div className="h-12 w-12 bg-sapimsa-purple-medium/10 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-sapimsa-purple-medium" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                            </div>
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-3">El Nuevo Cliente</h3>
                            <p className="text-gray-600">
                                Ya no compra solo energía (commodity). Quiere un ecosistema de servicios (luz, gas, coche eléctrico, fibra) en una sola factura convergente.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Solution: VOLTA */}
            <div className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-sapimsa-jet font-lutech mb-6">
                                VOLTA: El Framework de Aceleración
                            </h2>
                            <p className="text-lg text-gray-600 mb-6">
                                No es un "arranca y reemplaza". Es una filosofía de orquestación. VOLTA reúne a las mejores plataformas del mercado para que trabajen como un solo equipo ("Dream Team").
                            </p>

                            <ul className="space-y-6 mt-8">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                                        <span className="text-blue-600 font-bold text-sm">1</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-sapimsa-jet">SAP S/4HANA for Utilities</h4>
                                        <p className="text-gray-500">La roca sobre la que se construye el negocio. Potencia y robustez para el Back Office.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                                        <span className="text-blue-600 font-bold text-sm">2</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-sapimsa-jet">Salesforce</h4>
                                        <p className="text-gray-500">Líder indiscutible en agilidad comercial y visión del cliente.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                                        <span className="text-blue-600 font-bold text-sm">3</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-sapimsa-jet">SAP BRIM</h4>
                                        <p className="text-gray-500">El motor diseñado para la economía de la suscripción y facturación convergente.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                                        <span className="text-blue-600 font-bold text-sm">4</span>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-bold text-sapimsa-jet">MuleSoft</h4>
                                        <p className="text-gray-500">La capa de integración universal. El pegamento inteligente que conecta todo.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-12 lg:mt-0 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-crimson to-sapimsa-purple-dark rounded-2xl transform rotate-3 opacity-20"></div>
                            <div className="relative bg-gray-900 rounded-2xl p-8 shadow-2xl text-white">
                                <h3 className="text-2xl font-bold mb-6 border-b border-gray-700 pb-4">Aceleradores de Negocio</h3>
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-xl font-bold text-sapimsa-crimson mb-2">Motor de Cálculo "Brick"</h4>
                                        <p className="text-gray-300 text-sm">
                                            Convierte ofertas de marketing en "ladrillos" de facturación SAP automáticamente.
                                            <br />
                                            <span className="text-white font-semibold">Impacto:</span> Time-to-Market de trimestres a días.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-sapimsa-teal-medium mb-2">e-MRM (Meter Reading)</h4>
                                        <p className="text-gray-300 text-sm">
                                            Gestión inteligente de lecturas. Adquisición, validación y estimación.
                                            <br />
                                            <span className="text-white font-semibold">Impacto:</span> Convierte el caos de datos en inteligencia.
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-sapimsa-purple-medium mb-2">Financial & Credit</h4>
                                        <p className="text-gray-300 text-sm">
                                            Automatización de cobros, gestión de impagos y panel de riesgo en tiempo real.
                                            <br />
                                            <span className="text-white font-semibold">Impacto:</span> Reducción de costes y mejora del flujo de caja.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Vision: 360 Real */}
            <div className="py-24 bg-sapimsa-jet text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold font-lutech mb-8">
                        Visión 360° Real: Rompiendo los Silos
                    </h2>
                    <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
                        Imagine a un agente viendo en una sola pantalla el contrato (CRM) y el consumo en tiempo real (SAP). Sin cambiar de sistema. Sin esperas.
                    </p>
                    <div className="inline-block p-1 rounded-xl bg-gradient-to-r from-sapimsa-crimson to-sapimsa-purple-dark">
                        <div className="bg-gray-900 rounded-lg px-8 py-4">
                            <span className="text-2xl font-bold">De vender commodities a gestionar relaciones</span>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
