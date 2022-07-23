import { useTranslation } from 'react-i18next';

export const useLanguage = (): 'ua' | 'en' => {
  const { i18n } = useTranslation('common');

  if (i18n.language === 'ua') {
    return i18n.language;
  }

  return 'en';
};
