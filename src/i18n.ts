import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }: { locale: string }) => ({
  messages: (await import(`./lib/locales/${locale}.json`)).default
}));
