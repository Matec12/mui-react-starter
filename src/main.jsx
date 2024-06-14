import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AuthProvider } from './contexts/AuthContext';
import { SettingsConsumer, SettingsProvider } from './contexts/SettingsContext';
import ThemeComponent from './theme/ThemeComponent';
/* in component below isa sample of how to customize 
external libraries by leveraging MUI's styled utility */
import { ReactHotToast } from './styles/libs';
import App from './App';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={client}>
    <HelmetProvider>
      <AuthProvider>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={settings}>
                  <App />
                  <ReactHotToast>
                    <Toaster position="top-right" toastOptions={{ className: 'react-hot-toast' }} />
                  </ReactHotToast>
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </HelmetProvider>
  </QueryClientProvider>
);
