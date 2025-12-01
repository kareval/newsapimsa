export default function TrustStrip() {
    return (
        <div className="bg-gray-50 border-b border-gray-200 overflow-hidden">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-wider mb-6">
                    Certificaciones y Alianzas Estratégicas
                </p>
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 text-gray-500 grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-300">

                    {/* SAP Gold Partner */}
                    <div className="flex items-center gap-2 group">
                        <span className="text-2xl font-bold text-sapimsa-jet group-hover:text-[#008FD3] transition-colors">SAP</span>
                        <span className="text-sm font-semibold uppercase tracking-wider border-l-2 border-sapimsa-crimson pl-2 text-sapimsa-crimson group-hover:text-[#F0AB00] group-hover:border-[#F0AB00] transition-colors">Gold Partner</span>
                    </div>

                    {/* ISO 9001 */}
                    <div className="flex flex-col items-center group">
                        <div className="flex items-center gap-1 border-2 border-current rounded px-2 py-1">
                            <span className="font-bold text-lg">ISO</span>
                            <span className="font-light">9001</span>
                        </div>
                        <span className="text-[10px] mt-1 uppercase tracking-wide">Calidad</span>
                    </div>

                    {/* ISO 27001 */}
                    <div className="flex flex-col items-center group">
                        <div className="flex items-center gap-1 border-2 border-current rounded px-2 py-1">
                            <span className="font-bold text-lg">ISO</span>
                            <span className="font-light">27001</span>
                        </div>
                        <span className="text-[10px] mt-1 uppercase tracking-wide">Seguridad Info.</span>
                    </div>

                    {/* ISO 20000 */}
                    <div className="flex flex-col items-center group">
                        <div className="flex items-center gap-1 border-2 border-current rounded px-2 py-1">
                            <span className="font-bold text-lg">ISO</span>
                            <span className="font-light">20000</span>
                        </div>
                        <span className="text-[10px] mt-1 uppercase tracking-wide">Servicios TI</span>
                    </div>

                    {/* ISO 33000 (SPICE) */}
                    <div className="flex flex-col items-center group">
                        <div className="flex items-center gap-1 border-2 border-current rounded px-2 py-1">
                            <span className="font-bold text-lg">ISO</span>
                            <span className="font-light">33000</span>
                        </div>
                        <span className="text-[10px] mt-1 uppercase tracking-wide">Calidad Software</span>
                    </div>

                    {/* ISO 14000 */}
                    <div className="flex flex-col items-center group">
                        <div className="flex items-center gap-1 border-2 border-current rounded px-2 py-1">
                            <span className="font-bold text-lg">ISO</span>
                            <span className="font-light">14000</span>
                        </div>
                        <span className="text-[10px] mt-1 uppercase tracking-wide">Medio Ambiente</span>
                    </div>

                    {/* ENS Nivel Medio */}
                    <div className="flex items-center gap-2 group">
                        <div className="relative h-10 w-10 flex items-center justify-center border-2 border-current rounded-full p-1">
                            <span className="text-[8px] font-bold text-center leading-tight">ENS<br />Media</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm">ENS</span>
                            <span className="text-xs uppercase">Nivel Medio</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
