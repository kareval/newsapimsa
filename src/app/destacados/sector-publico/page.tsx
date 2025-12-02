import Image from 'next/image';
import Link from 'next/link';
import CallToAction from "@/components/common/CallToAction";

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sector Público & Transformación Digital | SAPIMSA Grupo Lutech",
    description: "Soluciones SAP para la Administración Pública. Gestión de RRHH, Finanzas y Cumplimiento Normativo (IGAE) con más de 30 años de experiencia.",
};

export default function PublicSectorPage() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="relative bg-sapimsa-jet py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/uploads/public-sector-hero.png"
                        alt="Transformación Digital Sector Público"
                        fill
                        className="object-cover object-center opacity-60"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-bold tracking-wide uppercase mb-6">
                        Sector Público
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white font-lutech tracking-tight leading-tight mb-8 drop-shadow-lg">
                        Transformación Digital <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sapimsa-teal-light">en la Administración</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light leading-relaxed mb-12">
                        Navegando la complejidad administrativa con soluciones SAP desde 1990.
                        <span className="block mt-2 font-normal text-white">Más de 170 clientes en 10 países confían en nuestra experiencia.</span>
                    </p>
                </div>
            </div>

            {/* The Strategic Metaphor */}
            <div className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="md:flex md:items-center md:gap-16">
                        <div className="md:w-1/2 mb-12 md:mb-0">
                            <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-6 leading-tight">
                                El Arte de Navegar un <br />
                                <span className="text-sapimsa-crimson">Barco de Gran Calado</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Gestionar una entidad pública es como capitanear un buque transatlántico. No basta con conocer la teoría de la navegación; se requiere un conocimiento profundo de las "cartas marítimas locales" (normativa específica) y la pericia para realizar transiciones de motor en alta mar sin detener la misión.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mt-1">1</span>
                                    <span className="ml-3 text-gray-700"><strong>Navegación Experta:</strong> Dominio de los módulos estándar SAP.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mt-1">2</span>
                                    <span className="ml-3 text-gray-700"><strong>Cartas Locales:</strong> Adaptación total a la normativa española (IGAE, HR-PSe).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mt-1">3</span>
                                    <span className="ml-3 text-gray-700"><strong>Transición Segura:</strong> Experiencia probada en migraciones críticas.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                                <h3 className="text-2xl font-bold text-sapimsa-jet mb-6">Módulos Clave (El Motor)</h3>
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="font-bold text-blue-600 mb-2">Recursos Humanos (HCM)</h4>
                                        <p className="text-sm text-gray-600">Nómina (PY), Administración (PA), Estructura (PD), Tiempos (PT) y <strong>Sector Público Español (HR-PSe)</strong>.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-teal-medium mb-2">Financiero y Presupuestario</h4>
                                        <p className="text-sm text-gray-600">Finanzas (FI), Costes (CO), Viajes (TV) y <strong>Presupuestaria (FI-IS-PSe)</strong>.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-sapimsa-purple-medium mb-2">Logística y Proyectos</h4>
                                        <p className="text-sm text-gray-600">Compras (MM), Ventas (SD), Gestión de Proyectos (PS).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Modules Visualization */}
            <div className="py-24 bg-white relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-4">Arquitectura Integral</h2>
                        <p className="text-xl text-gray-500 max-w-3xl mx-auto">Una base sólida para la gestión pública moderna.</p>
                    </div>

                    <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <Image
                            src="/images/uploads/public-sector-modules.png"
                            alt="Módulos SAP Interconectados"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">Transversalidad</h3>
                            <p className="text-gray-600 text-sm">Integración nativa con BW (Business Warehouse) y Portal del Empleado (ESS).</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">Soporte</h3>
                            <p className="text-gray-600 text-sm">Administración de Sistemas y Reporting avanzado para la toma de decisiones.</p>
                        </div>
                        <div className="p-6 bg-gray-50 rounded-xl">
                            <h3 className="text-xl font-bold text-sapimsa-jet mb-2">Seguridad</h3>
                            <p className="text-gray-600 text-sm">Cumplimiento estricto de normativas de seguridad y protección de datos.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Specialized Functionalities */}
            <div className="py-24 bg-sapimsa-jet text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/images/uploads/public-sector-functionality.png"
                        alt="Funcionalidad Específica Sector Público"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-sapimsa-jet/90 via-sapimsa-jet/80 to-sapimsa-jet/90"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <h2 className="text-4xl font-extrabold font-lutech mb-16 text-center">Funcionalidad Específica</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 font-bold text-xl">1</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Gestión de Personal</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Aplicativos específicos para la gestión de <strong>Guardias, Licencias, Vacaciones y Ausencias</strong>. Registro de incapacidades transitorias integrado totalmente con el módulo de nómina.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 font-bold text-xl">2</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Modelo Único</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Despliegue de modelos de gestión estandarizados a nivel nacional, unificando procesos y formularios administrativos para mayor eficiencia.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 font-bold text-xl">3</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Integración Normativa</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Implementación de <strong>Nómina Electrónica y Firma Digital</strong> para la IGAE. Adaptación de formatos de firma electrónica en procesos económicos críticos.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-6">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 font-bold text-xl">4</div>
                            <div>
                                <h3 className="text-2xl font-bold mb-3">Cuerpos Funcionariales</h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Gestión avanzada de Estructura Orgánica, Puestos de Trabajo, Vacantes, Escalafón y sistemas de Calificación del Personal (IPECGUCI).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Migration Experience */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                        <div className="mb-12 lg:mb-0">
                            <span className="inline-block py-1 px-3 rounded-full bg-sapimsa-crimson/10 text-sapimsa-crimson text-sm font-bold tracking-wide uppercase mb-4">
                                Experiencia en Migración
                            </span>
                            <h2 className="text-4xl font-extrabold text-sapimsa-jet font-lutech mb-6">
                                Del Legacy al Futuro
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Nuestra experiencia en migraciones complejas (R/3 a ERP 6.0) en entornos críticos es la garantía para abordar el tránsito hacia <strong>SAP S/4HANA</strong>.
                            </p>

                            <div className="space-y-6">
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-sapimsa-jet mb-2">Entidad de Administración Central</h4>
                                    <p className="text-sm text-gray-600">
                                        Actualización de entornos complejos de gestión de personal y presupuestaria. Cambio de versión exitoso en sistemas de alto volumen.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                                    <h4 className="font-bold text-sapimsa-jet mb-2">Organismo de Investigación y Desarrollo</h4>
                                    <p className="text-sm text-gray-600">
                                        Proyecto de Reimplantación y Reingeniería de Procesos. Rediseño de arquitectura, adaptación de portales y gestión de proyectos (PS).
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                            {/* Placeholder for public_sector_migration */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                                <span className="text-gray-400 font-bold text-lg">Visualización de Migración</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <CallToAction />
        </div>
    );
}
