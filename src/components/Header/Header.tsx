import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Grid, Button, AppBar, Box } from '@mui/material';
import { LanguageButton } from '../language/LanguageButton';
import { ReactComponent as LogoIcon } from '../../images/icon.svg';

export const Header = () => {
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
    ],
    [],
  );
  
  return (
    <>
      <AppBar sx={{ position: { md: 'static', xs: 'fixed' }}}>
        <Grid
          container
          sx={{
            height: { md: 120 },
            justifyContent: 'space-between',
            alignItems: 'center',
            m: 'auto',
            maxWidth: 1200
          }}
        >
          <Grid item xs={1}>
            <Link to="/">
              <Box display="flex" alignItems="center">
                <LogoIcon height={26} />
              </Box>
            </Link>
          </Grid>
          <Grid item xs={6} display={{ md: 'flex', xs: 'none' }}>
            <Grid container sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
              {menu.map(item =>  (
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
          <Grid item xs={1}>
            <LanguageButton />
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
