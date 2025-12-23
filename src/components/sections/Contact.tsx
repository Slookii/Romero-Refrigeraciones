import { Phone, MapPin, MessageCircle, Clock } from 'lucide-react';

export const Contact = () => {
    return (
        <section id="contacto" className="py-20 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-4xl font-extrabold mb-6">Estamos para ayudarte</h2>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            ¿Tenés un problema con tu aire o necesitás un electricista de confianza?
                            Contactanos hoy mismo y recibí asesoramiento profesional inmediato.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                                    <Phone className="w-6 h-6 text-blue-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Llamanos</h4>
                                    <p className="text-gray-400">+54 9 380 480 8109</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                                    <MessageCircle className="w-6 h-6 text-green-500" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">WhatsApp</h4>
                                    <a href="https://wa.me/5493804808109" className="text-gray-400 hover:text-green-400 transition-colors">Enviar mensaje directo</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                                    <Clock className="w-6 h-6 text-amber-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Horarios de Atención</h4>
                                    <p className="text-gray-400">Lunes a Sábado: 8:00 - 20:00 hs</p>
                                    <p className="text-gray-500 text-sm">Disponibles para urgencias 24hs</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-gray-800 p-3 rounded-lg mr-4">
                                    <MapPin className="w-6 h-6 text-red-400" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white">Zona de Cobertura</h4>
                                    <p className="text-gray-400">La Rioja Capital y alrededores</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl text-gray-900">
                        <form className="space-y-6">
                            <h3 className="text-2xl font-bold mb-6">Solicitar Presupuesto</h3>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Nombre</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tu nombre" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="Tu celular" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Servicio</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white">
                                    <option>Aire Acondicionado - Instalación</option>
                                    <option>Aire Acondicionado - Reparación/Carga</option>
                                    <option>Electricidad Domiciliaria</option>
                                    <option>Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all" placeholder="¿En qué podemos ayudarte?"></textarea>
                            </div>

                            <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                                Enviar Consulta
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
