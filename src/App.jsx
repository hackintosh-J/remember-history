import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from './components/Hero';
import ShockingNumbers from './components/ShockingNumbers';
import LanguageSwitcher from './components/LanguageSwitcher';
import PoliticianSection from './components/PoliticianSection';
import HistoryCard from './components/HistoryCard';
import Timeline from './components/Timeline';
import MapVisualization from './components/MapVisualization';

function App() {
    const { t } = useTranslation();

    const baseUrl = import.meta.env.BASE_URL;
    const historyItems = [
        { key: 'nanjing', img: `${baseUrl}nanjing.png` },
        { key: 'unit731', img: `${baseUrl}unit731.png` },
        { key: 'comfort_women', img: `${baseUrl}comfort_women.png` },
        { key: 'labor', img: `${baseUrl}labor.png` }
    ];

    return (
        <div className="bg-dark-bg min-h-screen text-text-color selection:bg-japan-red selection:text-white">
            <LanguageSwitcher />

            <Hero />

            <ShockingNumbers />

            <PoliticianSection />

            {/* Remarks Section */}
            <section className="py-20 bg-gradient-to-b from-black to-japan-red/20 border-y border-white/5">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <img src={`${import.meta.env.BASE_URL}politics.png`} alt="Politics" className="rounded shadow-2xl filter grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                    <div className="flex-1 border-l-4 border-japan-red pl-8">
                        <blockquote className="text-3xl font-display text-white mb-6 relative">
                            <span className="absolute -top-10 -left-4 text-8xl text-japan-red opacity-20">“</span>
                            {t('politics:remarks.quote')}
                        </blockquote>
                        <cite className="block text-japan-red font-bold tracking-widest mb-6">— {t('politics:remarks.date')}</cite>
                        <p className="text-gray-400 text-lg">{t('politics:remarks.analysis')}</p>
                    </div>
                </div>
            </section>

            {/* History Grid */}
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
                                image={item.img}
                                delay={index}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <Timeline />

            <MapVisualization />

            {/* Conclusion */}
            <section className="py-32 px-6 text-center bg-dark-bg">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-display text-white">{t('common:conclusion.title')}</h2>
                    <p className="text-xl text-gray-400 leading-relaxed">{t('common:conclusion.text')}</p>
                    <p className="text-2xl text-white font-bold font-display">{t('common:conclusion.strong')}</p>
                </div>
            </section>

            <footer className="py-12 text-center bg-black text-gray-600 text-sm uppercase tracking-widest">
                {t('common:footer.text')}
            </footer>
        </div>
    );
}

export default App;
