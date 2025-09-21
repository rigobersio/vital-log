import React from 'react';

import { useThemeStore } from '../store/themeStore';

const VitalStatsSheet: React.FC = () => {
    const isDarkMode = useThemeStore((s) => s.isDarkMode);

    return (
        <div className="flex-1 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className={`relative w-full h-[calc(100vh-8rem)] min-h-[600px] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl
                    ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
                    <iframe
                        src={import.meta.env.VITE_GOOGLE_SHEET_URL}
                        className="absolute top-0 left-0 w-full h-full border-0"
                        title="Constantes Vitales"
                    />
                </div>
            </div>
        </div>
    );
};

export default VitalStatsSheet;
