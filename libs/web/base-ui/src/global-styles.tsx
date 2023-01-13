import { Global } from '@mantine/core';

const GlobalStyles = () => (
  <Global
    styles={() => ({
      '*, *::before, *::after': {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      body: {
        overflowX: 'hidden',
      },
      '#__next': {
        width: '100vw',
        height: '100vh',
      },
    })}
  />
);

export { GlobalStyles };
