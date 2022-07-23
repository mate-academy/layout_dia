import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Box, useTheme, Typography, Button, IconButton } from '@mui/material'; // , Box

import { ReactComponent as CardArrowRight } from '../../images/card-arrow-right.svg';

export const Services = () => {
  const { t } = useTranslation('common');
  const { palette } = useTheme();

  const cards = useMemo(() => [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
  ], []);

  return (
    <>
      <Grid container sx={{ maxWidth: 1200, mx: 'auto', py: 8 }}>
        <Grid item xs={6}>
          <Grid container sx={{ mx: 'auto' }}>
            <Grid item xs={7} sx={{ pt: 16 }}>
              <Typography variant="h6" sx={{ color: palette.text.disabled }}>{t('landings.services.title')}</Typography>
              <Grid sx={{ pt: 2 }}>
                <Typography variant="h4" sx={{ color: palette.secondary.main }}>{t('landings.services.content')}</Typography>
              </Grid>
              <Grid sx={{ pt: 3 }}>
                <Typography variant="subtitle1" sx={{ color: palette.text.secondary }}>
                  {t('landings.services.subcontent.p1')}
                </Typography>
              </Grid>
              <br />
              <Typography variant="subtitle1" sx={{ color: palette.text.secondary }}>
                  {t('landings.services.subcontent.p2')}
                </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={2} xs={6}>
          <Grid container>
            <Grid item sx={{ pt: 18 }}>
              {cards.filter(el => el.id === 1 || el.id === 3).map(item => (
                <Grid key={item.id} sx={{ borderRadius: 5, height: 264, width: 264, mt: 4, bgcolor: 'white', p: 4 }}>
                  <Box sx={{ borderRadius: 5, bgcolor: 'rgb(228,234,254)', width: 48, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: palette.secondary.light }}>
                      {`00${item.id}`}
                    </Typography>
                  </Box>
                  <br />
                  {cards.map(el => (
                    <Typography key={el.id} variant="body2" sx={{ color: palette.text.secondary }}>
                      {t(`landings.services.cards.card${item.id}.p${el.id}`)}
                    </Typography>
                  ))}
                  <br />
                  <Grid container sx={{ pt: 2.2 }}>
                    <Grid item>
                      <Button variant="outlined" sx={{ p: 0, borderColor: 'transparent', textTransform: 'none' }} size="medium" startIcon={
                          <IconButton
                            sx={{
                              bgcolor: 'blue',
                              height: 40,
                              width: 40,
                              ':hover': {
                                bgcolor: 'blue',
                              },
                              borderRadius: '50%',
                              display: 'flex',
                              justifyContent: 'center'
                            }}
                          >
                            <CardArrowRight style={{ height: 16, width: 16 }} />
                          </IconButton>
                      }>
                        <Typography variant="subtitle2" sx={{ color: '#334563', px: 2 }}>{t('buttons.more')}</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>

            <Grid item  sx={{ pl: 4 }}>
              {cards.filter(el => el.id === 2 || el.id === 4).map(item => (
                <Grid key={item.id} sx={{ borderRadius: 5, height: 264,width: 264, mt: 4, bgcolor: 'white', p: 4 }}>
                  <Box sx={{ borderRadius: 5, bgcolor: 'rgb(228,234,254)', width: 48, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: palette.secondary.light }}>
                      {`00${item.id}`}
                    </Typography>
                  </Box>
                  <br />
                  {cards.map(el => (
                    <Typography key={el.id} variant="body2" sx={{ color: palette.text.secondary }}>
                      {t(`landings.services.cards.card${item.id}.p${el.id}`)}
                    </Typography>
                  ))}
                  <br />
                  <Grid container sx={{ pt: 2.2 }}>
                    <Grid item>
                      <Button variant="outlined" sx={{ p: 0, borderColor: 'transparent', textTransform: 'none' }} size="medium" startIcon={
                        <IconButton  sx={{ bgcolor: 'blue', ':hover': { bgcolor: 'blue' }, height: 40, width: 40, borderRadius: '50%', display: 'flex', justifyContent: 'center' }}>
                          <CardArrowRight style={{ height: 16, width: 16 }} />
                        </IconButton>
                      }>
                        <Typography variant="subtitle2" sx={{ color: '#334563', px: 2 }}>{t('buttons.more')}</Typography>
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
