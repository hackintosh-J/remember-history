import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const NewsSection = () => {
    const { t } = useTranslation();

    const newsItems = [
        {
            id: 'china_response',
            source: 'Ministry of Foreign Affairs of China',
            date: '2025.11.08',
            icon: '🇨🇳'
        },
        {
            id: 'un_charter',
            source: 'International Legal Analysis',
            date: '2025.11.09',
            icon: '🇺🇳'
        },
        {
            id: 'global_times',
            source: 'Global Times',
            date: '2025.11.08',
            icon: '📰'
        }
    ];

    return (
        <section className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-display text-white mb-16 text-center"
                >
                    {t('politics:news.title', 'International Condemnation')}
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {newsItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#111] p-8 rounded border border-white/10 hover:border-japan-red/50 transition-colors group"
                        >
                            <div className="text-4xl mb-6">{item.icon}</div>
                            <div className="text-japan-red text-xs font-bold tracking-widest uppercase mb-2">
                                {item.source} • {item.date}
                            </div>
                            <h3 className="text-xl text-white font-bold mb-4 group-hover:text-japan-red transition-colors">
                                {t(`politics:news.${item.id}.title`)}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {t(`politics:news.${item.id}.desc`)}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
