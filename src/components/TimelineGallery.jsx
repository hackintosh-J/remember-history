import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const TimelineGallery = () => {
    const { t } = useTranslation();
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
        }
    }, []);

    const events = [
        { id: 'mukden', type: 'top' },
        { id: 'shanghai_1932', type: 'bottom' },
        { id: 'manchukuo', type: 'top' },
        { id: 'marco_polo', type: 'bottom' },
        { id: 'shanghai_1937', type: 'top' },
        { id: 'nanjing', type: 'bottom', highlight: true },
        { id: 'chongqing', type: 'top' },
        { id: 'pearl_harbor', type: 'bottom' },
        { id: 'sook_ching', type: 'top' },
        { id: 'bataan', type: 'bottom' },
        { id: 'burma', type: 'top' },
        { id: 'ichigo', type: 'bottom' },
        { id: 'manila', type: 'top' },
        { id: 'surrender', type: 'bottom', highlight: true },
    ];

    return (
        <section className="py-32 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-5xl font-display text-white mb-4"
                >
                    {t('history:map.title')}
                </motion.h2>
                <p className="text-gray-400 font-serif italic">
                    {t('common:map_instruction', 'Drag to explore the timeline')}
                </p>
            </div>

            {/* Timeline Container */}
            <motion.div
                ref={containerRef}
                className="cursor-grab active:cursor-grabbing pl-24 md:pl-32 relative"
            >
                {/* Central Axis Line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-white/20 w-[3000px]" />

                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    dragElastic={0.1}
                    dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
                    className="flex relative h-[450px] items-center w-max pr-24"
                >
                    {events.map((event, index) => (
                        <div
                            key={event.id}
                            className={`relative flex flex-col items-center w-[140px] flex-shrink-0 group ${event.type === 'top' ? 'justify-end pb-10 h-1/2 self-start' : 'justify-start pt-10 h-1/2 self-end'
                                }`}
                        >
                            {/* Connector Line */}
                            <div className={`absolute left-1/2 w-[1px] bg-white/20 group-hover:bg-japan-red transition-colors duration-300 ${event.type === 'top' ? 'bottom-0 h-10' : 'top-0 h-10'
                                }`} />

                            {/* Node Dot */}
                            <div className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-300 z-10 ${event.highlight
                                ? 'bg-japan-red border-japan-red shadow-[0_0_10px_#8B0000]'
                                : 'bg-black border-white/50 group-hover:border-japan-red group-hover:bg-japan-red'
                                } ${event.type === 'top' ? 'bottom-[-8px]' : 'top-[-8px]'
                                }`} />

                            {/* Content Card */}
                            <motion.div
                                className="w-[260px] bg-[#111] border border-white/10 p-4 rounded hover:border-japan-red/50 transition-colors duration-300 relative z-20"
                                whileHover={{ scale: 1.05, zIndex: 50 }}
                            >
                                <div className="text-japan-red text-xs font-bold mb-1 font-mono">
                                    {t(`history:timeline_events.${event.id}.date`)}
                                </div>
                                <h4 className="text-white font-bold text-sm mb-2 leading-tight">
                                    {t(`history:timeline_events.${event.id}.title`)}
                                </h4>
                                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3 group-hover:line-clamp-none">
                                    {t(`history:timeline_events.${event.id}.desc`)}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default TimelineGallery;
