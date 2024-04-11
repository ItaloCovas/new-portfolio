'use client';
import { useLocale } from 'next-intl';
import { useParams, usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import ReactCountryFlag from 'react-country-flag';

export function LanguageSwitcher() {
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  function switchLocale(newLocale: string) {
    const newPathname = pathname.startsWith(`/${locale}`)
      ? pathname.replace(`/${locale}`, `/${newLocale}`)
      : `/${newLocale}`;
    router.replace(newPathname);
  }

  return (
    <div>
      {locale === 'pt' ? (
        <ReactCountryFlag
          countryCode="BR"
          svg
          className="!h-7 !w-7 cursor-pointer rounded-lg"
          onClick={() => {
            switchLocale('en');
          }}
        />
      ) : locale === 'en' ? (
        <ReactCountryFlag
          countryCode="US"
          svg
          onClick={() => {
            switchLocale('es');
          }}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      ) : (
        <ReactCountryFlag
          countryCode="ES"
          svg
          onClick={() => {
            switchLocale('pt');
          }}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
}
