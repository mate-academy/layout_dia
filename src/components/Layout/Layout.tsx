import { ReactNode } from 'react';
import { Box, useTheme } from '@mui/material';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import './Layout.scss';

export interface LayoutProps {
  readonly children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { palette } = useTheme();

  return (
    <>
      <Box sx={{ bgcolor: palette.grey[300] }}>
        <Header />
          {children}
        <Footer />
      </Box>
    </>
  );
};
