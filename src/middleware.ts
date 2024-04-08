import createMiddleware from 'next-intl/middleware';
import { validLocales } from './lib/locales/validLocales';

export default createMiddleware({
  locales: validLocales,
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/((?!api|_next_|vercel|.*\\..*).*)']
};
