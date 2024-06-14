import { createContext, useState, useEffect } from 'react';
import themeConfig from '@/config/theme';

const initialSettings = {
  themeColor: 'primary',
  mode: themeConfig.mode
};

const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = { ...JSON.parse(storedData)};
    } else {
      settings = initialSettings;
    }
  } catch (err) {
    console.error(err);
  }

  return settings;
};

const storeSettings = (settings) => {
  const initSettings = Object.assign({}, settings);
  window.localStorage.setItem('settings', JSON.stringify(initSettings));
};

export const SettingsContext = createContext({
  saveSettings: () => null,
  settings: initialSettings
});

export const SettingsProvider = ({ children, pageSettings }) => {
  const [settings, setSettings] = useState({ ...initialSettings });

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setSettings({ ...restoredSettings });
    }
    if (pageSettings) {
      setSettings({ ...settings, ...pageSettings });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageSettings]);

  const saveSettings = (updatedSettings) => {
    storeSettings(updatedSettings);
    setSettings(updatedSettings);
  };

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const SettingsConsumer = SettingsContext.Consumer;
