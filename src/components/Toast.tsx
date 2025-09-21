import React from 'react';
import { useThemeStore } from '../store/themeStore';

interface ToastProps {
    message: string;
    type?: 'error' | 'success' | 'info';
    onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type = 'error', onClose }) => {
    const isDarkMode = useThemeStore((s) => s.isDarkMode);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    const baseClasses = `fixed top-4 right-4 p-4 rounded-lg shadow-lg 
        transform transition-all duration-300 animate-fade-left animate-once
        ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`;

    const typeClasses = {
        error: `border-l-4 border-red-500 ${isDarkMode ? 'bg-red-900/20' : 'bg-red-50'}`,
        success: `border-l-4 border-green-500 ${isDarkMode ? 'bg-green-900/20' : 'bg-green-50'}`,
        info: `border-l-4 border-blue-500 ${isDarkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`
    };

    return (
        <div className={`${baseClasses} ${typeClasses[type]}`}>
            <div className="flex items-center gap-3">
                {type === 'error' && (
                    <svg className="w-5 h-5 text-red-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                )}
                {type === 'success' && (
                    <svg className="w-5 h-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                )}
                {type === 'info' && (
                    <svg className="w-5 h-5 text-blue-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                )}
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Toast;
