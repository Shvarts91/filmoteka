import { useState, useEffect } from "react";

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
        } catch (error) {
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        const handleStorageChange = (event) => {
            if (event.key === key) {
                setValue(JSON.parse(event.newValue));
            }
        };

        // Listen for the custom "syncLocalStorage" event
        const handleCustomEvent = (event) => {
            if (event.detail.key === key) {
                setValue(event.detail.value);
            }
        };

        window.addEventListener("storage", handleStorageChange);
        window.addEventListener("syncLocalStorage", handleCustomEvent);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
            window.removeEventListener("syncLocalStorage", handleCustomEvent);
        };
    }, [key]);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));

        // Dispatch the custom "syncLocalStorage" event to notify other components
        const event = new CustomEvent("syncLocalStorage", {
            detail: { key, value },
        });
        window.dispatchEvent(event);
    }, [value, key]);

    return [value, setValue];
};
