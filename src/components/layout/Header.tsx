import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative h-16 w-auto aspect-[3/1]">
                                <Image
                                    src="/images/logo.png"
                                    alt="SAPIMSA Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </Link>
                    </div>

                    {/* Navigation - Desktop */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className="text-sapimsa-jet hover:text-sapimsa-crimson px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Inicio
                        </Link>
                        <Link href="/about" className="text-sapimsa-jet hover:text-sapimsa-crimson px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Quiénes Somos
                        </Link>
                        <Link href="/services" className="text-sapimsa-jet hover:text-sapimsa-crimson px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Servicios
                        </Link>

                        {/* Destacados Dropdown */}
                        <div className="relative group">
                            <button className="text-sapimsa-jet group-hover:text-sapimsa-crimson px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                                Destacados
                                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div className="absolute left-0 mt-0 w-56 bg-white rounded-md shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left border border-gray-100">
                                <Link href="/destacados/volta" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">VOLTA</span>
                                    <span className="text-xs text-gray-500 font-normal">El Salto Cuántico Energético</span>
                                </Link>
                                <Link href="/destacados/experience-studio" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">Experience Studio</span>
                                    <span className="text-xs text-gray-500 font-normal">Estrategia CX & SAP Fiori</span>
                                </Link>
                                <Link href="/destacados/capacidades" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">Capacidades</span>
                                    <span className="text-xs text-gray-500 font-normal">Cartera de Servicios Integral</span>
                                </Link>
                                <Link href="/destacados/data-intelligence" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">Data Intelligence</span>
                                    <span className="text-xs text-gray-500 font-normal">Estrategia AI & Cloud Platform</span>
                                </Link>
                                <Link href="/destacados/hiperautomatizacion" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">Hiperautomatización</span>
                                    <span className="text-xs text-gray-500 font-normal">RPA, IA & Case Management</span>
                                </Link>
                                <Link href="/destacados/clean-core" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson border-b border-gray-50">
                                    <span className="font-bold block">Clean Core Strategy</span>
                                    <span className="text-xs text-gray-500 font-normal">Transición S/4HANA</span>
                                </Link>
                                <Link href="/destacados/migracion-s4hana" className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-sapimsa-crimson">
                                    <span className="font-bold block">Migración S/4HANA</span>
                                    <span className="text-xs text-gray-500 font-normal">Guía de Alternativas & Cloud</span>
                                </Link>
                            </div>
                        </div>
                        <Link href="/contact" className="text-sapimsa-jet hover:text-sapimsa-crimson px-3 py-2 rounded-md text-sm font-medium transition-colors">
                            Contacto
                        </Link>
                    </nav>

                    {/* Mobile Menu Button (Placeholder) */}
                    <div className="flex items-center md:hidden">
                        <button type="button" className="text-sapimsa-jet hover:text-sapimsa-crimson p-2">
                            <span className="sr-only">Open menu</span>
                            {/* Hamburger Icon */}
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
