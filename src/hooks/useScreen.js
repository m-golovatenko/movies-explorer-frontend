import { useEffect, useState } from 'react';

function useScreen() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', resizeTimer, false);
    let timer;
    function resizeTimer() {
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          handleWindowResize();
        }, 0);
      }
    }

    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return { width };
}

export default useScreen;
