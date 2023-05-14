import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      document.documentElement.classList.remove('dark'); // Reset dark mode on page change
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

  return (
    <ThemeProvider attribute="class"> {/* Enable theme switching with class */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
