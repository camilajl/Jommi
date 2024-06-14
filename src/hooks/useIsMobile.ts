import { useCallback, useState } from 'react';

const useIsMobile = () => {
  const [isMobileDevice, setIsMobileDevice] = useState(
    window?.innerWidth >= 350 && window?.innerWidth <= 767
  );

  const handleWindowResize = useCallback(() => {
    setIsMobileDevice(window?.innerWidth >= 350 && window?.innerWidth <= 767);
  }, []);

  window.addEventListener('resize', handleWindowResize);

  const cleanup = () => {
    window.removeEventListener('resize', handleWindowResize);
  };

  window.addEventListener('beforeunload', cleanup);

  return { isMobileDevice };
};

export { useIsMobile };
