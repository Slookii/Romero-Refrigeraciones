
import { motion } from 'framer-motion';
import { BadgeCheck, ArrowRight } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="inicio" className="pt-20 lg:pt-28 relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                        <BadgeCheck className="w-5 h-5 text-green-500 mr-2" />
                        <span className="text-sm font-semibold text-gray-700">Técnicos Certificados en La Rioja</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Expertos en <span className="text-primary-600">Refrigeración</span>, <span className="text-secondary-500">Electricidad</span> y <span className="text-blue-600">Seguridad</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Soluciones rápidas y garantizadas para tu hogar o empresa. Instalación de aires, cámaras de seguridad y sistemas eléctricos.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-1">
                            Agendar Visita
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                        <a href="#servicios" className="inline-flex justify-center items-center px-8 py-4 bg-white text-gray-700 font-bold rounded-lg border border-gray-200 hover:bg-gray-50 transition-all">
                            Ver Servicios
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-gray-500 text-sm font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                            Disponibilidad Inmediata
                        </div>
                        <span>•</span>
                        <div>Garantía Escrita</div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    {/* Abstract blobs background */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-0 right-40 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="relative bg-white p-2 rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="Técnico reparando aire acondicionado"
                            className="rounded-xl w-full h-[500px] object-cover"
                        />
                        <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex items-center justify-between mb-2">
                                <span className="font-bold text-gray-900">Mantenimiento Preventivo</span>
                                <span className="text-secondary-600 font-bold">★ 5.0</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-primary-600 h-2 rounded-full w-[95%]"></div>
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Más de 500 clientes satisfechos</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
