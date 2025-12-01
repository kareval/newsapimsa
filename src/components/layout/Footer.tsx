import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-sapimsa-jet text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="relative h-10 w-10">
                            <Image
                                src="/images/isotipo.png"
                                alt="SAPIMSA Isotipo"
                                fill
                                className="object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-sapimsa-grey-medium text-sm">
                            Soluciones integrales para la transformación empresarial. Calidad y compromiso en cada proyecto.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-sapimsa-crimson">Enlaces Rápidos</h3>
                        <ul className="space-y-2 text-sm text-sapimsa-grey-light">
                            <li><a href="/" className="hover:text-white transition-colors">Inicio</a></li>
                            <li><a href="/about" className="hover:text-white transition-colors">Quiénes Somos</a></li>
                            <li><a href="/services" className="hover:text-white transition-colors">Servicios</a></li>
                            <li><a href="/contact" className="hover:text-white transition-colors">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-sapimsa-crimson">Contacto</h3>
                        <ul className="space-y-2 text-sm text-sapimsa-grey-light">
                            <li>
                                <a href="mailto:info@sapimsa.com" className="hover:text-white transition-colors">info@sapimsa.com</a>
                            </li>
                            <li>
                                <a href="tel:+34913750745" className="hover:text-white transition-colors">91 375 07 45</a>
                            </li>
                            <li>
                                C/ Alcalá, 490, 3ª planta.<br />
                                28027 – Madrid. España
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-sapimsa-grey-dark pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-sapimsa-grey-medium">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/legal/aviso-legal" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="/legal/politica-privacidad" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="/legal/politica-cookies" className="hover:text-white transition-colors">Política de Cookies</a>
                        <a href="/legal/canal-denuncias" className="hover:text-white transition-colors">Canal de Denuncias</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} SAPIMSA. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
