import { useMemo } from 'react';
import { Grid, Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';


import whatwedo1 from '../../images/what-we-do-1.jpg';
import whatwedo2 from '../../images/what-we-do-2.jpg';
import whatwedo3 from '../../images/what-we-do-3.jpg';
 
export const AboutUs = () => {
  const { palette } = useTheme();
  const { t } = useTranslation('common');

  const weDo = useMemo(
    () => [
      {
        image: whatwedo1,
        id: 1,
      },
      {
        image: whatwedo2,
        id: 2,
      },
      {
        image: whatwedo3,
        id: 3,
      },
    ], [],
  );

  return (
    <>
      <Grid container sx={{ flexDirection: 'column', py: 18.5 }}>
        <Box sx={{ mx: 'auto' }}>
          <Typography variant="h4" sx={{ color: palette.secondary.main, px: 10 }}>
            {t('landings.whoWeAre.title')}
          </Typography>
        </Box>
        <Box sx={{ maxWidth: 754, mx: 'auto', pt: 2, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ color: palette.text.secondary }}>
            {t('landings.whoWeAre.description')}
          </Typography>
        </Box>
      </Grid>

      <Grid container sx={{ bgcolor: 'white', flexDirection: 'column', pt: 17, borderRadius: 7 }}>
        <Box sx={{ mx: 'auto' }}>
          <Typography variant="h3">{t('landings.whatWeDo.title')}</Typography>
        </Box>
        <Box sx={{ mx: 'auto', display: 'flex', justifyContent: 'space-between', minWidth: '1200px', p: 17 }}>
          {weDo.map(item => (
            <Box key={item.id} sx={{ width: 264 }}>
              <Box sx={{
                mx: 'auto', backgroundImage: { xs: `url(${item.image})`}, backgroundRepeat: 'no-repeat', borderRadius: 7, height: '180px', width: '180px', backgroundSize: 'cover', objectPosition: 'center', objectFit: 'cover' }}></Box>
              <Box>
                <Typography variant="body1" sx={{ textAlign: 'center', pt: 5 }}>
                  {t(`landings.whatWeDo.description.head${item.id}`)}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: 'center', pt: 2, color: palette.text.secondary }}>
                  {t(`landings.whatWeDo.description.text${item.id}`)}
                </Typography>
              </Box>
            </Box>
          ))}
          
        </Box>
      </Grid>
    </>
  )
};
