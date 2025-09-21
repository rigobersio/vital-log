import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useThemeStore } from '../store/themeStore';
import { openWhatsAppChat } from '../utils/whatsapp';

const WhatsAppForm: React.FC = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const isDarkMode = useThemeStore((s) => s.isDarkMode);
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (phoneNumber) {
            openWhatsAppChat(phoneNumber, t('whatsapp.testMessage'));
        }
    };

    return (
        <div className={`mt-8 p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h3 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {t('whatsapp.title')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="phone" className={`block text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {t('whatsapp.phoneLabel')}
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder={t('whatsapp.phonePlaceholder')}
                        className={`mt-1 block w-full rounded-md shadow-sm ${isDarkMode
                                ? 'bg-gray-700 text-white border-gray-600 focus:border-blue-500'
                                : 'bg-white text-gray-900 border-gray-300 focus:border-blue-500'
                            } border px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white 
                        ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} 
                        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
                >
                    {t('whatsapp.sendButton')}
                </button>
            </form>
        </div>
    );
};

export default WhatsAppForm;
