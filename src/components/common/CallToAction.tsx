import Link from 'next/link';
import Image from 'next/image';

export default function CallToAction() {
    return (
        <div className="relative bg-sapimsa-crimson overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/uploads/abstract-waves.png"
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-30 mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-sapimsa-crimson/80 mix-blend-multiply" />
            </div>
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">¿Listo para transformar tu negocio?</span>
                    <span className="block text-sapimsa-yellow-light">Inicia tu viaje con SAPIMSA hoy.</span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sapimsa-crimson bg-white hover:bg-gray-50 transition-colors">
                            Hablemos
                        </Link>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <Link href="/services" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sapimsa-crimson-dark hover:bg-sapimsa-crimson-medium transition-colors">
                            Ver Servicios
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
