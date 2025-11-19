import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
    const { t } = useTranslation();
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="text-2xl font-display font-bold text-white tracking-wider hover:text-japan-red transition-colors">
                    REMEMBER<span className="text-japan-red">.</span>
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-6">
                        <Link to="/" className={`text-sm uppercase tracking-widest hover:text-japan-red transition-colors ${location.pathname === '/' ? 'text-japan-red font-bold' : 'text-gray-300'}`}>
                            {t('common:nav.home', 'Home')}
                        </Link>
                        <Link to="/history" className={`text-sm uppercase tracking-widest hover:text-japan-red transition-colors ${location.pathname === '/history' ? 'text-japan-red font-bold' : 'text-gray-300'}`}>
                            {t('common:nav.history', 'History')}
                        </Link>
                    </div>
                    <LanguageSwitcher />
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
