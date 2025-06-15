import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash && hash.length > 1) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80; // hauteur du header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', scrollToHash);
    // On mount (si déjà un hash)
    scrollToHash();
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 