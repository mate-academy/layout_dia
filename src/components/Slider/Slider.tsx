import { useMemo, useState } from 'react';
import { Grid, IconButton, Typography, useTheme, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

import slide1 from '../../images/slide-1.png';
import slide2 from '../../images/slide-2.png';
import slide3 from '../../images/slide-3.png';
import { ReactComponent as ArrowLeft } from '../../images/arrow-left.svg';
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg';


export const Slider = () => {
  const { t } = useTranslation('common');
  const { palette } = useTheme();

  const [currentImageId, setCurrentImageId] = useState(1);

  const slides = useMemo(
    () => [
      {
        id: 1,
        image: slide1,
      },
      {
        id: 2,
        image: slide2,
      },
      {
        id: 3,
        image: slide3
      }
    ], []
  );

  console.log(setCurrentImageId);
  const previousSlide = () => {
    if (currentImageId === 1) {
      return;
    }
    
    setCurrentImageId(currentImageId - 1)
  }
  const nextSlide = () => {
    if (currentImageId === 3) {
      return;
    }
    
    setCurrentImageId(currentImageId + 1)
  }
  

  return (
    <Grid
      container
      sx={{ bgcolor: palette.primary.main, borderRadius: '0 0 30px 30px' }}
    >
      <Grid container sx={{ mx: 'auto', maxWidth: 1200 }}>
        <Grid item sx={{ height: 680, pt: 15, bgcolor: '#2C2C2C' }}>
            <Grid item xs={7}>
              <Typography variant="h1">
                {t('landings.sliderContent.title')}
              </Typography>
              <Typography variant="h2" sx={{ pt: 4, pb: 10 }}>
                {t('landings.sliderContent.description')}
              </Typography>
              <Button variant="contained">
                <Typography variant="subtitle2" sx={{ color: 'white' }}>
                  {t('buttons.more')}
                </Typography>
              </Button>
            </Grid>
          
        </Grid>
        {/* slider start */}
        {slides.filter(el => el.id === currentImageId).map(item => (
          <Grid key={item.id} item xs={6} sx={{
            display: 'flex',
            position: 'absolute',
            height: 680,
            width: '100%',
            right: 0,
            left: '50%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            backgroundImage: `url(${item.image})`,
            backgroundRepeat: 'no-repeat',
            borderRadius: '26px 0 26px 0',
            backgroundSize: 'cover',
            objectPosition: 'center',
            objectFit: 'cover',
          }}>
            <Grid>
              <Grid container sx={{ p: 6 }}>
                <Grid item sx={{ p: 2, my: 'auto' }}>
                  <Grid>
                    <Grid
                      display={{ xs: 'flex' }}
                      justifyContent="center"
                      height={{ md: 32 }}
                      width={{ md: 32 }}
                      sx={{ bgcolor: 'white', borderRadius: '50%', my: 'auto' }}
                    >
                      <IconButton onClick={previousSlide}>
                        <ArrowLeft style={{ width: 10, height: 10 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ p: 2, my: 'auto' }}>
                  <Grid>
                    <Grid
                      display={{ xs: 'flex' }}
                      justifyContent="center"
                      height={{ md: 32 }}
                      width={{ md: 32 }}
                      sx={{ bgcolor: 'white', borderRadius: '50%', my: 'auto'}}
                    >
                      <IconButton onClick={nextSlide}>
                        <ArrowRight style={{ width: 10, height: 10 }} />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item sx={{ p: 2 }}>
                  <Grid>
                    <Typography variant="h6" sx={{ pb: 2, color: palette.common.white }}>
                      {t('landings.sliderContent.subtitle')}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ maxWidth: 264, color: palette.common.white }}>
                      {t('landings.sliderContent.subtext')}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        ))}
        {/* slider end */}
        </Grid>
      </Grid>
  );
};
