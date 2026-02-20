import { useState, useCallback } from 'react';
import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js';

import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.REACT_APP_SECRET_KEY;

const useStorageHook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Simple encryption/decryption functions
    const encrypt = useCallback((data) => {
        try {
            const text = typeof data === 'string' ? data : JSON.stringify(data);
            const encrypted = CryptoJS.AES.encrypt(text, SECRET_KEY).toString();
            return encrypted;
        } catch (error) {
            console.error('Encryption error:', error);
            return data;
        }
    }, []);

    const decrypt = useCallback((encryptedData) => {
        try {
            const decrypted = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY).toString(CryptoJS.enc.Utf8);
            return decrypted;
        } catch (error) {
            console.error('Decryption error:', error);
            return encryptedData;
        }
    }, []);

    // Store data in specified storage type
    const storeData = useCallback(({
        storageType = 'LOCAL_STORAGE',
        key,
        value,
        encryptData = false,
        cookieOptions = {}
    }) => {
        try {
            const dataToStore = encryptData ? encrypt(value) : value;
            const stringValue = typeof dataToStore === 'string' ? dataToStore : JSON.stringify(dataToStore);

            switch (storageType.toLowerCase()) {
                case 'LOCAL_STORAGE':
                    localStorage.setItem(key, stringValue);
                    break;
                case 'SESSION_STORAGE':
                    sessionStorage.setItem(key, stringValue);
                    break;
                case 'COOKIE':
                    Cookies.set(key, stringValue, cookieOptions);
                    break;
                default:
                    throw new Error(`Unsupported storage type: ${storageType}`);
            }
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }, [encrypt]);

    // Retrieve data from specified storage type
    const getData = useCallback(({
        storageType = 'LOCAL_STORAGE',
        key,
        decryptData = false,
    }) => {
        try {
            let storedValue;

            switch (storageType.toLowerCase()) {
                case 'LOCAL_STORAGE':
                    storedValue = localStorage.getItem(key);
                    break;
                case 'SESSION_STORAGE':
                    storedValue = sessionStorage.getItem(key);
                    break;
                case 'COOKIE':
                    storedValue = Cookies.get(key);
                    break;
                default:
                    throw new Error(`Unsupported storage type: ${storageType}`);
            }

            if (storedValue === null || storedValue === undefined) {
                return null;
            }

            if (decryptData) {
                const decryptedValue = decrypt(storedValue);
                try {
                    return JSON.parse(decryptedValue);
                } catch {
                    return decryptedValue;
                }
            }

            try {
                return JSON.parse(storedValue);
            } catch {
                return storedValue;
            }
        } catch (error) {
            console.error('Retrieval error:', error);
            return null;
        }
    }, [decrypt]);

    // Remove data from specified storage type
    const removeData = useCallback(({
        storageType = 'LOCAL_STORAGE',
        key
    }) => {
        try {
            switch (storageType.toLowerCase()) {
                case 'LOCAL_STORAGE':
                    localStorage.removeItem(key);
                    break;
                case 'SESSION_STORAGE':
                    sessionStorage.removeItem(key);
                    break;
                case 'COOKIE':
                    Cookies.remove(key);
                    break;
                default:
                    throw new Error(`Unsupported storage type: ${storageType}`);
            }
            return true;
        } catch (error) {
            console.error('Removal error:', error);
            return false;
        }
    }, []);

    // Clear all data from specified storage type
    const clearStorage = useCallback((storageType = 'LOCAL_STORAGE') => {
        try {
            switch (storageType.toLowerCase()) {
                case 'LOCAL_STORAGE':
                    localStorage.clear();
                    break;
                case 'SESSION_STORAGE':
                    sessionStorage.clear();
                    break;
                case 'COOKIE':
                    Object.keys(Cookies.get()).forEach(cookieName => {
                        Cookies.remove(cookieName);
                    });
                    break;
                default:
                    throw new Error(`Unsupported storage type: ${storageType}`);
            }
            return true;
        } catch (error) {
            console.error('Clear storage error:', error);
            return false;
        }
    }, []);

    // Legacy function for backward compatibility
    const handleStorage = useCallback((key, value) => {
        return storeData({ key, value });
    }, [storeData]);

    return {
        // Enhanced storage functions
        storeData,
        getData,
        removeData,
        clearStorage,
        
        // Encryption utilities
        encrypt,
        decrypt,
        
        // Legacy function
        handleStorage,
        
        // State
        isLoggedIn,
        setIsLoggedIn
    };
};

export default useStorageHook;