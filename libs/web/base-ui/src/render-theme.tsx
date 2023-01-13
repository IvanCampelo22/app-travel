import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from './theme-provider';

const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(<ThemeProvider>{children}</ThemeProvider>);
};

export { renderWithTheme };
