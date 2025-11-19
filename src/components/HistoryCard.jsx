import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const HistoryCard = ({ title, desc, details, testimonial, testimonialSource, image, delay }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const { t } = useTranslation();

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ layout: { duration: 0.3 }, opacity: { duration: 0.6, delay: delay * 0.1 } }}
            className={`group relative bg-[#111] overflow-hidden rounded-sm hover:z-10 ${isExpanded ? 'z-50 ring-2 ring-japan-red shadow-[0_0_50px_rgba(0,0,0,0.8)]' : ''}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <motion.div
                layout
                className={`overflow-hidden relative ${isExpanded ? 'h-48' : 'h-80'}`}
            >
                <div className={`absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10 ${isExpanded ? 'bg-transparent' : ''}`} />
                <img
                    src={image}
                    alt={title}
                    className={`w-full h-full object-cover transform transition-transform duration-700 filter ${isExpanded ? 'scale-105 sepia-0' : 'group-hover:scale-110 sepia-[0.3] group-hover:sepia-0'}`}
                />
            </motion.div>

            <motion.div layout className="p-8 relative">
                <motion.h3 layout="position" className="text-2xl font-display text-white mb-4 group-hover:text-japan-red transition-colors duration-300">
                    {title}
                </motion.h3>
                <motion.p layout="position" className="text-gray-400 leading-relaxed text-sm md:text-base">
                    {desc}
                </motion.p>

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-6 pt-6 border-t border-white/10"
                        >
                            <p className="text-gray-300 leading-relaxed text-sm md:text-base font-serif italic">
                                {details}
                            </p>
                            {testimonial && (
                                <div className="mt-6 pl-4 border-l-2 border-japan-red">
                                    <p className="text-white font-serif text-lg italic mb-2">
                                        {testimonial}
                                    </p>
                                    <p className="text-gray-500 text-xs uppercase tracking-wider">
                                        {testimonialSource}
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>

                <motion.div
                    layout="position"
                    className="mt-6 flex items-center text-japan-red text-sm font-bold tracking-widest uppercase cursor-pointer"
                >
                    <span>{isExpanded ? t('common:read_less', 'Read Less') : t('common:read_more', 'Read More')}</span>
                    <svg
                        className={`w-4 h-4 ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HistoryCard;
