import React from 'react';
import { useTranslation } from 'react-i18next';
import ShockingNumbers from '../components/ShockingNumbers';
import HistoryCard from '../components/HistoryCard';
import Timeline from '../components/Timeline';
import TimelineGallery from '../components/TimelineGallery';

const History = () => {
    const { t } = useTranslation();
    const baseUrl = import.meta.env.BASE_URL;

    const historyItems = [
        { key: 'nanjing', img: `${baseUrl}nanjing.png` },
        { key: 'unit731', img: `${baseUrl}unit731.png` },
        { key: 'comfort_women', img: `${baseUrl}comfort_women.png` },
        { key: 'labor', img: `${baseUrl}labor.png` },
        // New International Items
        { key: 'bataan', img: `${baseUrl}bataan_death_march.png` },
        { key: 'burma', img: `${baseUrl}thai_burma_railway.png` },
        { key: 'manila', img: `${baseUrl}manila_massacre.png` }
    ];

    return (
        <div className="bg-dark-bg min-h-screen text-text-color pt-20">
            <ShockingNumbers />

            <section className="py-32 px-6 bg-[#080808]">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-display text-center text-white mb-20">{t('history:history.title')}</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {historyItems.map((item, index) => (
                            <HistoryCard
                                key={item.key}
                                title={t(`history:history.${item.key}.title`)}
                                desc={t(`history:history.${item.key}.desc`)}
                                details={t(`history:history.${item.key}.details`)}
                                testimonial={t(`history:history.${item.key}.testimonial`)}
                                testimonialSource={t(`history:history.${item.key}.testimonial_source`)}
                                image={item.img}
                                delay={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Timeline />
            <TimelineGallery />
        </div>
    );
};

export default History;
