import React from 'react';
import { useTranslation } from 'react-i18next';
import Hero from '../components/Hero';
import PeaceTimer from '../components/PeaceTimer';
import PoliticianSection from '../components/PoliticianSection';
import NewsSection from '../components/NewsSection';

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-dark-bg min-h-screen text-text-color">
            <Hero />
            <PeaceTimer />

            {/* Legal Analysis Section */}
            <section className="py-20 bg-black border-b border-white/5">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-display text-white mb-8">{t('politics:legal.title', 'Violation of International Law')}</h2>
                    <p className="text-xl text-gray-300 leading-relaxed mb-8">
                        {t('politics:legal.desc', 'Article 2(4) of the UN Charter prohibits the threat or use of force against the territorial integrity or political independence of any state. Sanae Takaichi\'s remarks regarding Taiwan constitute a direct interference in China\'s internal affairs and a violation of this core principle.')}
                    </p>
                    <div className="inline-block border border-japan-red/50 bg-japan-red/10 px-6 py-3 rounded text-japan-red font-bold tracking-wider">
                        {t('politics:legal.verdict', 'UN CHARTER VIOLATION')}
                    </div>
                </div>
            </section>

            <PoliticianSection />
            <NewsSection />

            {/* Remarks Section (Moved from App.jsx) */}
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
        </div>
    );
};

export default Home;
