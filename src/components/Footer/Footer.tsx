import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Button, AppBar } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { ReactComponent as LogoIcon } from '../../images/icon.svg';

export const Footer = () => {
  const { t } = useTranslation('common');

  const menu = useMemo(
    () => [
      {
        to: '/about-us',
        id: 'aboutUs',
      },
      {
        to: '/services',
        id: 'services',
      },
      {
        to: '/testimonials',
        id: 'testimonials',
      },
      {
        to: '/contact-us',
        id: 'contactUs',
      },
      {
        to: '/',
        id: 'home'
      }
    ],
    [],
  );

  return (
    <AppBar position="static" component="footer">
      <Grid
        container
        sx={{
          maxWidth: 1200,
          m: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: { md: 120 }
        }}
      >
        <Grid item xs={1}>
          <Link to="/">
            <Box display="flex" alignItems="center">
              <LogoIcon height={26} />
            </Box>
          </Link>
        </Grid>
        <Grid item xs={7}>
          <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
            {menu.map(item => (
              <Grid item key={item.id}>
                <Link to={item.to}>
                  <Button variant="text" color="primary" size="small">
                    {t(`links.${item.id}`)}
                  </Button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </AppBar>
  );
};
