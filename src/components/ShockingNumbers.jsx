import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform, useInView, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const Counter = ({ value, label, suffix = "+" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const springValue = useSpring(0, { bounce: 0, duration: 2000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center p-8 border border-japan-red/30 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-japan-red/10 transition-colors duration-500">
            <div className="text-6xl md:text-8xl font-display font-bold text-japan-red mb-2 tabular-nums tracking-tighter drop-shadow-[0_0_15px_rgba(139,0,0,0.5)]">
                {displayValue.toLocaleString()}{suffix}
            </div>
            <div className="text-xl md:text-2xl text-gray-300 font-serif text-center tracking-widest uppercase border-t border-white/20 pt-4 w-full">
                {label}
            </div>
        </div>
    );
};

const ShockingNumbers = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const stats = [
        { key: 'nanjing', value: 300000 },
        { key: 'comfort_women', value: 200000 },
        { key: 'labor', value: 40000 },
        { key: 'unit731', value: 3000 }
    ];

    return (
        <section ref={containerRef} className="py-32 px-6 relative overflow-hidden min-h-[80vh] flex items-center">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-japan-red/10 via-black to-black z-0" />

            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-7xl mx-auto w-full"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-display text-center text-white mb-20"
                >
                    {t('history:shocking_numbers.title')}
                    <span className="block text-lg md:text-xl text-japan-red mt-4 font-serif tracking-[0.2em] uppercase">
                        {t('history:shocking_numbers.subtitle')}
                    </span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {stats.map((stat) => (
                        <Counter
                            key={stat.key}
                            value={stat.value}
                            label={t(`history:shocking_numbers.${stat.key}`)}
                        />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="text-center text-gray-500 mt-16 italic font-serif max-w-2xl mx-auto"
                >
                    {t('history:shocking_numbers.disclaimer')}
                </motion.p>
            </motion.div>
        </section>
    );
};

export default ShockingNumbers;
