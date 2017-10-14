import I18n from 'react-native-i18n';
import { en } from './en';
import { sk } from './sk';

I18n.fallbacks = true;
I18n.defaultLocale = 'en';
I18n.translations = {
  en,
  sk,
};
