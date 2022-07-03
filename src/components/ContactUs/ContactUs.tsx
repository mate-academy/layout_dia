import { useState } from 'react';
import { Grid, Box, Typography, Input, Button, useTheme, Link } from '@mui/material';
import { useTranslation } from 'react-i18next';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import shapes1 from '../../images/Shapes.png';

export const ContactUs = () => {
  const { t } = useTranslation('common');
  const ariaLabel = { 'aria-label': 'description' };
  const { palette } = useTheme();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  console.log(email, name, message);
  

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setEmail('')
    setName('');
    setMessage('');
  };

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onNameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const onMessageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <>
      <Grid sx={{ bgcolor: 'white', textAlign: 'center' }}>
        <Grid container sx={{
          backgroundImage: { xs: `url(${shapes1})`},
          backgroundRepeat: 'no-repeat',
          height: 700,
          backgroundPosition: 'center',
          objectPosition: 'center',
          objectFit: 'fill'
        }}>
          <Box sx={{ mx: 'auto' }}>
            <Typography variant="h3" sx={{ color: '#253757', pt: 20 }}>
              {t('landings.shapes.title')}
            </Typography>
            <Typography variant="h5" sx={{ pt: 3, pb: 8, maxWidth: 750, mx: 'auto', color: 'gray' }}>
              {t('landings.shapes.subtitle')}
            </Typography>
            <Button variant="contained">
              <Typography variant="subtitle2" sx={{ color: 'white' }}>
                {t('buttons.apply')}
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid sx={{ pt: 30, pb: 15, bgcolor: '#2C2C2C', borderRadius: '30px 30px 0 0' }}>
        <Grid container sx={{ mx: 'auto', maxWidth: 1200 }}>
          <Grid item xs={6}>
            <Grid container sx={{ mx: 'auto' }}>
              <Grid item xs={8}>
                <Box sx={{ pb: 4, }}>
                  <Typography variant="h4" sx={{ color: palette.common.white }}>
                    {t('landings.contactUsForm.title')}
                  </Typography>
                </Box>
                <form onSubmit={submitHandler}>
                  <Input
                    id="email"
                    placeholder={t('landings.contactUsForm.emailField')}
                    inputProps={ariaLabel}
                    sx={{ fontSize: 15, width: 460, py: 3 }}
                    onChange={onEmailHandler}
                  />
                  <Input
                    id="name"
                    placeholder={t('landings.contactUsForm.nameField')}
                    inputProps={ariaLabel}
                    sx={{ fontSize: 15, width: 460, py: 3 }}
                    onChange={onNameHandler}
                  />
                  <Input
                    id="message"
                    placeholder={t('landings.contactUsForm.messageField')}
                    inputProps={ariaLabel}
                    sx={{ fontSize: 15, width: 460, py: 3 }}
                    onChange={onMessageHandler}
                  />
                  <Box sx={{ pt: 8 }}>
                    <Button variant="contained" type="submit">
                      <Typography variant="subtitle2" sx={{ color: palette.common.white }}>
                        {t('buttons.send')}
                      </Typography>
                    </Button>
                  </Box>
                </form>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ pb: 4, color: palette.common.white }}>
              <Typography variant="h4">{t('links.contactUs')}</Typography>
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="h6" sx={{ color: palette.text.secondary }}>
                {t('landings.contactUsForm.call')}
              </Typography>
              <Link href="tel:654 321 987" target="_blank">
                <Typography  variant="h5" sx={{ color: palette.common.white }}>
                  {t('landings.contactUsForm.number')}
                </Typography>
              </Link>
            </Box>
            <Box sx={{ pb: 4 }}>
              <Typography variant="h6" sx={{ color: palette.text.secondary }}>
                {t('landings.contactUsForm.visit')}
              </Typography>
              <Link href={t('links.googleMaps')} target="_blank">
                <Typography variant="h5" sx={{ color: palette.common.white }}>
                  {t('landings.contactUsForm.address')}
                </Typography>
              </Link>
            </Box>
            <Box>
              <Typography variant="h6" sx={{ color: palette.text.secondary }}>
                {t('landings.contactUsForm.socials')}
              </Typography>
              <Grid container sx={{ pt: 1 }}>
                <Grid item sx={{ pr: 4 }}>
                  <Link href={t('links.facebook')} target="_blank">
                    <FacebookIcon />
                  </Link>
                </Grid>
                <Grid item sx={{ pr: 4 }}>
                  <Link href={t('links.twitter')} target="_blank">
                    <TwitterIcon />
                  </Link>
                </Grid>
                <Grid item>
                  <Link href={t('links.instagram')} target="_blank" >
                    <InstagramIcon />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
