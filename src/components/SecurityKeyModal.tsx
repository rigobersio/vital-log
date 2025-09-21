import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface SecurityKeyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (key: string) => void;
}

const SecurityKeyModal: React.FC<SecurityKeyModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [key, setKey] = useState('');
    const { t } = useTranslation();
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };

        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(key);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div ref={modalRef} className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-md transform transition-all duration-300 scale-95 animate-fade-in-scale">
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 dark:text-white">{t('securityKey')}</h2>
                <p className="mb-6 text-gray-600 dark:text-gray-300">{t('securityKeyMessage')}</p>
                <form onSubmit={handleSubmit}>
                    <input
                        type="password"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 dark:bg-gray-700 dark:text-white text-lg"
                        placeholder={t('enterSecurityKey') || ''}
                    />
                    <div className="mt-6 flex flex-col sm:flex-row justify-end gap-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 rounded-lg text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 transition-colors duration-300 font-medium"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            className="px-6 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 font-medium gradient-button"
                        >
                            {t('submit')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SecurityKeyModal;
