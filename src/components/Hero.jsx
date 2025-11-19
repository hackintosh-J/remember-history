import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { t } = useTranslation();
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/50 z-10" />
                <img
                    src={`${import.meta.env.BASE_URL}hero_bg.png`}
                    alt="Hero Background"
                    className="w-full h-full object-cover filter brightness-50 grayscale-[0.5]"
                />
            </motion.div>

            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 text-white font-display tracking-wider leading-tight drop-shadow-2xl"
                >
                    {t('common:hero.title')}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="text-xl md:text-2xl text-gray-300 italic font-serif tracking-wide"
                >
                    {t('common:hero.subtitle')}
                </motion.p>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white opacity-70"
            >
                ↓
            </motion.div>
        </div>
    );
};

export default Hero;
