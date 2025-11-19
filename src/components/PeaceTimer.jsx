import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const PeaceTimer = () => {
    const { t } = useTranslation();
    const [timeSince, setTimeSince] = useState({
        years: 0,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const surrenderDate = new Date('1945-08-15T12:00:00+09:00'); // Japan Standard Time

        const updateTimer = () => {
            const now = new Date();
            const diff = now - surrenderDate;

            const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
            const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            setTimeSince({ years, days, hours, minutes, seconds });
        };

        const timer = setInterval(updateTimer, 1000);
        updateTimer(); // Initial call

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-12 bg-black text-white relative overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-xl md:text-2xl font-serif text-gray-400 mb-8 tracking-widest uppercase"
                >
                    {t('common:peace_timer.title')}
                </motion.h3>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
                    <TimeUnit value={timeSince.years} label={t('common:peace_timer.years')} />
                    <TimeUnit value={timeSince.days} label={t('common:peace_timer.days')} />
                    <TimeUnit value={timeSince.hours} label={t('common:peace_timer.hours')} />
                    <TimeUnit value={timeSince.minutes} label={t('common:peace_timer.minutes')} />
                    <TimeUnit value={timeSince.seconds} label={t('common:peace_timer.seconds')} />
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-8 text-gray-500 text-sm italic"
                >
                    {t('common:peace_timer.caption')}
                </motion.p>
            </div>
        </section>
    );
};

const TimeUnit = ({ value, label }) => (
    <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
    >
        <span className="text-3xl md:text-5xl font-display font-bold text-white tabular-nums">
            {String(value).padStart(2, '0')}
        </span>
        <span className="text-xs md:text-sm text-gray-400 uppercase tracking-wider mt-2">
            {label}
        </span>
    </motion.div>
);

export default PeaceTimer;
