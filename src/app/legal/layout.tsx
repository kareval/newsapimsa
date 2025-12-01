export default function LegalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
                    <div className="prose max-w-none prose-headings:font-lutech prose-headings:text-sapimsa-jet prose-h1:text-3xl prose-h1:mb-6 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:text-gray-600 prose-p:leading-relaxed prose-p:mb-4 prose-ul:list-disc prose-ul:pl-5 prose-ul:mb-4 prose-li:text-gray-600 prose-li:mb-2 prose-a:text-sapimsa-crimson prose-a:font-medium hover:prose-a:underline">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
