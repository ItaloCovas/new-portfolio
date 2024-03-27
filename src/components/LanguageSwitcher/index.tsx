import ReactCountryFlag from 'react-country-flag';

export function LanguageSwitcher() {
  const currentLanguage = 'pt';

  return (
    <div>
      {currentLanguage === 'pt' ? (
        <ReactCountryFlag
          countryCode="BR"
          svg
          onClick={() => {}}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      ) : (
        <ReactCountryFlag
          countryCode="US"
          svg
          onClick={() => {}}
          className="!h-7 !w-7 cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
}
