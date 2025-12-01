import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
    return (
        <div className="relative bg-sapimsa-jet overflow-hidden min-h-[80vh] flex items-center">
            {/* Background Video - Covers 80% of the width from the right */}
            <div className="absolute top-0 right-0 w-[80%] h-full z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                >
                    <source src="/videos/hero-background.mov" type="video/mp4" />
                    <source src="/videos/hero-background.mov" type="video/quicktime" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay - Gradient from solid color to transparent, lighter opacity */}
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet via-sapimsa-jet/40 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
                <div className="sm:text-center lg:text-left lg:max-w-2xl">
                    <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl mb-6">
                        <span className="block xl:inline">Soluciones integrales para</span>{' '}
                        <span className="block text-sapimsa-crimson xl:inline">la transformación empresarial</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-200 sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0 font-light leading-relaxed">
                        Comprometidos con la calidad y la innovación. Ofrecemos servicios especializados adaptados a las necesidades de cada cliente, garantizando eficiencia y resultados.
                    </p>
                    <div className="mt-8 sm:mt-10 sm:flex sm:justify-center lg:justify-start gap-4">
                        <div className="rounded-md shadow">
                            <Link
                                href="/contact"
                                className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-md text-white bg-sapimsa-crimson hover:bg-sapimsa-crimson-dark transition-all transform hover:scale-105"
                            >
                                Contáctanos
                            </Link>
                        </div>
                        <div className="mt-3 sm:mt-0">
                            <Link
                                href="/services"
                                className="w-full flex items-center justify-center px-8 py-4 border-2 border-white text-lg font-bold rounded-md text-white hover:bg-white hover:text-sapimsa-jet transition-all transform hover:scale-105"
                            >
                                Nuestros Servicios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
