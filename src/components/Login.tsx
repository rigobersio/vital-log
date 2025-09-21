import React from 'react';
import { signInWithPopup, auth, provider } from '../firebase';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';

const Login: React.FC = () => {
    const setAuthenticated = useAuthStore((s: any) => s.setAuthenticated);
    const isDarkMode = useThemeStore((s) => s.isDarkMode);

    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, provider);
            setAuthenticated(true);
        } catch (error) {
            alert('Error al iniciar sesión');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-lg shadow-md w-full max-w-md transition-colors duration-200`}>
                <div className="text-center mb-8">
                    <img
                        src="https://res.cloudinary.com/dqh2illb5/image/upload/v1715016763/myPerfil/1710771555673_Git-Hub_unujoi.jpg"
                        alt="Rigoberto"
                        className="mx-auto h-32 w-32 rounded-full border-4 border-blue-500 shadow-lg mb-4"
                    />
                    <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Bienvenido a Vital Log
                    </h2>
                    <p className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Desarrollado por Rigoberto
                    </p>
                    <div className="flex justify-center gap-4 mt-4">
                        <a href="https://www.linkedin.com/in/rigoberto-martinez/" target="_blank" rel="noopener noreferrer"
                            className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>
                            <i className="bi bi-linkedin"></i>
                        </a>
                        <a href="https://github.com/rigobersio" target="_blank" rel="noopener noreferrer"
                            className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'}`}>
                            <i className="bi bi-github"></i>
                        </a>
                        <a href="https://porfolio-rigoberto.vercel.app/" target="_blank" rel="noopener noreferrer"
                            className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-green-400' : 'text-gray-600 hover:text-green-600'}`}>
                            <i className="bi bi-globe"></i>
                        </a>
                        <a href="https://w.app/py1fdb" target="_blank" rel="noopener noreferrer"
                            className={`text-2xl ${isDarkMode ? 'text-gray-400 hover:text-green-500' : 'text-gray-600 hover:text-green-600'}`}>
                            <i className="bi bi-whatsapp"></i>
                        </a>
                    </div>
                </div>
                <button
                    onClick={handleLogin}
                    className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-md shadow-sm transition-colors
            ${isDarkMode
                            ? 'bg-gray-700 text-white hover:bg-gray-600'
                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            fill="#EA4335"
                        />
                    </svg>
                    Continuar con Google
                </button>
            </div>
        </div>
    );
};

export default Login;
