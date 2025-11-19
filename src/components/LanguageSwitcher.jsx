import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-1.5 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/10"
        >
            {['zh', 'en', 'jp'].map((lang) => (
                <button
                    key={lang}
                    onClick={() => changeLanguage(lang)}
                    className={`px-3 py-0.5 rounded-full text-xs font-display uppercase tracking-wider transition-all duration-300 ${i18n.language === lang
                        ? 'bg-white text-black shadow-[0_0_10px_rgba(255,255,255,0.5)]'
                        : 'text-gray-400 hover:text-white'
                        }`}
                >
                    {lang === 'zh' ? '中文' : lang === 'en' ? 'EN' : '日本語'}
                </button>
            ))}
        </motion.div>
    );
};

export default LanguageSwitcher;
