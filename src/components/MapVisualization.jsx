import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const locations = [
    { id: 'nanjing', x: '65%', y: '60%', label: 'Nanjing' },
    { id: 'unit731', x: '75%', y: '25%', label: 'Harbin (Unit 731)' },
    { id: 'labor', x: '80%', y: '40%', label: 'Mines (Forced Labor)' },
    { id: 'beijing', x: '60%', y: '35%', label: 'North China (Three Alls)' },
];

const MapVisualization = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-dark-bg relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-display text-center text-white mb-16"
                >
                    {t('map.title', 'Geography of Pain')}
                </motion.h2>

                <div className="relative aspect-[16/9] bg-[#111] rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                    {/* Abstract Map Background - using a simple SVG pattern for now or the politics image if suitable, 
              but let's use a dark stylized placeholder with a grid */}
                    <div className="absolute inset-0 opacity-20"
                        style={{ backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
                    </div>

                    {/* Stylized China/Japan outline could go here. For now, using relative positioning on a blank canvas 
              to represent the geography abstractly. */}

                    {locations.map((loc) => (
                        <motion.div
                            key={loc.id}
                            className="absolute group cursor-pointer"
                            style={{ left: loc.x, top: loc.y }}
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <div className="relative">
                                <div className="w-4 h-4 bg-japan-red rounded-full shadow-[0_0_20px_rgba(139,0,0,0.8)] animate-pulse" />
                                <div className="absolute -inset-4 border border-japan-red/30 rounded-full animate-ping" />

                                <div className="absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="bg-black/80 text-white text-sm px-3 py-1 rounded border border-white/10 backdrop-blur">
                                        {t(`history.${loc.id}.title`, loc.label)}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                    <div className="absolute bottom-4 right-4 text-gray-600 text-xs font-mono">
                        * Locations are approximate representations
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapVisualization;
