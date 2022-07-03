import { Grid, Box, Typography, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import shapes1 from '../../images/Shapes.png';

export const Shapes = () => {
  const { t } = useTranslation('common');

  return (
    <Grid sx={{ bgcolor: 'white', textAlign: 'center' }}>
      <Grid container sx={{ backgroundImage: { xs: `url(${shapes1})`}, backgroundRepeat: 'no-repeat', height: 700, backgroundPosition: 'center', objectPosition: 'center', objectFit: 'fill' }}>
        <Box sx={{ mx: 'auto' }}>
          <Typography variant="h3" sx={{ color: '#253757', pt: 20 }}>{t('landings.shapes.title')}</Typography>
          <Typography variant="h5" sx={{ pt: 3, pb: 8, maxWidth: 750, mx: 'auto', color: 'gray' }}>{t('landings.shapes.subtitle')}</Typography>
          <Button variant="contained">
            <Typography variant="subtitle2" sx={{ color: 'white' }}>{t('buttons.apply')}</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
