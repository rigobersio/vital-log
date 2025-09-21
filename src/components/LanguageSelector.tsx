import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector: React.FC = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-3">
            <button
                onClick={() => changeLanguage('es')}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md 
                    ${i18n.language === 'es'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-gray-600/50'}`}
            >
                🇪🇸 ES
            </button>
            <button
                onClick={() => changeLanguage('en')}
                className={`px-3 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md 
                    ${i18n.language === 'en'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700/50 backdrop-blur-sm hover:bg-gray-300 dark:hover:bg-gray-600/50'}`}
            >
                🇬🇧 EN
            </button>
        </div>
    );
};

export default LanguageSelector;
