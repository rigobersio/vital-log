import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import { signOut, auth } from '../firebase';
import VitalStatsSheet from './VitalStatsSheet';

const ProtectedView: React.FC = () => {
    const setAuthenticated = useAuthStore((s: any) => s.setAuthenticated);
    const isDarkMode = useThemeStore((s) => s.isDarkMode);
    const { t } = useTranslation();

    const handleLogout = async () => {
        await signOut(auth);
        setAuthenticated(false);
    };

    return (
        <div className="flex flex-col h-screen">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow transition-colors duration-200`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {t('controlPanel')}
                    </h2>
                    <button
                        onClick={handleLogout}
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white 
              ${isDarkMode ? 'bg-red-700 hover:bg-red-800' : 'bg-red-600 hover:bg-red-700'} 
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3zm11 4.5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 .5.5z" />
                        </svg>
                        {t('logout')}
                    </button>
                </div>
            </div>

            <div className={`flex-1 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-200`}>
                <VitalStatsSheet />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <a
                        href={import.meta.env.VITE_GOOGLE_SHEET_PDF_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white
                            ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'}
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586L7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" />
                        </svg>
                        {t('downloadPDF')}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProtectedView;
