
import { Snowflake, Zap, Wrench, ShieldCheck, Clock, Settings, Camera } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
    {
        icon: <Snowflake className="w-8 h-8 text-white" />,
        title: "Aire Acondicionado",
        description: "Instalación y mantenimiento de equipos Split y Ventana. Carga de gas, limpieza de filtros y reparación de fugas.",
        color: "bg-primary-500"
    },
    {
        icon: <Zap className="w-8 h-8 text-white" />,
        title: "Electricidad Domiciliaria",
        description: "Instalaciones completas, tableros eléctricos, búsqueda de cortocircuitos, instalación de luminarias y tomacorrientes.",
        color: "bg-secondary-500"
    },
    {
        icon: <Wrench className="w-8 h-8 text-white" />,
        title: "Reparaciones Urgentes",
        description: "Atención rápida para emergencias eléctricas y de refrigeración. Diagnóstico preciso y solución efectiva.",
        color: "bg-gray-800"
    },
    {
        icon: <Settings className="w-8 h-8 text-white" />,
        title: "Mantenimiento Preventivo",
        description: "Chequeo periódico para asegurar el óptimo funcionamiento de tus equipos y prevenir roturas costosas.",
        color: "bg-primary-600"
    },
    {
        icon: <Clock className="w-8 h-8 text-white" />,
        title: "Instalación de Protecciones",
        description: "Colocación de protectores de tensión para cuidar tus electrodomésticos de las variaciones de la red eléctrica.",
        color: "bg-secondary-600"
    },
    {
        icon: <Camera className="w-8 h-8 text-white" />,
        title: "Cámaras de Seguridad",
        description: "Instalación y configuración de sistemas de vigilancia CCTV y cámaras IP. Monitoreo remoto desde tu celular.",
        color: "bg-blue-600"
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-white" />,
        title: "Certificación y Garantía",
        description: "Todos nuestros trabajos cuentan con garantía escrita y son realizados por personal matriculado y capacitado.",
        color: "bg-green-600"
    }
];

export const Services = () => {
    return (
        <section id="servicios" className="py-20 bg-primary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase">Nuestros Servicios</h2>
                    <p className="mt-2 text-4xl font-extrabold text-gray-900 sm:text-5xl">
                        Soluciones Integrales
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
                        Cubrimos todas las necesidades de refrigeración y electricidad de tu hogar con profesionalismo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
                        >
                            <div className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-gray-200`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
