import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contacto | SAPIMSA Grupo Lutech",
    description: "Hablemos sobre su próximo proyecto de transformación. Contacte con nuestros expertos en SAP y tecnología para una evaluación personalizada.",
};

export default function ContactPage() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <div className="relative bg-sapimsa-jet py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/images/uploads/abstract-waves.png"
                        alt="Contacto"
                        fill
                        className="object-cover object-center"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-sapimsa-jet/90 via-sapimsa-jet/60 to-transparent"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white font-lutech tracking-tight">
                        Contacto
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl">
                        Estamos aquí para ayudarte. Cuéntanos tu proyecto.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-bold text-sapimsa-jet mb-6">Ponte en contacto con nosotros</h2>
                        <p className="text-lg text-gray-600 mb-8">
                            ¿Tienes alguna pregunta o quieres saber más sobre cómo podemos ayudarte? Rellena el formulario y nos pondremos en contacto contigo lo antes posible.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-sapimsa-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>C/ Alcalá, 490, 3ª planta.</p>
                                    <p>28027 – Madrid. España</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-sapimsa-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>info@sapimsa.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <svg className="h-6 w-6 text-sapimsa-crimson" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="ml-3 text-base text-gray-500">
                                    <p>91 375 07 45</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                                <input type="text" name="name" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sapimsa-crimson focus:ring-sapimsa-crimson sm:text-sm p-2 border" placeholder="Tu nombre" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sapimsa-crimson focus:ring-sapimsa-crimson sm:text-sm p-2 border" placeholder="tu@email.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Mensaje</label>
                                <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sapimsa-crimson focus:ring-sapimsa-crimson sm:text-sm p-2 border" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sapimsa-crimson hover:bg-sapimsa-crimson-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sapimsa-crimson transition-colors">
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
