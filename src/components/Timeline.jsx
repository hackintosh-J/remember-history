import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const Timeline = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/80 z-10" />
                <img
                    src={`${import.meta.env.BASE_URL}timeline_bg.png`}
                    alt="Timeline Background"
                    className="w-full h-full object-cover"
                />
            </motion.div>

            <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-display text-japan-red mb-4">{t('history.three_alls.title')}</h2>
                    <h3 className="text-2xl md:text-3xl text-white mb-12 font-serif tracking-widest">{t('history.three_alls.subtitle')}</h3>

                    <p className="text-xl md:text-2xl text-gray-300 leading-loose font-serif">
                        {t('history.three_alls.desc')}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Timeline;
