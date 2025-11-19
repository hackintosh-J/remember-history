import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
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

    const navItems = [
        { path: '/', label: t('common:nav.home', 'Home') },
        { path: '/history', label: t('common:nav.history', 'History') }
    ];

    return (
        <>
            {/* Top Navbar */}
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
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`text-sm uppercase tracking-widest hover:text-japan-red transition-colors ${location.pathname === item.path ? 'text-japan-red font-bold' : 'text-gray-300'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                        <LanguageSwitcher />
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Bottom Floating Navigation */}
            <AnimatePresence>
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 z-50"
                >
                    <div className="relative">
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-japan-red/20 blur-xl rounded-full" />

                        {/* Navigation container */}
                        <div className="relative flex gap-2 bg-black/80 backdrop-blur-xl p-3 rounded-full border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
                            {navItems.map((item, index) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                >
                                    <motion.div
                                        whileTap={{ scale: 0.95 }}
                                        className={`relative px-4 py-2 rounded-full text-xs font-display uppercase tracking-wide transition-all duration-300 whitespace-nowrap ${location.pathname === item.path
                                            ? 'bg-gradient-to-r from-japan-red to-red-700 text-white shadow-[0_0_20px_rgba(139,0,0,0.6)]'
                                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                                            }`}
                                    >
                                        {/* Active indicator glow */}
                                        {location.pathname === item.path && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 bg-japan-red rounded-full blur-md opacity-50"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        <span className="relative z-10">{item.label}</span>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    );
};

export default Navbar;
