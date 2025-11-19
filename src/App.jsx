import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import VisceralEffects from './components/VisceralEffects';
import Home from './pages/Home';
import History from './pages/History';

function App() {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="bg-dark-bg min-h-screen text-text-color selection:bg-japan-red selection:text-white pb-32 md:pb-0">
                <VisceralEffects />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/history" element={<History />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                {/* Common Footer */}
                <section className="py-32 px-6 text-center bg-dark-bg border-t border-white/5">
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
        </Router >
    );
}

export default App;
