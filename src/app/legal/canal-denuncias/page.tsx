export default function WhistleblowingPage() {
    return (
        <div className="prose prose-sapimsa max-w-none">
            <h1>Canal de Denuncias</h1>

            <p className="lead">
                SAPIMSA ha implantado un Sistema Interno de Información conforme a lo dispuesto en la Ley 2/2023, de 20 de febrero, reguladora de la protección de las personas que informen sobre infracciones normativas y de lucha contra la corrupción, conocida comúnmente como Ley Whistleblowing.
            </p>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 my-8 shadow-sm">
                <h3 className="text-sapimsa-jet mt-0">Acceso al Canal</h3>
                <p>
                    El canal de denuncias de SAPIMSA es accesible a través de la web <a href="https://sapimsa.trusty.report" target="_blank" rel="noopener noreferrer" className="font-bold text-sapimsa-crimson">https://sapimsa.trusty.report</a> facilitando su uso a empleados, agentes comerciales, directivos, socios de negocio, y de cualquier interesado.
                </p>
                <div className="mt-6 text-center">
                    <a href="https://sapimsa.trusty.report/" target="_blank" rel="noopener noreferrer" className="inline-block bg-sapimsa-crimson text-white px-8 py-4 rounded-lg font-bold hover:bg-sapimsa-crimson-dark transition-all transform hover:scale-105 shadow-md no-underline">
                        Acceso a canal de denuncias
                    </a>
                </div>
            </div>

            <h3>Seguridad y Privacidad</h3>
            <p>
                Comunicamos que la información estará alojada un servidor virtual en Alemania, en un centro de datos de alta seguridad, certificado según la norma ISO 27001 y proporcionado por Hetzner Online GmbH. Los datos no se transfieren a ningún tercer país y permanecen encriptados en la UE de acuerdo con los requisitos del RGPD.
            </p>
            <p>
                En cumplimiento del art. 13 del Reglamento (UE) 2016/679 General de Protección de Datos, le informamos de que SAPIM, S.A. tratará sus datos personales con la finalidad de gestión de la entrada de solicitudes, escritos y comunicaciones. Puede ejercer sus derechos en materia de protección de datos en <a href="mailto:seguridad@sapimsa.com">seguridad@sapimsa.com</a>. Puede obtener información adicional sobre el tratamiento de sus datos en nuestra política de privacidad publicada en <a href="/legal/proteccion-datos">Política de protección de datos</a>.
            </p>

            <h3>Funcionamiento del Canal</h3>
            <p>
                El presente canal de información es un mecanismo de comunicación de cualquier sospecha, o constancia, de la comisión de una irregularidad en SAPIMSA.
            </p>
            <p>
                Se dispone de una guía rápida para denunciantes: <a href="https://www.sapimsa.es/wp-content/uploads/2024/01/Guia-rapida-para-denunciantes.pdf" target="_blank" rel="noopener noreferrer" className="font-semibold text-sapimsa-teal-medium">Guía rápida denunciantes (PDF)</a>
            </p>

            <h4>Derechos y Garantías</h4>
            <p>
                Usted tiene derecho a presentar la comunicación identificándose o de forma anónima. El formulario de comunicación de potenciales irregularidades le dará la posibilidad de seleccionar la opción que considere oportuna. Independientemente de la opción seleccionada, todas las comunicaciones se tratarán bajo la más estricta confidencialidad y serán accedidas por el personal mínimo imprescindible.
            </p>
            <p>
                Una vez presentada la comunicación, se generará un código de acceso que podrá utilizar para estar informado sobre el estado de tramitación de su comunicación en cualquier momento. Además, podrá utilizarlo para mantener las comunicaciones necesarias con el Responsable del Sistema de Información.
            </p>
            <p>
                <strong>Tolerancia Cero:</strong> SAPIMSA tiene una posición de tolerancia cero ante la comisión de irregularidades, comprometiéndose formalmente a no tomar ningún tipo de represalia, amenaza de represalia o tentativa de represalia, contra informantes de buena fe.
            </p>

            <h3>Reunión Presencial</h3>
            <p>
                Le informamos de que, además del presente mecanismo de comunicación, tiene derecho a presentar la comunicación de manera presencial. Para ello debe solicitar al Responsable del Sistema Interno de Información de SAPIMSA una reunión presencial a través de la misma herramienta. El Responsable del Sistema Interno de Información se pondrá en contacto con usted con la finalidad de indicarle la fecha, hora y lugar de la reunión presencial, que tendrá lugar en el plazo máximo de 7 días desde su solicitud.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
                <h3>Protocolo Completo</h3>
                <p>
                    Si desea consultar nuestro protocolo completo de gestión del tratamiento, puede acceder al siguiente enlace:
                </p>
                <a href="/legal/protocolo-denuncias" className="flex items-center gap-2 text-sapimsa-jet font-bold hover:text-sapimsa-crimson transition-colors no-underline group">
                    <svg className="w-6 h-6 text-sapimsa-crimson group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Protocolo de gestión del tratamiento
                </a>
            </div>
        </div>
    );
}
