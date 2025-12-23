import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-gray-950 text-gray-400 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-2xl font-bold text-white mb-2">Romero Refrigeraciones</h3>
                        <p className="text-sm">Soluciones profesionales para tu hogar.</p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-primary-400 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="#" className="hover:text-pink-500 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between text-sm">
                    <p>&copy; {new Date().getFullYear()} Romero Refrigeraciones. Todos los derechos reservados.</p>
                    <div className="mt-4 md:mt-0 space-x-4">
                        <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
