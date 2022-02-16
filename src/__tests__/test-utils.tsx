/* eslint-disable react/prop-types */
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { render, RenderOptions } from '@testing-library/react';
import theme from '../styles/theme';

// eslint-disable-next-line react/function-component-definition
const Providers: React.FC = ({ children }) => {
  return (
    <MemoryRouter>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MemoryRouter>
  );
};

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
