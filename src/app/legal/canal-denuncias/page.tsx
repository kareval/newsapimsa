export default function WhistleblowingPage() {
    return (
        <>
            <h1>Canal de Denuncias</h1>
            <p>
                SAPIMSA ha implantado un Sistema Interno de Información conforme a la Ley 2/2023, reguladora de la protección de las personas que informen sobre infracciones normativas y de lucha contra la corrupción.
            </p>
            <p>
                Este canal permite comunicar informaciones sobre infracciones previstas en dicha Ley de manera confidencial y segura.
            </p>

            <h2>Presentación de denuncias</h2>
            <p>
                Le informamos de que, además del presente mecanismo de comunicación, tiene derecho a presentar la comunicación de manera presencial. Para ello debe solicitar al Responsable del Sistema Interno de Información de SAPIMSA una reunión presencial a través de la misma herramienta.
            </p>
            <p>
                El Responsable del Sistema Interno de Información se pondrá en contacto con usted con la finalidad de indicarle la fecha, hora y lugar de la reunión presencial, que tendrá lugar en el plazo máximo de 7 días desde su solicitud.
            </p>

            <h2>Protocolo</h2>
            <p>
                Si desea consultar nuestro protocolo completo, puede acceder al siguiente enlace:
            </p>
            <p>
                <a href="/legal/protocolo-denuncias" className="text-sapimsa-crimson font-bold hover:underline">
                    Protocolo de gestión del tratamiento
                </a>
            </p>

            <div className="mt-8 p-6 bg-gray-100 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold mb-4">Acceso al Canal</h3>
                <p className="mb-4">Puede acceder a la plataforma del canal de denuncias a través del siguiente botón:</p>
                <a href="https://sapimsa.complylaw.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-sapimsa-crimson text-white px-6 py-3 rounded-md font-medium hover:bg-sapimsa-crimson-dark transition-colors">
                    Acceder al Canal de Denuncias
                </a>
            </div>
        </>
    );
}
