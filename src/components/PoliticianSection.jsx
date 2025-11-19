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
                    <h2 className="text-4xl md:text-6xl font-display text-white mb-4">{t('politics:politician.title')}</h2>
                    <div className="h-1 w-24 bg-japan-red mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8 text-lg md:text-xl text-gray-300 leading-relaxed font-serif"
                    >
                        <div className="space-y-8">
                            {/* Interference Section - Highlighted */}
                            <div className="bg-red-900/20 border-l-4 border-japan-red p-6 rounded-r-lg">
                                <h3 className="text-2xl font-display text-japan-red mb-4">
                                    {t('politics:politician.interference_title')}
                                </h3>
                                <p className="text-white font-bold text-xl mb-4">
                                    {t('politics:remarks.quote')}
                                </p>
                                <p className="text-gray-300 text-base">
                                    {t('politics:politician.description2')}
                                </p>
                            </div>

                            <div className="pl-6 border-l border-white/10">
                                <h3 className="text-xl font-display text-white mb-2">
                                    {t('politics:politician.background_title')}
                                </h3>
                                <p className="text-gray-400 text-base">
                                    {t('politics:politician.description')}
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group space-y-8"
                    >
                        <div className="relative">
                            <div className="absolute -inset-4 bg-japan-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img
                                src={`${import.meta.env.BASE_URL}yasukuni.png`}
                                alt="Yasukuni Shrine"
                                className="w-full rounded shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                            <p className="text-center text-sm text-gray-500 mt-4 italic">{t('politics:politician.yasukuni_caption')}</p>
                        </div>

                        {/* International Condemnation Box */}
                        <div className="bg-white/5 p-6 rounded border border-white/10">
                            <h4 className="text-lg font-display text-white mb-2">{t('politics:politician.condemnation_title')}</h4>
                            <p className="text-gray-400 text-sm">
                                {t('politics:remarks.analysis')}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default PoliticianSection;
