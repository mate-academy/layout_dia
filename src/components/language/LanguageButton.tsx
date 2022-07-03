import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';

import { useLanguage } from './useLanguage';

export const LanguageButton = () => {
  const { i18n } = useTranslation('common');
  const language = useLanguage();

  const changeLanguage = async () => {
    await i18n.changeLanguage(language === 'ua' ? 'en' : 'ua');
  };

  const textLanguage = language === 'ua' ? 'ua' : 'eng';

  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={changeLanguage}
      sx={{ ':hover': { borderColor: 'blue' } }}
    >
      {textLanguage}
    </Button>
  );
};
