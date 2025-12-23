import { useState } from 'react';
import { Menu, X, Phone, Zap, Thermometer } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full bg-blue-900/95 backdrop-blur-sm z-50 shadow-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                            <Thermometer className="h-8 w-8 text-white" />
                            <Zap className="h-8 w-8 text-secondary-400" />
                        </div>
                        <span className="text-xl font-bold text-white leading-tight">
                            Romero<br />Refrigeraciones
                        </span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#inicio" className="text-gray-200 hover:text-white font-medium transition-colors">Inicio</a>
                        <a href="#servicios" className="text-gray-200 hover:text-white font-medium transition-colors">Servicios</a>
                        <a href="#precios" className="text-gray-200 hover:text-white font-medium transition-colors">Precios</a>
                        <a href="#contacto" className="bg-white text-primary-900 px-5 py-2.5 rounded-full font-bold hover:bg-gray-100 transition-colors flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            Contáctanos
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-blue-900 border-t border-blue-800"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <a href="#inicio" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-200 hover:bg-primary-800 rounded-lg">Inicio</a>
                            <a href="#servicios" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-200 hover:bg-primary-800 rounded-lg">Servicios</a>
                            <a href="#precios" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-gray-200 hover:bg-primary-800 rounded-lg">Precios</a>
                            <a href="#contacto" onClick={() => setIsOpen(false)} className="block px-3 py-3 text-base font-medium text-white bg-primary-800 rounded-lg">Contáctanos</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
