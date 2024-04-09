import { useLocale } from 'next-intl';
import ReactCountryFlag from 'react-country-flag';

export function LanguageSwitcher() {
  const locale = useLocale();

  console.log(locale);

  return (
    <div>
      {locale === 'pt' ? (
        <ReactCountryFlag
          countryCode="BR"
          svg
          onClick={() => {}}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      ) : locale === 'en' ? (
        <ReactCountryFlag
          countryCode="US"
          svg
          onClick={() => {}}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      ) : (
        <ReactCountryFlag
          countryCode="ES"
          svg
          onClick={() => {}}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
}
