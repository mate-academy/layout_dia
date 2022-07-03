import { useMemo } from 'react';
import { Grid, Typography, Box, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

import testimonialPerson1 from '../../images/testimonial-1.jpg';
import testimonialPerson2 from '../../images/testimonial-2.jpg';
import testimonialPerson3 from '../../images/testimonial-3.jpg';

import { ReactComponent as InvertedDoubleQuotes } from '../../images/inverted-double-quotes.svg'

export const Testimonials = () => {
  const { t } = useTranslation('common');
  const { palette } = useTheme();

  const people = useMemo(
    () => [
      {
        id: 1,
        image: testimonialPerson1
      },
      {
        id: 2,
        image: testimonialPerson2
      },
      {
        id: 3,
        image: testimonialPerson3
      }
    ], []
  );

  return (
    <>
      <Grid container sx={{ mx: 'auto', justifyContent: 'center', pb: 18.5 }}>
        <Grid item>
          <Grid container sx={{ mx: 'auto', maxWidth: 1200 }}>
            <Grid item xs={12} sx={{ pt: 15 }}>
              <Typography variant="h6" sx={{ color: palette.text.disabled }}>
                {t('landings.testimonials.title')}
              </Typography>
              <Grid sx={{ pt: 2 }}>
                <Typography variant="h4" sx={{ color: palette.secondary.main}}>
                  {t('landings.testimonials.content1')}
                </Typography>
                <Typography variant="h4" sx={{ color: palette.secondary.main}}>
                  {t('landings.testimonials.content2')}
                </Typography>
              </Grid>
            </Grid>
            <Grid item sx={{ pt: 10, display: 'flex', fustifyContent: 'space-between', width: '100%' }}>
              <Grid container sx={{ justifyContent: 'space-between' }}>
                {people.map(person => (
                <Grid key={person.id} item sx={{ backgroundColor: 'white', borderRadius: 5, textAlign: 'center', width: 360, p: 0 }}>
                    <Grid sx={{ px: 7, py: 4 }}>
                      <Box sx={{
                        height: 250,
                        width: 250,
                        mx: 'auto',
                        backgroundImage: { xs: `url(${person.image})`},
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '50%',
                        backgroundSize: 'cover',
                        objectFit: 'fill'
                      }}/>
                      <Box sx={{ pt: 4 }}><InvertedDoubleQuotes /></Box>
                      <Typography variant="body2" sx={{ color: palette.text.secondary, pt: 1.2 }}>
                        {t(`landings.testimonials.people.person${person.id}.comment`)}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#253757', pt: 2 }}>
                        {t(`landings.testimonials.people.person${person.id}.name`)}
                      </Typography>
                      <Typography variant="h6" sx={{ color: palette.text.disabled }}>
                        {t(`landings.testimonials.people.person${person.id}.specialize`)}
                      </Typography>
                    </Grid>
                </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
