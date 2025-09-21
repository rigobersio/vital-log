import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaLinkedin, FaGithub, FaGlobe, FaWhatsapp } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { signInWithPopup, signOut, auth, provider } from '../firebase';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';

import Toast from './Toast';

const Login: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const setAuthenticated = useAuthStore((s: any) => s.setAuthenticated);
    const useThemeStoreResponse = useThemeStore();
    const { t } = useTranslation();
    const patientName = import.meta.env.VITE_PATIENT_NAME || 'Osvaldo';

    const handleLogin = async () => {
        try {
            await signOut(auth);
            provider.setCustomParameters({
                prompt: 'select_account'
            });
            const result = await signInWithPopup(auth, provider);
            if (result.user) {
                setAuthenticated(true);
            }
        } catch (error) {
            setError(t('loginError'));
        }
    };

    const formatPatientName = (name: string) => {
        return name.split(' ').map((word: string, i: number) => (
            <span key={i} className="font-medium text-blue-600 dark:text-blue-400">
                {word}{' '}
            </span>
        ));
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            {error && (
                <Toast
                    message={error}
                    type="error"
                    onClose={() => setError(null)}
                />
            )}

            <div className="w-full max-w-sm sm:max-w-md mx-auto overflow-hidden bg-white/70 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                    <div className="relative w-28 h-28 mx-auto floating">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-75" />
                        <img
                            src="https://res.cloudinary.com/dqh2illb5/image/upload/v1715016763/myPerfil/1710771555673_Git-Hub_unujoi.jpg"
                            alt="Rigoberto"
                            className="relative w-full h-full rounded-full border-4 border-white/50 dark:border-gray-700/50 shadow-md object-cover"
                        />
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                            {t('welcome')}
                        </h2>
                        <div className="space-y-1">
                            <p className="text-base text-gray-600 dark:text-gray-300">
                                {t('patientInfo', { name: '' })}
                                {formatPatientName(patientName)}
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider">
                                {t('developedBy')}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a href="https://www.linkedin.com/in/rigoberto-martinez/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors duration-300 hover-lift">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="https://github.com/rigobersio" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 hover-lift">
                            <FaGithub size={24} />
                        </a>
                        <a href="https://porfolio-rigoberto.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors duration-300 hover-lift">
                            <FaGlobe size={24} />
                        </a>
                        <a href="https://w.app/py1fdb" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500 transition-colors duration-300 hover-lift">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleLogin}
                            className="w-full gradient-button font-bold py-3 px-6 rounded-lg text-lg flex items-center justify-center gap-3 transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                        >
                            <FcGoogle className="w-6 h-6" />
                            {t('continueWithGoogle')}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
