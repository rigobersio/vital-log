import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaFilePdf, FaPlusCircle, FaSignOutAlt } from 'react-icons/fa';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';
import { signOut, auth } from '../firebase';
import VitalStatsSheet from './VitalStatsSheet';
import SecurityKeyModal from './SecurityKeyModal';

const ProtectedView: React.FC = () => {
    const setAuthenticated = useAuthStore((s: any) => s.setAuthenticated);
    const isDarkMode = useThemeStore((s) => s.isDarkMode);
    const { t } = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = async () => {
        await signOut(auth);
        setAuthenticated(false);
    };

    const handleNewRecord = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalSubmit = (key: string) => {
        if (key === import.meta.env.VITE_SECURITY_KEY) {
            window.open(import.meta.env.VITE_GOOGLE_SHEET_EDIT_URL, '_blank');
            setIsModalOpen(false);
        }
    };

    return (
        <div className={`flex flex-col min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-6">
                        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                            {t('controlPanel')}
                        </h2>
                        <a
                            href={import.meta.env.VITE_GOOGLE_SHEET_PDF_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-md
                                ${isDarkMode
                                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                                    : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'}`}
                        >
                            <FaFilePdf className="text-xl mr-2" />
                            {t('downloadPDF')}
                        </a>
                        <button
                            onClick={handleNewRecord}
                            className={`inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-md
                                ${isDarkMode
                                    ? 'bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700'
                                    : 'bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600'}`}
                        >
                            <FaPlusCircle className="text-xl mr-2" />
                            {t('newRecord')}
                        </button>
                    </div>
                    <button
                        onClick={handleLogout}
                        className={`inline-flex items-center px-4 py-2 rounded-lg text-white font-medium transition-all duration-300 transform hover:scale-105 shadow-md
                            ${isDarkMode
                                ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700'
                                : 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600'}`}
                    >
                        <FaSignOutAlt className="text-xl mr-2" />
                        {t('logout')}
                    </button>
                </div>
            </div>

            <div className="flex-1">
                <VitalStatsSheet />
            </div>

            <SecurityKeyModal
                isOpen={isModalOpen}
                onClose={handleModalClose}
                onSubmit={handleModalSubmit}
            />
        </div>
    );
};

export default ProtectedView;