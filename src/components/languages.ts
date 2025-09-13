export interface Language {
  code: string;
  name: string;
  flag: string;
  nativeName?: string;
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en-US", name: "English (US)", flag: "🇺🇸", nativeName: "English" },
  { code: "en-GB", name: "English (UK)", flag: "🇬🇧", nativeName: "English" },
  { code: "en-AU", name: "English (AU)", flag: "🇦🇺", nativeName: "English" },
  { code: "es-ES", name: "Spanish (Spain)", flag: "🇪🇸", nativeName: "Español" },
  { code: "es-MX", name: "Spanish (Mexico)", flag: "🇲🇽", nativeName: "Español" },
  { code: "es-AR", name: "Spanish (Argentina)", flag: "🇦🇷", nativeName: "Español" },
  { code: "fr-FR", name: "French", flag: "🇫🇷", nativeName: "Français" },
  { code: "fr-CA", name: "French (Canada)", flag: "🇨🇦", nativeName: "Français" },
  { code: "de-DE", name: "German", flag: "🇩🇪", nativeName: "Deutsch" },
  { code: "it-IT", name: "Italian", flag: "🇮🇹", nativeName: "Italiano" },
  { code: "pt-BR", name: "Portuguese (Brazil)", flag: "🇧🇷", nativeName: "Português" },
  { code: "pt-PT", name: "Portuguese (Portugal)", flag: "🇵🇹", nativeName: "Português" },
  { code: "ru-RU", name: "Russian", flag: "🇷🇺", nativeName: "Русский" },
  { code: "ja-JP", name: "Japanese", flag: "🇯🇵", nativeName: "日本語" },
  { code: "ko-KR", name: "Korean", flag: "🇰🇷", nativeName: "한국어" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳", nativeName: "中文" },
  { code: "zh-TW", name: "Chinese (Traditional)", flag: "🇹🇼", nativeName: "中文" },
  { code: "zh-HK", name: "Chinese (Hong Kong)", flag: "🇭🇰", nativeName: "中文" },
  { code: "ar-SA", name: "Arabic", flag: "🇸🇦", nativeName: "العربية" },
  { code: "ar-EG", name: "Arabic (Egypt)", flag: "🇪🇬", nativeName: "العربية" },
  { code: "hi-IN", name: "Hindi", flag: "🇮🇳", nativeName: "हिन्दी" },
  { code: "tr-TR", name: "Turkish", flag: "🇹🇷", nativeName: "Türkçe" },
  { code: "pl-PL", name: "Polish", flag: "🇵🇱", nativeName: "Polski" },
  { code: "nl-NL", name: "Dutch", flag: "🇳🇱", nativeName: "Nederlands" },
  { code: "sv-SE", name: "Swedish", flag: "🇸🇪", nativeName: "Svenska" },
  { code: "da-DK", name: "Danish", flag: "🇩🇰", nativeName: "Dansk" },
  { code: "no-NO", name: "Norwegian", flag: "🇳🇴", nativeName: "Norsk" },
  { code: "fi-FI", name: "Finnish", flag: "🇫🇮", nativeName: "Suomi" },
  { code: "cs-CZ", name: "Czech", flag: "🇨🇿", nativeName: "Čeština" },
  { code: "hu-HU", name: "Hungarian", flag: "🇭🇺", nativeName: "Magyar" },
  { code: "ro-RO", name: "Romanian", flag: "🇷🇴", nativeName: "Română" },
  { code: "bg-BG", name: "Bulgarian", flag: "🇧🇬", nativeName: "Български" },
  { code: "hr-HR", name: "Croatian", flag: "🇭🇷", nativeName: "Hrvatski" },
  { code: "sk-SK", name: "Slovak", flag: "🇸🇰", nativeName: "Slovenčina" },
  { code: "sl-SI", name: "Slovenian", flag: "🇸🇮", nativeName: "Slovenščina" },
  { code: "et-EE", name: "Estonian", flag: "🇪🇪", nativeName: "Eesti" },
  { code: "lv-LV", name: "Latvian", flag: "🇱🇻", nativeName: "Latviešu" },
  { code: "lt-LT", name: "Lithuanian", flag: "🇱🇹", nativeName: "Lietuvių" },
  { code: "uk-UA", name: "Ukrainian", flag: "🇺🇦", nativeName: "Українська" },
  { code: "he-IL", name: "Hebrew", flag: "🇮🇱", nativeName: "עברית" },
  { code: "th-TH", name: "Thai", flag: "🇹🇭", nativeName: "ไทย" },
  { code: "vi-VN", name: "Vietnamese", flag: "🇻🇳", nativeName: "Tiếng Việt" },
  { code: "id-ID", name: "Indonesian", flag: "🇮🇩", nativeName: "Bahasa Indonesia" },
  { code: "ms-MY", name: "Malay", flag: "🇲🇾", nativeName: "Bahasa Melayu" },
  { code: "tl-PH", name: "Filipino", flag: "🇵🇭", nativeName: "Filipino" },
  { code: "sw-KE", name: "Swahili", flag: "🇰🇪", nativeName: "Kiswahili" },
  { code: "am-ET", name: "Amharic", flag: "🇪🇹", nativeName: "አማርኛ" },
  { code: "bn-BD", name: "Bengali", flag: "🇧🇩", nativeName: "বাংলা" },
  { code: "ur-PK", name: "Urdu", flag: "🇵🇰", nativeName: "اردو" },
  { code: "fa-IR", name: "Persian", flag: "🇮🇷", nativeName: "فارسی" },
  { code: "ta-IN", name: "Tamil", flag: "🇮🇳", nativeName: "தமிழ்" },
  { code: "te-IN", name: "Telugu", flag: "🇮🇳", nativeName: "తెలుగు" },
  { code: "mr-IN", name: "Marathi", flag: "🇮🇳", nativeName: "मराठी" },
  { code: "gu-IN", name: "Gujarati", flag: "🇮🇳", nativeName: "ગુજરાતી" },
  { code: "kn-IN", name: "Kannada", flag: "🇮🇳", nativeName: "ಕನ್ನಡ" },
  { code: "ml-IN", name: "Malayalam", flag: "🇮🇳", nativeName: "മലയാളം" },
  { code: "pa-IN", name: "Punjabi", flag: "🇮🇳", nativeName: "ਪੰਜਾਬੀ" },
];

export const POPULAR_LANGUAGES = SUPPORTED_LANGUAGES.slice(0, 20);

export const getLanguageByCode = (code: string): Language | undefined => {
  return SUPPORTED_LANGUAGES.find(lang => lang.code === code);
};

export const getLanguageFlag = (code: string): string => {
  const language = getLanguageByCode(code);
  return language?.flag || "🌐";
};

export const getLanguageName = (code: string): string => {
  const language = getLanguageByCode(code);
  return language?.name || code;
};