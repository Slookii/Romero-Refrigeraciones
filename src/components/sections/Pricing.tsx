
import { Check } from 'lucide-react';

const priceList = [
    {
        name: "Visita Técnica",
        price: "GRATIS",
        description: "Diagnóstico y presupuesto sin cargo",
        features: [
            "Revisión completa de falla",
            "Diagnóstico por escrito",
            "Presupuesto detallado",
            "Asesoramiento profesional"
        ],
        highlight: false
    },
    {
        name: "Mantenimiento y Sanitización",
        price: "$60.000",
        description: "Limpieza profunda y desinfección",
        features: [
            "Limpieza de unidad interior y exterior",
            "Sanitización completa",
            "Chequeo de gas y presiones",
            "Limpieza de filtros",
            "Prueba de rendimiento"
        ],
        highlight: true
    },
    {
        name: "Instalación Aire Acondicionado",
        price: "$180.000",
        description: "Instalación profesional garantizada",
        features: [
            "Instalación de unidad interior y exterior",
            "Vacío de cañerías con bomba",
            "Control de fugas",
            "Garantía de instalación",
            "Desinstalación: $60.000"
        ],
        highlight: false
    }
];

export const Pricing = () => {
    return (
        <section id="precios" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900">Precios de Referencia</h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Transparencia total. Sin costos ocultos.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {priceList.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 bg-white border rounded-2xl flex flex-col ${plan.highlight
                                ? 'border-primary-500 ring-2 ring-primary-500 shadow-xl scale-105 z-10'
                                : 'border-gray-200 hover:border-primary-300 transition-colors'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute top-0 right-0 -mr-1 -mt-1 w-32 h-32 overflow-hidden rounded-tr-2xl">
                                    <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-8 py-1 transform rotate-45 translate-x-8 translate-y-4 shadow-md">
                                        POPULAR
                                    </div>
                                </div>
                            )}

                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                                <p className="mt-2 text-sm text-gray-500">{plan.description}</p>
                            </div>

                            <div className="mb-6">
                                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                                <span className="text-gray-500"> / servicio</span>
                            </div>

                            <ul className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                                        <span className="text-gray-600 text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://wa.me/5493804123456?text=Hola, me interesa el servicio de ${plan.name}`}
                                target="_blank"
                                className={`w-full py-3 px-4 rounded-lg font-bold text-center transition-colors ${plan.highlight
                                    ? 'bg-primary-600 text-white hover:bg-primary-700'
                                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                                    }`}
                            >
                                Consultar
                            </a>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-gray-500 text-sm">
                        * Los precios son estimativos y pueden variar según la complejidad del trabajo y materiales necesarios.
                    </p>
                </div>
            </div>
        </section>
    );
};
