import React from 'react';

import { useThemeStore } from '../store/themeStore';

const VitalStatsSheet: React.FC = () => {
    const isDarkMode = useThemeStore((s) => s.isDarkMode);

    return (
        <div className="w-full h-screen max-w-7xl mx-auto p-4">
            <div className={`relative w-full h-full min-h-[600px] rounded-lg shadow-lg overflow-hidden
        ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}>
                <iframe
                    src={import.meta.env.VITE_GOOGLE_SHEET_URL}
                    className="absolute top-0 left-0 w-full h-full border-0"
                    title="Constantes Vitales"
                />
            </div>
        </div>
    );
};

export default VitalStatsSheet;
