import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const PoliticianSection = () => {
    const { t } = useTranslation();

    return (
        <section className="py-32 px-6 bg-dark-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-4">{t('politician.title')}</h2>
                    <div className="h-1 w-24 bg-japan-red mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-serif"
                    >
                        <p>
                            <span className="drop-cap">{t('politician.description').charAt(0)}</span>
                            {t('politician.description').slice(1)}
                        </p>
                        <p>{t('politician.description2')}</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-japan-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <img
                            src="/yasukuni.png"
                            alt="Yasukuni Shrine"
                            className="w-full rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                        <p className="text-center text-sm text-gray-500 mt-4 italic">{t('politician.yasukuni_caption')}</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PoliticianSection;
