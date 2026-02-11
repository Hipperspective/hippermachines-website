export const locales = ['de', 'en', 'ja', 'ko', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'de';
