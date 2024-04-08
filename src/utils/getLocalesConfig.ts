export async function getLocalesConfig(locale: string) {
  let messages;

  try {
    messages = (await import(`../lib/locales/${locale}.json`)).default;
  } catch (error) {
    console.error('Failed to load messages:', error);
  }

  return messages;
}
