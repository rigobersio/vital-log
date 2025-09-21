import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    es: {
        translation: {
            welcome: "Bienvenido a Vital Log",
            developedBy: "Desarrollado por Rigoberto",
            continueWithGoogle: "Continuar con Google",
            loginError: "Error al iniciar sesión",
            controlPanel: "Panel de Control",
            logout: "Cerrar sesión",
            vitalStats: "Constantes Vitales",
            downloadPDF: "Descargar PDF",
            theme: {
                lightMode: "Modo claro",
                darkMode: "Modo oscuro"
            }
        }
    },
    en: {
        translation: {
            welcome: "Welcome to Vital Log",
            developedBy: "Developed by Rigoberto",
            continueWithGoogle: "Continue with Google",
            loginError: "Login error",
            controlPanel: "Control Panel",
            logout: "Logout",
            vitalStats: "Vital Stats",
            downloadPDF: "Download PDF",
            theme: {
                lightMode: "Light mode",
                darkMode: "Dark mode"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
