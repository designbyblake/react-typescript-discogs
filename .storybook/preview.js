import '../src/assets/styles/global.scss';
import { BrowserRouter } from 'react-router-dom';

export const decorators = [(Story) => <BrowserRouter>{Story()}</BrowserRouter>];

const customViewports = {
  phoneShort: {
    name: 'Phone Short',
    styles: {
      width: '375px',
      height: '667px'
    }
  },
  phone: {
    name: 'Phone',
    styles: {
      width: '375px',
      height: '812px'
    }
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px'
    }
  },
  iPadPro: {
    name: 'iPad Pro',
    styles: {
      width: '1024px',
      height: '1366px'
    }
  },
  desktopLarge: {
    name: 'Desktop Large',
    styles: {
      width: '1366px',
      height: '1366px'
    }
  }
};

export const parameters = {
  viewport: { viewports: customViewports },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
