// HistoryCard receives props, so it might not need t() directly unless it has internal text.
// Let's check the file content first.
import React from 'react';
import { motion } from 'framer-motion';

const HistoryCard = ({ title, desc, image, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: delay * 0.1 }}
            className="group relative bg-[#111] overflow-hidden rounded-sm hover:z-10"
        >
            <div className="h-80 overflow-hidden relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter sepia-[0.3] group-hover:sepia-0"
                />
            </div>

            <div className="p-8 relative">
                <h3 className="text-2xl font-display text-white mb-4 group-hover:text-japan-red transition-colors duration-300">{title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{desc}</p>
            </div>
        </motion.div>
    );
};

export default HistoryCard;
