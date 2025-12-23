
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';

export const Hero = () => {
    return (
        <section id="inicio" className="pt-20 lg:pt-28 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-secondary-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-600 text-white shadow-lg mb-8 transform hover:scale-105 transition-transform">
                        <MapPin className="w-5 h-5 mr-2 animate-bounce" />
                        <span className="text-base font-bold uppercase tracking-wide">Activo en La Rioja Capital</span>
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                        Expertos en <span className="text-blue-600">Refrigeración</span> y <span className="text-amber-500">Electricidad</span>
                    </h1>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                        Soluciones rápidas y garantizadas. Instalación de aires, mantenimiento y obras eléctricas.
                        <br />
                        <span className="font-semibold text-blue-700">¡Visita técnica GRATIS!</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contacto" className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
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
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4 pt-8">
                            <img
                                src="/images/hero-1.jpg"
                                alt="Instalación de aire"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src="/images/hero-2.jpg"
                                alt="Mantenimiento"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                        <div className="space-y-4">
                            <img
                                src="/images/hero-3.jpg"
                                alt="Técnico trabajando"
                                className="rounded-2xl shadow-lg w-full h-64 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                            <img
                                src="/images/hero-4.jpg"
                                alt="Herramientas"
                                className="rounded-2xl shadow-lg w-full h-48 object-cover hover:shadow-xl transition-shadow duration-300"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
